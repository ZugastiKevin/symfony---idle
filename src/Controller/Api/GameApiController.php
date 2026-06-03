<?php

namespace App\Controller\Api;

use App\Entity\Building;
use App\Entity\BuildingType;
use App\Entity\Game;
use App\Entity\User;
use App\Repository\BuildingRepository;
use App\Repository\BuildingTypeRepository;
use App\Repository\ChunkRepository;
use App\Repository\ResourceDepositRepository;
use App\Repository\ResourceTypeRepository;
use App\Service\CoordinateService;
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
    private const CACHE_VERSION = 'v1';

    public function __construct(
        private readonly \App\Service\ResourceProductionService $resourceProductionService,
        private readonly \App\Service\BuildingService $buildingService,
        private readonly CoordinateService $coordinateService,
    ) {}

    // -------------------------
    // WORLD STATE
    // -------------------------
    #[Route('/api/world-state', name: 'api_world_state', methods: ['GET'])]
    public function worldState(
        BuildingRepository $buildingRepo,
        EntityManagerInterface $em
    ): JsonResponse {
        $user = $this->getUser();

        if (!$user instanceof User) {
            return $this->json([], 401);
        }

        $game = $user->getGame();

        if (!$game) {
            return $this->json([]);
        }

        $this->resourceProductionService->updatePlayerResources($user);
        $em->flush();

        $buildingData = $buildingRepo->getBuildingsDataForGame($game);

        $dataPlayers = [];

        foreach ($game->getUsers() as $player) {
            $baseBuilding = $buildingRepo->findBaseForUser($player);

            if ($baseBuilding) {
                $dataPlayers[] = [
                    'lat' => $baseBuilding->getLatitudeBuild(),
                    'lng' => $baseBuilding->getLongitudeBuild(),
                    'faction' => strtolower($player->getFaction()?->getCode() ?? 'default'),
                    'pseudo' => $player->getPseudo(),
                    'isMe' => $player->getId() === $user->getId(),
                ];
            }
        }

        $resources = [];
        foreach ($user->getPlayerInventories() as $inv) {
            $resources[$inv->getResourceType()->getCode()] = $inv->getQuantity();
        }

        $updatedAt = null;
        $firstInventory = $user->getPlayerInventories()->first();

        if ($firstInventory instanceof \App\Entity\PlayerInventory) {
            $updatedAt = $firstInventory->getUpdatedAt();
        }

        return $this->json([
            'buildings' => $buildingData,
            'players' => $dataPlayers,
            'resources' => $resources,
            'updatedAt' => $updatedAt?->format('c'),
        ]);
    }

    // -------------------------
    // PLAYER RESOURCES
    // -------------------------
    #[Route('/api/player-resources', name: 'api_player_resources', methods: ['GET'])]
    public function playerResources(
        EntityManagerInterface $em
    ): JsonResponse {
        $user = $this->getUser();

        if (!$user instanceof User) {
            return $this->json([], 401);
        }

        $this->resourceProductionService->updatePlayerResources($user);
        $em->flush();

        return $this->json([
            'resources' => array_map(fn($inv) => [
                'type' => $inv->getResourceType()->getCode(),
                'quantity' => $inv->getQuantity()
            ], $user->getPlayerInventories()->toArray()),
            'updatedAt' => $user->getPlayerInventories()->first()?->getUpdatedAt()?->format('c'),
        ]);
    }

    // -------------------------
    // BUILD
    // -------------------------
    #[Route('/api/build', name: 'api_build', methods: ['POST'])]
    public function build(
        Request $request,
        EntityManagerInterface $em,
        BuildingRepository $buildingRepo,
        BuildingTypeRepository $buildingTypeRepo,
        RoadService $roadService,
        EnemyBaseService $enemyService,
        ChunkRepository $chunkRepo,
        CacheInterface $gameCache,
        ResourceDepositRepository $depositRepo,
        CoordinateService $coordinateService
    ): JsonResponse {

        $user = $this->getUser();
        if (!$user instanceof User) {
            return $this->json(['error' => 'Not logged'], 401);
        }

        $game = $user->getGame();
        if (!$game) {
            return $this->json(['error' => 'No active game'], 400);
        }

        $data = json_decode($request->getContent(), true);
        $lat = $data['lat'] ?? null;
        $lng = $data['lng'] ?? null;
        $typeId = $data['type_id'] ?? null;
        $depositId = $data['deposit_id'] ?? null;

        // Cas spécial: construction depuis un dépôt
        if ($depositId !== null) {
            return $this->buildFromDeposit($depositId, $typeId, $user, $game, $em, $buildingRepo, $buildingTypeRepo, $depositRepo, $gameCache, $coordinateService);
        }

        if ($lat === null || $lng === null || $typeId === null) {
            return $this->json(['error' => 'Invalid data'], 400);
        }

        $buildingType = $buildingTypeRepo->find($typeId);
        if (!$buildingType) {
            return $this->json(['error' => 'Type not found'], 404);
        }

        $existingBase = $buildingRepo->findBaseForUser($user);

        // 1. Gestion spécifique pour la création de la base
        if ($buildingType->getName() === 'base') {
            if ($existingBase) {
                return $this->json(['error' => 'Base already exists'], 400);
            }
        }
        // 2. Pour tout autre bâtiment, la base est obligatoire et la distance est vérifiée
        else {
            if (!$existingBase) {
                return $this->json(['error' => 'You need a base to build'], 400);
            }

            $distance = $coordinateService->distance($lat, $lng, $existingBase->getLatitudeBuild(), $existingBase->getLongitudeBuild());
            if ($distance > 500) {
                return $this->json(['error' => 'Too far from base'], 403);
            }
        }

        // 3. Vérification des coûts
        if (!$this->buildingService->canAfford($user, $buildingType, 1)) {
            return $this->json(['error' => 'Not enough resources'], 403);
        }

        // 4. Vérifications communes (Enemy proximity & Road)
        if ($enemyService->isTooCloseToEnemy($lat, $lng, $game, $user)) {
            return $this->json(['error' => 'Too close to enemy base'], 403);
        }

        if (!$roadService->isNearRoad($lat, $lng)) {
            return $this->json(['error' => 'Must be near a road'], 403);
        }

        // 4. Persistance du bâtiment
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

        if ($buildingType->getProductionRate() > 0 && $buildingType->getResourceType() !== null) {
            $deposit = $depositRepo->findNearestAvailable($lat, $lng);

            if ($deposit) {
                if ($deposit->getResourceType()->getId() !== $buildingType->getResourceType()->getId()) {
                    return $this->json(['error' => 'Ce bâtiment ne peut pas extraire cette ressource.'], 403);
                }

                $deposit->setIsClaimed(true);
                $building->setResourceDeposit($deposit);
            } else {
                return $this->json(['error' => 'No deposit found here'], 403);
            }
        }


        $em->persist($building);
        $chunk->addBuilding($building);
        $chunk->setUpdatedAt(new \DateTimeImmutable());

        // Consommer les ressources
        $this->buildingService->consumeResources($user, $buildingType, 1);

        $em->flush();

        // Invalider le cache pour ce chunk
        $cacheKey = self::CACHE_VERSION . '_chunk_' . str_replace(['{', '}', '(', ')', '/', '\\', '@', ':'], '_', $chunk->getChunkId());
        $gameCache->delete($cacheKey);

        return $this->json(['status' => 'ok', 'chunkId' => $chunk->getChunkId()]);
    }

    // -------------------------
    // BUILDINGS VISIBLE
    // -------------------------
    #[Route('/api/buildings/visible', methods: ['POST'])]
    public function getBuildingsVisible(
        Request $request,
        BuildingRepository $buildingRepo
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);
        $chunkIds = $data['chunks'] ?? [];

        // Récupérer uniquement les bâtiments dans ces chunks
        $buildings = $buildingRepo->findBy(['chunk' => $chunkIds]);

        $result = [];
        foreach ($buildings as $building) {
            $result[] = [
                'id' => $building->getId(),
                'lat' => $building->getLatitudeBuild(),
                'lng' => $building->getLongitudeBuild(),
                'type' => $building->getBuildingType()->getName(),
                'level' => $building->getLevel()
            ];
        }

        return $this->json($result);
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

    #[Route('/api/chunks/bulk', methods: ['POST'])]
    public function getChunksBulk(Request $request, ChunkRepository $chunkRepo): JsonResponse {
        $data = json_decode($request->getContent(), true);
        $chunkIds = $data['chunks'] ?? [];
        
        $chunks = $chunkRepo->findBy(['chunkId' => $chunkIds]); // Find simple

        $result = [];
        foreach ($chunks as $chunk) {
            $roads = [];
            foreach ($chunk->getRoads() as $road) {
                $roads[] = [
                    'points' => $road->getPoints(),
                    'type' => $road->getType(),
                    'width' => $road->getWidth()
                ];
            }
            $result[$chunk->getChunkId()] = ['roads' => $roads];
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

    #[Route('/api/deposits/{chunkId}', methods: ['GET'], requirements: ['chunkId' => '-?\d+_-?\d+'])]
    public function getDeposits(string $chunkId, ResourceDepositRepository $depositRepo, ChunkRepository $chunkRepo): JsonResponse
    {
        // Il faut retrouver le chunk par son ID pour filtrer les dépôts via les routes
        $chunk = $chunkRepo->findOneBy(['chunkId' => $chunkId]);
        if (!$chunk) return $this->json([]);

        $deposits = $depositRepo->findBy(['road' => $chunk->getRoads()->toArray()]);

        return $this->json(array_map(fn($d) => [
            'id' => $d->getId(),
            'type' => $d->getResourceType()->getCode(),
            'richness' => $d->getRichness(),
            'latitude' => $d->getLatitude(),
            'longitude' => $d->getLongitude(),
            'is_claimed' => $d->getIsClaimed(),
        ], $deposits));
    }

    #[Route('/api/building-types', name: 'api_building_types', methods: ['GET'])]
    public function getBuildingTypes(BuildingTypeRepository $buildingTypeRepo): JsonResponse
    {
        $types = $buildingTypeRepo->findAll();
        return $this->json(array_map(fn($bt) => [
            'id' => $bt->getId(),
            'name' => $bt->getName(),
            'code' => $bt->getCode(),
            'base_costs' => $this->buildingService->getBuildCosts($bt, 1),
            'production_rate' => $bt->getProductionRate(),
            'max_level' => $bt->getMaxLevel(),
            'resource_type' => $bt->getResourceType()?->getCode(),
        ], $types));
    }

    #[Route('/api/deposits/bulk', methods: ['POST'])]
    public function bulkDeposits(Request $request, ResourceDepositRepository $depositRepo): JsonResponse
    {
        $chunks = json_decode($request->getContent(), true)['chunks'] ?? [];
        $result = [];

        foreach ($chunks as $chunkId) {
            $deposits = $depositRepo->findByChunkId($chunkId);
            $result[$chunkId] = array_map(fn($d) => [
                'id'            => $d->getId(),
                'resource_type' => $d->getResourceType()->getCode(),
                'richness'      => $d->getRichness(),
                'latitude'      => $d->getLatitude(),
                'longitude'     => $d->getLongitude(),
                'is_claimed'    => $d->getIsClaimed(),
            ], $deposits);
        }

        return new JsonResponse($result);
    }

    // -------------------------
    // BUILDING UPGRADE
    // -------------------------
    #[Route('/api/building/{id}/upgrade', name: 'api_building_upgrade', methods: ['POST'])]
    public function upgradeBuilding(Building $building): JsonResponse
    {
        $user = $this->getUser();
        if (!$user instanceof User || $building->getUser()->getId() !== $user->getId()) {
            return $this->json(['error' => 'Unauthorized'], 403);
        }

        if (!$this->buildingService->upgrade($building)) {
            return $this->json(['error' => 'Cannot upgrade'], 400);
        }

        return $this->json([
            'status' => 'ok',
            'newLevel' => $building->getLevel(),
        ]);
    }

    #[Route('/api/building/{id}/upgrade-info', name: 'api_building_upgrade_info', methods: ['GET'])]
    public function getUpgradeInfo(Building $building): JsonResponse
    {
        $user = $this->getUser();
        if (!$user instanceof User || $building->getUser()->getId() !== $user->getId()) {
            return $this->json(['error' => 'Unauthorized'], 403);
        }

        return $this->json($this->buildingService->getUpgradeInfo($building));
    }

    // -------------------------
    // BUILDING COSTS
    // -------------------------
    #[Route('/api/building-types/{id}/costs', name: 'api_building_costs', methods: ['GET'])]
    public function getBuildingCosts(BuildingType $buildingType): JsonResponse
    {
        return $this->json([
            'buildingTypeId' => $buildingType->getId(),
            'name' => $buildingType->getName(),
            'costs' => $this->buildingService->getBuildCosts($buildingType, 1),
        ]);
    }

    // -------------------------
    // CLAIM DEPOSIT (EXTRACTOR BUILDING)
    // -------------------------
    #[Route('/api/deposit/{id}/claim', name: 'api_claim_deposit', methods: ['POST'])]
    public function claimDeposit(
        int $id,
        EntityManagerInterface $em,
        BuildingTypeRepository $buildingTypeRepo,
        BuildingRepository $buildingRepo,
        ChunkRepository $chunkRepo,
        ResourceDepositRepository $depositRepo
    ): JsonResponse {
        $user = $this->getUser();
        if (!$user instanceof User) {
            return $this->json(['error' => 'Not logged'], 401);
        }

        $game = $user->getGame();
        if (!$game) {
            return $this->json(['error' => 'No active game'], 400);
        }

        // Trouver le dépôt
        $deposit = $depositRepo->find($id);
        if (!$deposit) {
            return $this->json(['error' => 'Deposit not found'], 404);
        }

        // Vérifier qu'il n'est pas déjà exploité
        if ($deposit->getIsClaimed()) {
            return $this->json(['error' => 'Deposit already claimed'], 400);
        }

        // Trouver le type de bâtiment extracteur pour cette ressource
        $resourceType = $deposit->getResourceType();
        $extractorType = $buildingTypeRepo->findOneBy([
            'resourceType' => $resourceType,
            'production_rate' => null, // Les extracteurs n'ont pas de production_rate (ils déposent)
        ]);

        // Alternative: chercher par nom ou code
        if (!$extractorType) {
            // Chercher un bâtiment "extractor" ou "mine" lié à ce type de ressource
            $extractorType = $buildingTypeRepo->createQueryBuilder('bt')
                ->where('bt.resourceType = :rt')
                ->andWhere('bt.production_rate IS NOT NULL')
                ->setParameter('rt', $resourceType)
                ->getQuery()
                ->getOneOrNullResult();
        }

        if (!$extractorType) {
            return $this->json(['error' => 'No extractor building for this resource'], 404);
        }

        // Vérifier la base du joueur
        $existingBase = $buildingRepo->findBaseForUser($user);
        if (!$existingBase) {
            return $this->json(['error' => 'You need a base to claim deposits'], 400);
        }

        // Vérifier les coûts
        if (!$this->buildingService->canAfford($user, $extractorType, 1)) {
            return $this->json(['error' => 'Not enough resources'], 403);
        }

        // Vérifier la distance (doit être à proximité du dépôt)
        $distance = $this->coordinateService->distance(
            $deposit->getLatitude(),
            $deposit->getLongitude(),
            $existingBase->getLatitudeBuild(),
            $existingBase->getLongitudeBuild()
        );
        if ($distance > 500) {
            return $this->json(['error' => 'Too far from base'], 403);
        }

        // Consommer les ressources
        $this->buildingService->consumeResources($user, $extractorType, 1);

        // Créer le bâtiment extracteur
        $lat = $deposit->getLatitude();
        $lng = $deposit->getLongitude();

        $chunkId = floor($lat * 100) . '_' . floor($lng * 100);
        $chunk = $chunkRepo->findOrCreate($chunkId);

        $building = new Building();
        $building->setUser($user);
        $building->setGame($game);
        $building->setChunk($chunk);
        $building->setBuildingType($extractorType);
        $building->setLatitudeBuild($lat);
        $building->setLongitudeBuild($lng);
        $building->setLevel(1);
        $building->setResourceDeposit($deposit);

        // Marquer le dépôt comme exploité
        $deposit->setIsClaimed(true);

        $em->persist($building);
        $chunk->addBuilding($building);
        $chunk->setUpdatedAt(new \DateTimeImmutable());

        $em->flush();

        return $this->json([
            'status' => 'ok',
            'buildingId' => $building->getId(),
            'chunkId' => $chunk->getChunkId(),
        ]);
    }

    // -------------------------
    // BUILD FROM DEPOSIT
    // -------------------------
    private function buildFromDeposit(
        int $depositId,
        int $typeId,
        User $user,
        Game $game,
        EntityManagerInterface $em,
        BuildingRepository $buildingRepo,
        BuildingTypeRepository $buildingTypeRepo,
        ResourceDepositRepository $depositRepo,
        CacheInterface $gameCache,
        CoordinateService $coordinateService
    ): JsonResponse {
        try {
            // Trouver le dépôt
            $deposit = $depositRepo->find($depositId);
            if (!$deposit) {
                return $this->json(['error' => 'Deposit not found'], 404);
            }

            // Vérifier la route du dépôt
            $road = $deposit->getRoad();
            if (!$road) {
                return $this->json(['error' => 'Deposit has no road'], 400);
            }

            // Vérifier qu'il n'est pas déjà exploité
            if ($deposit->getIsClaimed()) {
                return $this->json(['error' => 'Deposit already claimed'], 400);
            }

            // Trouver le type de bâtiment
            $buildingType = $buildingTypeRepo->find($typeId);
            if (!$buildingType) {
                return $this->json(['error' => 'Building type not found'], 404);
            }

            // Vérifier la base du joueur
            $existingBase = $buildingRepo->findBaseForUser($user);
            if (!$existingBase) {
                return $this->json(['error' => 'You need a base to claim deposits'], 400);
            }

            // Vérifier les coûts
            if (!$this->buildingService->canAfford($user, $buildingType, 1)) {
                return $this->json(['error' => 'Not enough resources'], 403);
            }

            // Vérifier la distance
            $distance = $coordinateService->distance(
                $deposit->getLatitude(),
                $deposit->getLongitude(),
                $existingBase->getLatitudeBuild(),
                $existingBase->getLongitudeBuild()
            );
            if ($distance > 500) {
                return $this->json(['error' => 'Too far from base'], 403);
            }

        // Consommer les ressources
        $this->buildingService->consumeResources($user, $buildingType, 1);

        // Créer le bâtiment sur les coordonnées du dépôt
        $lat = $deposit->getLatitude();
        $lng = $deposit->getLongitude();

        // Récupérer le chunk depuis la route du dépôt
        $chunk = $road->getChunk();
        if (!$chunk) {
            return $this->json(['error' => 'Deposit chunk not found'], 400);
        }

        $building = new Building();
        $building->setUser($user);
        $building->setGame($game);
        $building->setChunk($chunk);
        $building->setBuildingType($buildingType);
        $building->setLatitudeBuild($lat);
        $building->setLongitudeBuild($lng);
        $building->setLevel(1);
        $building->setResourceDeposit($deposit);

        // Marquer le dépôt comme exploité
        $deposit->setIsClaimed(true);

        $em->persist($building);
        $chunk->addBuilding($building);
        $chunk->setUpdatedAt(new \DateTimeImmutable());

        $em->flush();
        } catch (\Exception $e) {
            return $this->json(['error' => 'Server error: ' . $e->getMessage()], 500);
        }

        // Invalider le cache
        $cacheKey = self::CACHE_VERSION . '_chunk_' . str_replace(['{', '}', '(', ')', '/', '\\', '@', ':'], '_', $chunk->getChunkId());
        $gameCache->delete($cacheKey);

        return $this->json([
            'status' => 'ok',
            'buildingId' => $building->getId(),
            'chunkId' => $chunk->getChunkId(),
        ]);
    }

    // -------------------------
    // RESOURCE TYPE
    // -------------------------
    #[Route('/api/resource-types', name: 'api_resource_types', methods: ['GET'])]
    public function getResource(ResourceTypeRepository $resourceType): JsonResponse
    {
        $types = $resourceType->findAll();

        return $this->json(array_map(fn($rt) => [
            'id' => $rt->getId(),
            'label' => $rt->getLabel(),
            'code' => $rt->getCode(),
            'color' => $rt->getColor(),
        ], $types));
    }
}

