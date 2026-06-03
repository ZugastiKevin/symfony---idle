<?php

namespace App\Service;

use App\Entity\PlayerInventory;
use App\Entity\User;
use App\Repository\ResourceTypeRepository;
use Doctrine\ORM\EntityManagerInterface;

class PlayerInventoryInitializer
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly ResourceTypeRepository $resourceTypeRepository
    ) {}

    /**
     * Initialise les inventaires d'un joueur avec toutes les ressources à 0.
     */
    public function initializePlayerInventories(User $user): void
    {
        // Vérifier si le joueur a déjà des inventaires
        if ($user->getPlayerInventories()->count() > 0) {
            return;
        }

        $resourceTypes = $this->resourceTypeRepository->findAll();

        foreach ($resourceTypes as $resourceType) {
            $inventory = new PlayerInventory();
            $inventory->setPlayer($user);
            $inventory->setResourceType($resourceType);
            $inventory->setQuantity(0);
            $inventory->setUpdatedAt(new \DateTimeImmutable());

            $this->entityManager->persist($inventory);
        }

        $this->entityManager->flush();
    }
}