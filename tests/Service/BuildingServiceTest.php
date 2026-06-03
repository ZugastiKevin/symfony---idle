<?php

namespace App\Tests\Service;

use App\Entity\Building;
use App\Entity\BuildingType;
use App\Entity\ResourceType;
use App\Entity\User;
use App\Entity\PlayerInventory;
use App\Repository\BuildingRepository;
use App\Repository\BuildingTypeRepository;
use App\Repository\PlayerInventoryRepository;
use App\Service\BuildingService;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\TestCase;

class BuildingServiceTest extends TestCase
{
    public function testCanAffordReturnsTrueWhenResourcesAvailable(): void
    {
        // Créer un utilisateur mock
        $user = new User();

        // Créer un type de ressource
        $resourceType = new ResourceType();
        $resourceType->setCode('iron');

        // Créer un building type avec coût
        $buildingType = new BuildingType();
        $buildingType->setName('test_building');

        // Créer le coût associé
        $cost = new \App\Entity\BuildingCost();
        $cost->setResourceType($resourceType);
        $cost->setCosts(10);
        $buildingType->addCost($cost);

        // Créer l'inventaire avec suffisamment de ressources
        $inventory = new PlayerInventory();
        $inventory->setResourceType($resourceType);
        $inventory->setQuantity(20);
        $user->addPlayerInventory($inventory);

        // Mocks des repositories
        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $buildingTypeRepo = $this->createMock(BuildingTypeRepository::class);
        $inventoryRepo = $this->createMock(PlayerInventoryRepository::class);

        $service = new BuildingService($entityManager, $buildingRepo, $buildingTypeRepo, $inventoryRepo);

        $this->assertTrue($service->canAfford($user, $buildingType, 1));
    }

    public function testCanAffordReturnsFalseWhenResourcesMissing(): void
    {
        $user = new User();

        $resourceType = new ResourceType();
        $resourceType->setCode('iron');

        $buildingType = new BuildingType();
        $buildingType->setName('test_building');

        $cost = new \App\Entity\BuildingCost();
        $cost->setResourceType($resourceType);
        $cost->setCosts(10);
        $buildingType->addCost($cost);

        // Inventaire avec peu de ressources
        $inventory = new PlayerInventory();
        $inventory->setResourceType($resourceType);
        $inventory->setQuantity(5);
        $user->addPlayerInventory($inventory);

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $buildingTypeRepo = $this->createMock(BuildingTypeRepository::class);
        $inventoryRepo = $this->createMock(PlayerInventoryRepository::class);

        $service = new BuildingService($entityManager, $buildingRepo, $buildingTypeRepo, $inventoryRepo);

        $this->assertFalse($service->canAfford($user, $buildingType, 1));
    }
}