<?php

namespace App\Controller\Api;

use App\Entity\Building;
use App\Entity\User;
use App\Repository\BuildingRepository;
use App\Repository\BuildingTypeRepository;
use App\Repository\ChunkRepository;
use App\Repository\RoadRepository;
use App\Service\EnemyBaseService;
use App\Service\GenerateChunkService;
use App\Service\RoadService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use Symfony\Contracts\Cache\CacheInterface;

#[IsGranted('ROLE_USER')]
final class GameApiController extends AbstractController
{
    // -------------------------
    // WORLD STATE
    // -------------------------
    #[Route('/api/world-state', name: 'api_world_state', methods: ['GET'])]
    public function worldState(BuildingRepository $buildingRepo): JsonResponse
    {
        $user = $this->getUser();

        if (!$user instanceof User) {
            return $this->json([], 401);
        }

        $game = $user->getGame();

        if (!$game) {
            return $this->json([]);
        }

        $buildingData = $buildingRepo->getBuildingsDataForGame($game);

        $bases = [];

        foreach ($game->getUsers() as $player) {

            $lat = $player->getLatitudeBase();
            $lng = $player->getLongitudeBase();

            if ($lat !== null && $lng !== null) {
                $bases[] = [
                    'lat' => $lat,
                    'lng' => $lng,
                    'pseudo' => $player->getPseudo(),
                    'isMe' => $player->getId() === $user->getId(),
                ];
            }
        }

        return $this->json([
            'buildings' => $buildingData,
            'bases' => $bases
        ]);
    }

    // -------------------------
    // CREATE BASE
    // -------------------------
    #[Route('/api/create-base', name: 'api_create_base', methods: ['POST'])]
    public function createBase(
        Request $request,
        EntityManagerInterface $em,
        RoadService $roadService,
        EnemyBaseService $enemyService
    ): JsonResponse {

        $user = $this->getUser();

        if (!$user instanceof User) {
            return $this->json(['error' => 'Not logged'], 401);
        }

        if ($user->getLatitudeBase() && $user->getLongitudeBase()) {
            return $this->json(['error' => 'Base already exists'], 400);
        }

        $data = json_decode($request->getContent(), true);

        $lat = $data['lat'] ?? null;
        $lng = $data['lng'] ?? null;

        if ($lat === null || $lng === null) {
            return $this->json(['error' => 'Invalid data'], 400);
        }

        $game = $user->getGame();

        if (!$game) {
            return $this->json(['error' => 'No active game'], 400);
        }

        if ($enemyService->isTooCloseToEnemy($lat, $lng, $game, $user)) {
            return $this->json(['error' => 'Too close to enemy base'], 403);
        }

        if (!$roadService->isNearRoad($lat, $lng)) {
            return $this->json(['error' => 'Must be near a road'], 403);
        }

        $user->setLatitudeBase($lat);
        $user->setLongitudeBase($lng);

        $em->persist($user);
        $em->flush();

        return $this->json(['status' => 'base_created']);
    }

