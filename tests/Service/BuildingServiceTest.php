<?php

namespace App\Tests\Service;

use App\Entity\Building;
use App\Entity\BuildingType;
use App\Entity\ResourceType;
use App\Entity\User;
use App\Entity\PlayerInventory;
use App\Entity\BuildingCost;
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
        $user = new User();

        $resourceType = new ResourceType();
        $resourceType->setCode('iron');

        $buildingType = new BuildingType();
        $buildingType->setName('test_building');

        $cost = new BuildingCost();
        $cost->setResourceType($resourceType);
        $cost->setCosts(10);
        $buildingType->addCost($cost);

        $inventory = new PlayerInventory();
        $inventory->setResourceType($resourceType);
        $inventory->setQuantity(20);
        $user->addPlayerInventory($inventory);

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

        $cost = new BuildingCost();
        $cost->setResourceType($resourceType);
        $cost->setCosts(10);
        $buildingType->addCost($cost);

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

    public function testCanAffordReturnsTrueWhenNoCosts(): void
    {
        $user = new User();

        $buildingType = new BuildingType();
        $buildingType->setName('free_building');
        // No costs

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $buildingTypeRepo = $this->createMock(BuildingTypeRepository::class);
        $inventoryRepo = $this->createMock(PlayerInventoryRepository::class);

        $service = new BuildingService($entityManager, $buildingRepo, $buildingTypeRepo, $inventoryRepo);

        $this->assertTrue($service->canAfford($user, $buildingType, 1));
    }

    public function testCanAffordWithMultipleResources(): void
    {
        $user = new User();

        $iron = new ResourceType();
        $iron->setCode('iron');

        $wood = new ResourceType();
        $wood->setCode('wood');

        $buildingType = new BuildingType();
        $buildingType->setName('complex_building');

        $ironCost = new BuildingCost();
        $ironCost->setResourceType($iron);
        $ironCost->setCosts(10);
        $buildingType->addCost($ironCost);

        $woodCost = new BuildingCost();
        $woodCost->setResourceType($wood);
        $woodCost->setCosts(20);
        $buildingType->addCost($woodCost);

        // Enough iron, not enough wood
        $ironInventory = new PlayerInventory();
        $ironInventory->setResourceType($iron);
        $ironInventory->setQuantity(20);
        $user->addPlayerInventory($ironInventory);

        $woodInventory = new PlayerInventory();
        $woodInventory->setResourceType($wood);
        $woodInventory->setQuantity(10);
        $user->addPlayerInventory($woodInventory);

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $buildingTypeRepo = $this->createMock(BuildingTypeRepository::class);
        $inventoryRepo = $this->createMock(PlayerInventoryRepository::class);

        $service = new BuildingService($entityManager, $buildingRepo, $buildingTypeRepo, $inventoryRepo);

        $this->assertFalse($service->canAfford($user, $buildingType, 1));
    }

    public function testCanUpgradeReturnsFalseWhenNextLevelExceedsMax(): void
    {
        $user = new User();

        $buildingType = new BuildingType();
        $buildingType->setMaxLevel(2);

        $building = new Building();
        $building->setLevel(2);
        $building->setBuildingType($buildingType);
        $building->setUser($user);

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $buildingTypeRepo = $this->createMock(BuildingTypeRepository::class);
        $inventoryRepo = $this->createMock(PlayerInventoryRepository::class);

        $service = new BuildingService($entityManager, $buildingRepo, $buildingTypeRepo, $inventoryRepo);

        $this->assertFalse($service->canUpgrade($building));
    }

    public function testGetBuildCostsReturnsCorrectAmounts(): void
    {
        $resourceType = new ResourceType();
        $resourceType->setCode('iron');

        $buildingType = new BuildingType();
        $buildingType->setName('test_building');

        $cost = new BuildingCost();
        $cost->setResourceType($resourceType);
        $cost->setCosts(10);
        $buildingType->addCost($cost);

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $buildingTypeRepo = $this->createMock(BuildingTypeRepository::class);
        $inventoryRepo = $this->createMock(PlayerInventoryRepository::class);

        $service = new BuildingService($entityManager, $buildingRepo, $buildingTypeRepo, $inventoryRepo);

        $costs = $service->getBuildCosts($buildingType, 2); // Level 2 = 20 iron

        $this->assertEquals(['iron' => 20], $costs);
    }
}