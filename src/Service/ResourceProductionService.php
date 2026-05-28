<?php

namespace App\Service;

use App\Entity\PlayerInventory;
use App\Entity\User;
use App\Repository\BuildingRepository;
use App\Repository\ResourceTypeRepository;
use Doctrine\ORM\EntityManagerInterface;

class ResourceProductionService
{
    public function __construct(
        private readonly BuildingRepository $buildingRepository,
        private readonly ResourceTypeRepository $resourceTypeRepository,
        private readonly EntityManagerInterface $entityManager
    ) {}

    public function updatePlayerResources(User $user, ?\DateTimeImmutable $now = null): void
    {
        $now = $now ?? new \DateTimeImmutable();
        
        $firstInv = $user->getPlayerInventories()->first();
        $lastUpdate = ($firstInv instanceof PlayerInventory) ? $firstInv->getUpdatedAt() : $now;

        $elapsedSeconds = $now->getTimestamp() - $lastUpdate->getTimestamp();
        if ($elapsedSeconds < 3600) return;

        $elapsedHours = intdiv($elapsedSeconds, 3600);
        $ratesByResource = $this->buildingRepository->getProductionRatesByResourceForUser($user);

        foreach ($ratesByResource as $resourceCode => $ratePerHour) {
            $amount = (int) floor($ratePerHour * $elapsedHours);
            if ($amount > 0) {
                $this->addResource($user, $resourceCode, $amount, $now);
            }
        }
        $this->entityManager->flush();
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

        // Si l'inventaire n'existe pas encore pour cette ressource, on le crée
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