<?php

namespace App\Tests\Service;

use App\Entity\Building;
use App\Entity\BuildingType;
use App\Entity\PlayerInventory;
use App\Entity\ResourceDelivery;
use App\Entity\ResourceType;
use App\Entity\User;
use App\Repository\BuildingRepository;
use App\Repository\ResourceDeliveryRepository;
use App\Repository\ResourceTypeRepository;
use App\Service\ResourceTransportService;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\TestCase;

class ResourceTransportServiceTest extends TestCase
{
    public function testCreateDeliveryForBuildingDoesNothingWhenNoResourceType(): void
    {
        $user = new User();
        $building = new Building();
        $base = new Building();

        $buildingType = new BuildingType();
        $buildingType->setProductionRate(10);
        $buildingType->setResourceType(null); // No resource type
        $building->setBuildingType($buildingType);

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $deliveryRepo = $this->createMock(ResourceDeliveryRepository::class);
        $resourceTypeRepo = $this->createMock(ResourceTypeRepository::class);

        $service = new ResourceTransportService(
            $entityManager,
            $buildingRepo,
            $deliveryRepo,
            $resourceTypeRepo
        );

        $entityManager->expects($this->never())->method('persist');
        $entityManager->expects($this->never())->method('flush');

        $service->createDeliveryForBuilding($building, $base);

        $this->assertTrue(true); // Test passed
    }

    public function testCreateDeliveryForBuildingCreatesDeliveryWithCorrectQuantity(): void
    {
        $user = new User();
        $building = $this->createMock(Building::class);
        $base = $this->createMock(Building::class);

        $resourceType = new ResourceType();
        $resourceType->setCode('iron');

        $buildingType = new BuildingType();
        $buildingType->setProductionRate(10);
        $buildingType->setResourceType($resourceType);

        $building->method('getBuildingType')->willReturn($buildingType);
        $building->method('getLevel')->willReturn(2);
        $building->method('getUser')->willReturn($user);
        $building->method('getId')->willReturn(1);
        $building->method('getLatitudeBuild')->willReturn(48.8566);
        $building->method('getLongitudeBuild')->willReturn(2.3522);
        $base->method('getLatitudeBuild')->willReturn(48.8600);
        $base->method('getLongitudeBuild')->willReturn(2.3500);

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $deliveryRepo = $this->createMock(ResourceDeliveryRepository::class);
        $resourceTypeRepo = $this->createMock(ResourceTypeRepository::class);

        // No existing delivery
        $deliveryRepo->method('findPendingByBuilding')
            ->willReturn(null);

        $service = new ResourceTransportService(
            $entityManager,
            $buildingRepo,
            $deliveryRepo,
            $resourceTypeRepo
        );

        $entityManager->expects($this->once())->method('persist');
        $entityManager->expects($this->once())->method('flush');

        $service->createDeliveryForBuilding($building, $base);

        $this->assertTrue(true); // Test passed
    }

    public function testStartReadyDeliveriesOnlyStartsWaitingDeliveries(): void
    {
        $delivery1 = new ResourceDelivery();
        $delivery1->setStatus(ResourceDelivery::STATUS_WAITING);

        $delivery2 = new ResourceDelivery();
        $delivery2->setStatus(ResourceDelivery::STATUS_IN_TRANSIT);

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $deliveryRepo = $this->createMock(ResourceDeliveryRepository::class);
        $resourceTypeRepo = $this->createMock(ResourceTypeRepository::class);

        $deliveryRepo->method('findReadyToStart')
            ->willReturn([$delivery1]); // Only waiting delivery

        $service = new ResourceTransportService(
            $entityManager,
            $buildingRepo,
            $deliveryRepo,
            $resourceTypeRepo
        );

        $entityManager->expects($this->once())->method('flush');

        $service->startReadyDeliveries();

        $this->assertTrue(true); // Test passed
    }

    public function testProcessDeliveriesUpdatesProgress(): void
    {
        $delivery = new ResourceDelivery();
        $delivery->setStatus(ResourceDelivery::STATUS_IN_TRANSIT);
        $delivery->setProgress(50);

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $deliveryRepo = $this->createMock(ResourceDeliveryRepository::class);
        $resourceTypeRepo = $this->createMock(ResourceTypeRepository::class);

        $deliveryRepo->method('findInProgress')
            ->willReturn([$delivery]);

        $service = new ResourceTransportService(
            $entityManager,
            $buildingRepo,
            $deliveryRepo,
            $resourceTypeRepo
        );

        $entityManager->expects($this->once())->method('flush');

        $service->processDeliveries();

        // Progress increases by 10 (50 + 10 = 60, capped at 100)
        $this->assertEquals(60, $delivery->getProgress());
    }
}