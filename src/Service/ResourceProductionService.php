<?php

namespace App\Service;

use App\Entity\PlayerInventory;
use App\Entity\User;
use App\Repository\BuildingRepository;
use App\Repository\ResourceDeliveryRepository;
use App\Repository\ResourceTypeRepository;
use Doctrine\ORM\EntityManagerInterface;

class ResourceProductionService
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly BuildingRepository $buildingRepository,
        private readonly ResourceDeliveryRepository $deliveryRepository,
        private readonly ResourceTypeRepository $resourceTypeRepository,
        private readonly ResourceTransportService $transportService
    ) {}

    /**
     * Produit les ressources pour un joueur (appelé toutes les heures)
     */
    public function updatePlayerResources(User $user, ?\DateTimeImmutable $now = null): void
    {
        $now = $now ?? new \DateTimeImmutable();

        // Vérifier la dernière production
        $firstInv = $user->getPlayerInventories()->first();
        $lastUpdate = ($firstInv instanceof PlayerInventory) ? $firstInv->getUpdatedAt() : $now;

        $elapsedSeconds = $now->getTimestamp() - $lastUpdate->getTimestamp();
        if ($elapsedSeconds < 3600) return; // Attendre 1h minimum

        $elapsedHours = intdiv($elapsedSeconds, 3600);
        $ratesByResource = $this->buildingRepository->getProductionRatesByResourceForUser($user);

        foreach ($ratesByResource as $resourceCode => $ratePerHour) {
            $amount = (int) floor($ratePerHour * $elapsedHours);
            if ($amount <= 0) continue;

            // Vérifier s'il y a déjà une livraison en cours pour cette ressource
            $hasDelivery = $this->deliveryRepository->hasDeliveryForResource($user, $resourceCode);
            if ($hasDelivery) {
                continue; // Attendre la livraison précédente
            }

            // Produire les ressources
            $this->addResource($user, $resourceCode, $amount, $now);
        }

        $this->entityManager->flush();
    }

    /**
     * Crée les livraisons pour les bâtiments producteurs sans livraison en cours
     * S'execute toutes les heures pour les bâtiments ayant une production et créés il y a plus d'1h
     */
    public function scheduleDeliveries(User $user): void
    {
        $buildings = $this->buildingRepository->getProducerBuildingsWithoutDelivery($user);
        $base = $this->buildingRepository->findBaseForUser($user);

        if (!$base) {
            return;
        }

        foreach ($buildings as $building) {
            // Vérifier que le bâtiment a bien une production
            $buildingType = $building->getBuildingType();
            if ($buildingType->getProductionRate() > 0 && $buildingType->getResourceType() !== null) {
                $this->transportService->createDeliveryForBuilding($building, $base);
            }
        }
    }

    private function addResource(User $user, string $code, int $amount, \DateTimeImmutable $now): void
    {
        foreach ($user->getPlayerInventories() as $inventory) {
            if ($inventory->getResourceType()->getCode() === $code) {
                $inventory->setQuantity($inventory->getQuantity() + $amount);
                $inventory->setUpdatedAt($now);
                return;
            }
        }

        $resourceType = $this->resourceTypeRepository->findOneBy(['code' => $code]);
        if ($resourceType) {
            $newInv = new PlayerInventory();
            $newInv->setPlayer($user);
            $newInv->setResourceType($resourceType);
            $newInv->setQuantity($amount);
            $newInv->setUpdatedAt($now);
            $this->entityManager->persist($newInv);
        }
    }
}