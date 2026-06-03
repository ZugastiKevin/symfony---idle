<?php

namespace App\Service;

use App\Entity\Building;
use App\Entity\BuildingType;
use App\Entity\PlayerInventory;
use App\Entity\User;
use App\Repository\BuildingRepository;
use App\Repository\BuildingTypeRepository;
use App\Repository\PlayerInventoryRepository;
use Doctrine\ORM\EntityManagerInterface;

class BuildingService
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly BuildingRepository $buildingRepository,
        private readonly BuildingTypeRepository $buildingTypeRepository,
        private readonly PlayerInventoryRepository $inventoryRepository,
    ) {}

    /**
     * Vérifie si le joueur a les ressources nécessaires pour construire un bâtiment.
     */
    public function canAfford(User $user, BuildingType $buildingType, int $level = 1): bool
    {
        $costs = $buildingType->getCosts();

        // Si pas de coûts définis, le bâtiment est gratuit
        if ($costs->isEmpty()) {
            return true;
        }

        foreach ($costs as $cost) {
            $required = $this->calculateCost($cost->getCosts(), $level);
            $available = $this->getResourceQuantity($user, $cost->getResourceType()->getCode());

            if ($available < $required) {
                return false;
            }
        }

        return true;
    }

    /**
     * Consomme les ressources nécessaires pour construire/améliorer un bâtiment.
     */
    public function consumeResources(User $user, BuildingType $buildingType, int $level = 1): void
    {
        $costs = $buildingType->getCosts();

        foreach ($costs as $cost) {
            $required = $this->calculateCost($cost->getCosts(), $level);
            $this->removeResource($user, $cost->getResourceType()->getCode(), $required);
        }
    }

    /**
     * Calcule le coût total pour une level donnée (coût de base * level).
     * Peut être ajusté selon une formule plus complexe si nécessaire.
     */
    private function calculateCost(int $baseCost, int $level): int
    {
        // Formule simple: coût croît linéairement avec le niveau
        // Exemple: level 1 = baseCost, level 2 = 2*baseCost, etc.
        return $baseCost * $level;
    }

    /**
     * Retourne la quantité de ressource disponible pour un utilisateur.
     */
    private function getResourceQuantity(User $user, string $resourceCode): int
    {
        foreach ($user->getPlayerInventories() as $inventory) {
            if ($inventory->getResourceType()->getCode() === $resourceCode) {
                return $inventory->getQuantity();
            }
        }

        return 0;
    }

    /**
     * Retourne les coûts nécessaires pour construire un bâtiment au niveau donné.
     * @return array<string, int> Map des codes ressources => quantités
     */
    public function getBuildCosts(BuildingType $buildingType, int $level = 1): array
    {
        $costs = [];

        foreach ($buildingType->getCosts() as $cost) {
            $costs[$cost->getResourceType()->getCode()] = $this->calculateCost($cost->getCosts(), $level);
        }

        return $costs;
    }

    /**
     * Vérifie si le joueur peut améliorer un bâtiment existant.
     */
    public function canUpgrade(Building $building): bool
    {
        $nextLevel = $building->getLevel() + 1;
        $maxLevel = $building->getBuildingType()->getMaxLevel();

        if ($nextLevel > $maxLevel) {
            return false;
        }

        return $this->canAfford(
            $building->getUser(),
            $building->getBuildingType(),
            $nextLevel
        );
    }

    /**
     * Améliore un bâtiment d'un niveau.
     */
    public function upgrade(Building $building): bool
    {
        if (!$this->canUpgrade($building)) {
            return false;
        }

        $nextLevel = $building->getLevel() + 1;
        $this->consumeResources(
            $building->getUser(),
            $building->getBuildingType(),
            $nextLevel
        );

        $building->setLevel($nextLevel);
        $this->entityManager->persist($building);
        $this->entityManager->flush();

        return true;
    }

    /**
     * Retourne le niveau maximum possible pour un bâtiment.
     */
    public function getMaxPossibleLevel(Building $building): int
    {
        $currentLevel = $building->getLevel();
        $maxLevel = $building->getBuildingType()->getMaxLevel();

        // Trouver le niveau maximum atteignable avec les ressources disponibles
        $user = $building->getUser();
        $buildingType = $building->getBuildingType();

        for ($level = $currentLevel + 1; $level <= $maxLevel; $level++) {
            if (!$this->canAfford($user, $buildingType, $level)) {
                return $level - 1;
            }
        }

        return $maxLevel;
    }

    /**
     * Retourne les informations de coût pour l'amélioration d'un bâtiment.
     * @return array{needed: array<string, int>, available: array<string, int>, canUpgrade: bool, maxLevel: int}
     */
    public function getUpgradeInfo(Building $building): array
    {
        $nextLevel = $building->getLevel() + 1;
        $maxLevel = $building->getBuildingType()->getMaxLevel();
        $canUpgrade = $nextLevel <= $maxLevel && $this->canUpgrade($building);
        $needed = $this->getBuildCosts($building->getBuildingType(), $nextLevel);
        $available = [];

        foreach ($needed as $code => $quantity) {
            $available[$code] = $this->getResourceQuantity($building->getUser(), $code);
        }

        return [
            'needed' => $needed,
            'available' => $available,
            'canUpgrade' => $canUpgrade,
            'maxLevel' => $maxLevel,
        ];
    }

    private function removeResource(User $user, string $code, int $amount): void
    {
        foreach ($user->getPlayerInventories() as $inventory) {
            if ($inventory->getResourceType()->getCode() === $code) {
                $newQty = $inventory->getQuantity() - $amount;
                $inventory->setQuantity(max(0, $newQty));
                $this->entityManager->persist($inventory);
                return;
            }
        }
    }
}