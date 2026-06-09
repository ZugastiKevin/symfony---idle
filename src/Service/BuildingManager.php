<?php

namespace App\Service;

use App\Entity\Building;
use App\Entity\BuildingType;
use App\Entity\Game;
use App\Entity\ResourceDelivery;
use App\Entity\User;
use App\Repository\BuildingRepository;
use App\Repository\BuildingTypeRepository;
use App\Repository\ChunkRepository;
use App\Repository\ResourceDepositRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\Cache\CacheInterface;

/**
 * Service gérant la construction, l'amélioration et la gestion des bâtiments.
 */
class BuildingManager
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly BuildingRepository $buildingRepository,
        private readonly BuildingTypeRepository $buildingTypeRepository,
        private readonly ChunkRepository $chunkRepository,
        private readonly ResourceDepositRepository $depositRepository,
        private readonly CacheInterface $cache,
    ) {}

    /**
     * Construit un bâtiment à une position donnée.
     */
    public function build(
        float $lat,
        float $lng,
        int $typeId,
        ?int $depositId,
        User $user,
        Game $game,
        CoordinateService $coordinateService,
        EnemyBaseService $enemyService,
        RoadService $roadService,
    ): array {
        $buildingType = $this->buildingTypeRepository->find($typeId);
        if (!$buildingType) {
            return ['error' => 'Type not found', 'status' => 404];
        }

        $existingBase = $this->buildingRepository->findBaseForUser($user);

        // Validation: base requirement
        if ($buildingType->getName() !== 'base' && !$existingBase) {
            return ['error' => 'You need a base to build', 'status' => 400];
        }

        // Validation: distance from base (for non-base buildings)
        if ($buildingType->getName() === 'base' && $existingBase) {
            return ['error' => 'Base already exists', 'status' => 400];
        }

        if ($buildingType->getName() !== 'base' && $existingBase) {
            $distance = $coordinateService->distance(
                $lat, $lng,
                $existingBase->getLatitudeBuild(),
                $existingBase->getLongitudeBuild()
            );
            if ($distance > 500) {
                return ['error' => 'Too far from base', 'status' => 403];
            }
        }

        // Validation: enemy proximity
        if ($enemyService->isTooCloseToEnemy($lat, $lng, $game, $user)) {
            return ['error' => 'Too close to enemy base', 'status' => 403];
        }

        // Validation: road proximity
        if (!$roadService->isNearRoad($lat, $lng)) {
            return ['error' => 'Must be near a road', 'status' => 403];
        }

        // Persistance du bâtiment
        return $this->persistBuilding(
            $lat, $lng, $typeId, $depositId, $user, $game, $buildingType, $existingBase
        );
    }

    /**
     * Améliore un bâtiment.
     */
    public function upgrade(Building $building, BuildingService $buildingService): array
    {
        if ($building->getUser()->getId() !== $building->getUser()->getId()) {
            return ['error' => 'Unauthorized', 'status' => 403];
        }

        if (!$buildingService->canUpgrade($building)) {
            return ['error' => 'Not enough resources', 'status' => 403];
        }

        if (!$buildingService->upgrade($building)) {
            return ['error' => 'Cannot upgrade', 'status' => 400];
        }

        return [
            'status' => 'ok',
            'newLevel' => $building->getLevel(),
        ];
    }

    /**
     * Récupère les informations d'amélioration d'un bâtiment.
     */
    public function getUpgradeInfo(Building $building, BuildingService $buildingService): array
    {
        return $buildingService->getUpgradeInfo($building);
    }

    /**
     * Claim un dépôt pour créer un extracteur.
     */
    public function claimDeposit(
        int $depositId,
        int $typeId,
        User $user,
        Game $game,
        BuildingTypeRepository $buildingTypeRepo,
        ChunkRepository $chunkRepo,
        CoordinateService $coordinateService,
        BuildingService $buildingService,
    ): array {
        $deposit = $this->depositRepository->find($depositId);
        if (!$deposit) {
            return ['error' => 'Deposit not found', 'status' => 404];
        }

        if ($deposit->getIsClaimed()) {
            return ['error' => 'Deposit already claimed', 'status' => 400];
        }

        $extractorType = $buildingTypeRepo->findOneBy([
            'resourceType' => $deposit->getResourceType(),
            'production_rate' => null,
        ]);

        if (!$extractorType) {
            $extractorType = $buildingTypeRepo->createQueryBuilder('bt')
                ->where('bt.resourceType = :rt')
                ->andWhere('bt.production_rate IS NOT NULL')
                ->setParameter('rt', $deposit->getResourceType())
                ->getQuery()
                ->getOneOrNullResult();
        }

        if (!$extractorType) {
            return ['error' => 'No extractor building for this resource', 'status' => 404];
        }

        $existingBase = $this->buildingRepository->findBaseForUser($user);
        if (!$existingBase) {
            return ['error' => 'You need a base to claim deposits', 'status' => 400];
        }

        if (!$buildingService->canAfford($user, $extractorType, 1)) {
            return ['error' => 'Not enough resources', 'status' => 403];
        }

        $distance = $coordinateService->distance(
            $deposit->getLatitude(),
            $deposit->getLongitude(),
            $existingBase->getLatitudeBuild(),
            $existingBase->getLongitudeBuild()
        );
        if ($distance > 500) {
            return ['error' => 'Too far from base', 'status' => 403];
        }

        return $this->createExtractorBuilding(
            $deposit, $extractorType, $user, $game, $existingBase, $chunkRepo, $buildingService
        );
    }

    /**
     * Récupère les données de popup pour un bâtiment.
     */
    public function getBuildingPopupData(
        Building $building,
        BuildingRepository $buildingRepo,
        ResourceDeliveryRepository $deliveryRepo,
    ): array {
        $buildingType = $building->getBuildingType();
        $level = $building->getLevel() ?? 1;
        $maxLevel = $buildingType->getMaxLevel() ?? 1;
        $production = $buildingType->getProductionRate() * $level;
        $resourceType = $buildingType->getResourceType()?->getCode();

        $upgradeInfo = $this->getUpgradeInfo($building, new BuildingService(
            $this->entityManager,
            $this->buildingRepository,
            $this->buildingTypeRepository,
            $this->entityManager->getRepository(\App\Entity\PlayerInventory::class),
        ));

        $timeRemaining = $deliveryRepo->getTimeUntilNextDeparture($building->getId());

        return [
            'building' => $building,
            'buildingType' => $buildingType,
            'level' => $level,
            'maxLevel' => $maxLevel,
            'production' => $production,
            'resourceType' => $resourceType,
            'needed' => $upgradeInfo['needed'] ?? [],
            'available' => $upgradeInfo['available'] ?? [],
            'canUpgrade' => $upgradeInfo['canUpgrade'] ?? false,
            'timeRemaining' => $timeRemaining,
        ];
    }

    private function persistBuilding(
        float $lat,
        float $lng,
        int $typeId,
        ?int $depositId,
        User $user,
        Game $game,
        BuildingType $buildingType,
        ?Building $existingBase,
    ): array {
        $chunkId = floor($lat * 100) . '_' . floor($lng * 100);
        $chunk = $this->chunkRepository->findOrCreate($chunkId);

        $building = new Building();
        $building->setUser($user);
        $building->setGame($game);
        $building->setChunk($chunk);
        $building->setBuildingType($buildingType);
        $building->setLatitudeBuild($lat);
        $building->setLongitudeBuild($lng);
        $building->setLevel(1);

        if ($buildingType->getProductionRate() > 0 && $buildingType->getResourceType() !== null) {
            $deposit = $depositId ? $this->depositRepository->find($depositId) : null;

            if ($deposit) {
                if ($deposit->getResourceType()->getId() !== $buildingType->getResourceType()->getId()) {
                    return ['error' => 'Ce bâtiment ne peut pas extraire cette ressource.', 'status' => 403];
                }

                $deposit->setIsClaimed(true);
                $building->setResourceDeposit($deposit);
            } else {
                return ['error' => 'No deposit found here', 'status' => 403];
            }
        }

        $this->entityManager->persist($building);
        $chunk->addBuilding($building);
        $chunk->setUpdatedAt(new \DateTimeImmutable());

        $this->entityManager->flush();

        // Invalider le cache
        $cacheKey = 'v1_chunk_' . str_replace(['{', '}', '(', ')', '/', '\\', '@', ':'], '_', $chunk->getChunkId());
        $this->cache->delete($cacheKey);

        return [
            'status' => 'ok',
            'chunkId' => $chunk->getChunkId(),
            'buildingId' => $building->getId(),
        ];
    }

    private function createExtractorBuilding(
        $deposit,
        $extractorType,
        User $user,
        Game $game,
        Building $existingBase,
        ChunkRepository $chunkRepo,
        BuildingService $buildingService,
    ): array {
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

        $buildingService->consumeResources($user, $extractorType, 1);

        $deposit->setIsClaimed(true);

        $this->entityManager->persist($building);
        $chunk->addBuilding($building);
        $chunk->setUpdatedAt(new \DateTimeImmutable());

        $this->entityManager->flush();

        return [
            'status' => 'ok',
            'buildingId' => $building->getId(),
            'chunkId' => $chunk->getChunkId(),
        ];
    }
}