    // -------------------------
    // BUILD
    // -------------------------
    #[Route('/api/build', name: 'api_build', methods: ['POST'])]
    public function build(
        Request $request,
        EntityManagerInterface $em,
        BuildingTypeRepository $buildingTypeRepo,
        RoadService $roadService,
        EnemyBaseService $enemyService,
        ChunkRepository $chunkRepo,
        CacheInterface $gameCache,
        \App\Service\CoordinateService $coordinateService
    ): JsonResponse {

        $user = $this->getUser();

        if (!$user instanceof User) {
            return $this->json(['error' => 'Not logged'], 401);
        }

        $data = json_decode($request->getContent(), true);

        $lat = $data['lat'] ?? null;
        $lng = $data['lng'] ?? null;
        $typeId = $data['type_id'] ?? null;

        if ($lat === null || $lng === null || $typeId === null) {
            return $this->json(['error' => 'Invalid data'], 400);
        }

        $game = $user->getGame();

        if (!$game) {
            return $this->json(['error' => 'No active game'], 400);
        }

        if (!$user->getLatitudeBase()) {
            return $this->json(['error' => 'No base'], 400);
        }

        $distance = $coordinateService->distance(
            $lat,
            $lng,
            $user->getLatitudeBase(),
            $user->getLongitudeBase()
        );

        if ($distance > 500) {
            return $this->json(['error' => 'Too far from base'], 403);
        }

        if ($enemyService->isTooCloseToEnemy($lat, $lng, $game, $user)) {
            return $this->json(['error' => 'Too close to enemy base'], 403);
        }

        if (!$roadService->isNearRoad($lat, $lng)) {
            return $this->json(['error' => 'Must be near a road'], 403);
        }

        $buildingType = $buildingTypeRepo->find($typeId);

        if (!$buildingType) {
            return $this->json(['error' => 'Type not found'], 404);
        }

        $chunkId = floor($lat * 100) . '_' . floor($lng * 100);

        $chunk = $chunkRepo->findOrCreate($chunkId);

        $building = new Building();
        $building->setUser($user);
        $building->setGame($game);
        $building->setChunk($chunk);
        $building->setBuildingType($buildingType);
        $building->setLatitudeBuild($lat);
        $building->setLongitudeBuild($lng);
        $building->setLevel(1);

        $em->persist($building);

        $chunk->addBuilding($building);

        if ($buildingType->getName() === 'base') {
            $user->setLatitudeBase($lat);
            $user->setLongitudeBase($lng);
            $em->persist($user);
        }

        $chunk->setUpdatedAt(new \DateTimeImmutable());

        $em->flush();

        // Invalider le cache pour ce chunk
        $cacheKey = 'chunk_' . str_replace(['{', '}', '(', ')', '/', '\\', '@', ':'], '_', $chunk->getChunkId());
        $gameCache->delete($cacheKey);

        return $this->json(['status' => 'ok', 'chunkId' => $chunk->getChunkId()]);
    }

    // -------------------------
    // MAP DATA
    // -------------------------
    #[Route('/api/map-data', name: 'api_map', methods: ['GET'])]
    public function mapData(BuildingRepository $buildingRepo): JsonResponse
    {
        $user = $this->getUser();

        if (!$user instanceof User) {
            return $this->json([], 401);
        }

        $game = $user->getGame();

        if (!$game) {
            return $this->json([]);
        }

        return $this->json($buildingRepo->getBuildingsDataForGame($game));
    }

    // -------------------------
    // ROADS
    // -------------------------
    #[Route('/api/roads', name: 'api_roads', methods: ['GET'])]
    public function roads(RoadRepository $repo): JsonResponse
    {
        $roads = $repo->findAll();

        return $this->json(array_map(fn($r) => [
            'points' => $r->getPoints(),
            'type' => $r->getType(),
        ], $roads));
    }

    #[Route('/api/chunks/bulk', methods: ['POST'])]
    public function getChunksBulk(
        Request $request,
        ChunkRepository $chunkRepo
    ): JsonResponse {

        $data = json_decode($request->getContent(), true);

        $chunkIds = $data['chunks'] ?? [];

        if (!is_array($chunkIds)) {
            return $this->json([
                'error' => 'Invalid chunks'
            ], 400);
        }

        $chunks = $chunkRepo->findChunksWithRelations($chunkIds);

        $result = [];

        foreach ($chunks as $chunk) {

            $roads = [];

            foreach ($chunk->getRoads() as $road) {

                $roads[] = [
                    'id' => $road->getId(),
                    'points' => $road->getPoints(),
                    'type' => $road->getType(),
                    'width' => $road->getWidth()
                ];
            }

            $buildings = [];

            foreach ($chunk->getBuildings() as $building) {

                $buildings[] = [
                    'id' => $building->getId(),
                    'lat' => $building->getLatitudeBuild(),
                    'lng' => $building->getLongitudeBuild(),
                    'type' => $building->getBuildingType()->getName(),
                    'level' => $building->getLevel()
                ];
            }

            $result[$chunk->getChunkId()] = [
                'roads' => $roads,
                'buildings' => $buildings,
                'updatedAt' => $chunk
                    ->getUpdatedAt()
                    ->format('c')
            ];
        }

        return $this->json($result);
    }

    #[Route('/api/add-roads-chunk', methods: ['POST'])]
    public function addRoadsChunk(
        Request $request,
        GenerateChunkService $generator
    ): JsonResponse {

        $data = json_decode($request->getContent(), true);

        $lat = (float) ($data['lat'] ?? 0);
        $lng = (float) ($data['lng'] ?? 0);

        if (!$lat || !$lng) {
            return $this->json(['error' => 'Invalid data'], 400);
        }

        $roads = $generator->generate($lat, $lng);

        return $this->json([
            'status' => 'ok',
            'roads_created' => count($roads)
        ]);
    }
}