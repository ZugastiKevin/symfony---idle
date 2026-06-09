<?php

namespace App\Service;

use App\Entity\Building;
use App\Entity\PlayerInventory;
use App\Entity\ResourceDelivery;
use App\Entity\ResourceType;
use App\Entity\User;
use App\Repository\BuildingRepository;
use App\Repository\ResourceDeliveryRepository;
use App\Repository\ResourceTypeRepository;
use Doctrine\ORM\EntityManagerInterface;

class ResourceTransportService
{
    private const TRUCK_CAPACITY = 100;

    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly BuildingRepository $buildingRepository,
        private readonly ResourceDeliveryRepository $deliveryRepository,
        private readonly ResourceTypeRepository $resourceTypeRepository
    ) {}

    /**
     * Crée une livraison pour un bâtiment producteur
     * La production est créée et la livraison est planifiée pour le prochain trajet
     */
    public function createDeliveryForBuilding(Building $building, Building $base): void
    {
        $buildingType = $building->getBuildingType();
        $resourceType = $buildingType->getResourceType();
        $user = $building->getUser();

        if (!$resourceType || !$user) {
            return;
        }

        // Vérifier s'il y a déjà une livraison en cours pour ce bâtiment
        $existingDelivery = $this->deliveryRepository->findPendingByBuilding($building->getId());
        if ($existingDelivery) {
            return;
        }

        // Calculer la quantité à livrer (niveau × production_rate)
        $level = $building->getLevel() ?? 1;
        $productionRate = $buildingType->getProductionRate() ?? 0;
        $quantity = (int) ($productionRate * $level);

        if ($quantity <= 0) {
            return;
        }

        // Calculer le temps estimé de trajet
        $distance = $this->haversineDistance(
            $building->getLatitudeBuild(),
            $building->getLongitudeBuild(),
            $base->getLatitudeBuild(),
            $base->getLongitudeBuild()
        );
        $estimatedTime = 3 + (int)($distance / 100);

        // Créer la livraison avec statut WAITING
        // scheduledAt = 1h dans le futur (prochaine production)
        $delivery = new ResourceDelivery();
        $delivery->setQuantity($quantity);
        $delivery->setStatus(ResourceDelivery::STATUS_WAITING);
        $delivery->setProgress(0);
        $delivery->setEstimatedTime($estimatedTime);
        $delivery->setResource($resourceType);
        $delivery->setSourceBuilding($building);
        $delivery->setTargetBuilding($base);
        $delivery->setScheduledAt(new \DateTimeImmutable('+3600 seconds'));
        $delivery->setUser($user);

        $this->entityManager->persist($delivery);
        $this->entityManager->flush();
    }

    /**
     * Démarre les livraisons prêtes (statut WAITING → IN_TRANSIT)
     */
    public function startReadyDeliveries(): void
    {
        $now = new \DateTimeImmutable();
        $readyDeliveries = $this->deliveryRepository->findReadyToStart($now);

        foreach ($readyDeliveries as $delivery) {
            $delivery->startDelivery();
        }

        if (!empty($readyDeliveries)) {
            $this->entityManager->flush();
        }
    }

    /**
     * Traite les livraisons en cours (met à jour le progrès)
     */
    public function processDeliveries(): void
    {
        $pendingDeliveries = $this->deliveryRepository->findInProgress(0);

        foreach ($pendingDeliveries as $delivery) {
            $delivery->setProgress(min(100, $delivery->getProgress() + 10));

            if ($delivery->getProgress() >= 100) {
                $this->completeDelivery($delivery);
            }
        }

        if (!empty($pendingDeliveries)) {
            $this->entityManager->flush();
        }
    }

    /**
     * Termine une livraison (statut → DELIVERED) et crédite les ressources au joueur
     * PUIS crée une nouvelle livraison pour la prochaine production
     */
    private function completeDelivery(ResourceDelivery $delivery): void
    {
        $delivery->setStatus(ResourceDelivery::STATUS_DELIVERED);
        $delivery->setDeliveredAt(new \DateTimeImmutable());

        // Créditer les ressources au joueur
        $user = $delivery->getTargetBuilding()?->getUser();
        $quantity = $delivery->getQuantity();
        if ($user && $delivery->getResource()) {
            $this->addResourcesToUser($user, $delivery->getResource(), $quantity);
        }
    }

    /**
     * Crédite des ressources à un utilisateur
     */
    private function addResourcesToUser(User $user, ResourceType $resourceType, int $quantity): void
    {
        $inventory = $this->entityManager->getRepository(PlayerInventory::class)
            ->findOneBy([
                'player' => $user,
                'resourceType' => $resourceType
            ]);

        if (!$inventory) {
            $inventory = new PlayerInventory();
            $inventory->setPlayer($user);
            $inventory->setResourceType($resourceType);
            $inventory->setQuantity(0);
        }

        $inventory->setQuantity($inventory->getQuantity() + $quantity);
        $inventory->setUpdatedAt(new \DateTimeImmutable());

        $this->entityManager->persist($inventory);
    }

    /**
     * Calcule la distance entre deux points (formule de Haversine)
     */
    private function haversineDistance(float $lat1, float $lon1, float $lat2, float $lon2): float
    {
        $earthRadius = 6371000; // mètres
        $dLat = deg2rad($lat2 - $lat1);
        $dLon = deg2rad($lon2 - $lon1);
        $a = sin($dLat/2) * sin($dLat/2) +
             cos(deg2rad($lat1)) * cos(deg2rad($lat2)) *
             sin($dLon/2) * sin($dLon/2);
        $c = 2 * atan2(sqrt($a), sqrt(1-$a));
        return $earthRadius * $c;
    }
}