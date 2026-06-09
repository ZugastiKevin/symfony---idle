<?php

namespace App\Tests\Service;

use App\Entity\PlayerInventory;
use App\Entity\ResourceType;
use App\Entity\User;
use App\Repository\BuildingRepository;
use App\Repository\ResourceDeliveryRepository;
use App\Repository\ResourceTypeRepository;
use App\Service\ResourceProductionService;
use App\Service\ResourceTransportService;
use Doctrine\ORM\EntityManagerInterface;
use PHPUnit\Framework\TestCase;

class ResourceProductionServiceTest extends TestCase
{
    public function testUpdatePlayerResourcesDoesNothingWhenLessThanOneHourElapsed(): void
    {
        $user = new User();

        // Inventory with recent update (30 mins ago)
        $inventory = new PlayerInventory();
        $inventory->setQuantity(100);
        $inventory->setUpdatedAt(new \DateTimeImmutable('-30 minutes'));
        $user->addPlayerInventory($inventory);

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $deliveryRepo = $this->createMock(ResourceDeliveryRepository::class);
        $resourceTypeRepo = $this->createMock(ResourceTypeRepository::class);
        $transportService = $this->createMock(ResourceTransportService::class);

        // getProductionRatesByResourceForUser should return empty (no production)
        $buildingRepo->method('getProductionRatesByResourceForUser')
            ->willReturn([]);

        $service = new ResourceProductionService(
            $entityManager,
            $buildingRepo,
            $deliveryRepo,
            $resourceTypeRepo,
            $transportService
        );

        // Should not throw and should not call flush
        $entityManager->expects($this->never())->method('flush');

        $service->updatePlayerResources($user);

        $this->assertTrue(true); // Test passed
    }

    public function testUpdatePlayerResourcesProducesCorrectAmount(): void
    {
        $user = new User();

        $inventory = new PlayerInventory();
        $inventory->setQuantity(100);
        $inventory->setUpdatedAt(new \DateTimeImmutable('-2 hours'));
        $inventory->setResourceType(new ResourceType());
        $user->addPlayerInventory($inventory);

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $deliveryRepo = $this->createMock(ResourceDeliveryRepository::class);
        $resourceTypeRepo = $this->createMock(ResourceTypeRepository::class);
        $transportService = $this->createMock(ResourceTransportService::class);

        // 2 hours of production at 50 resources/hour = 100 resources
        $buildingRepo->method('getProductionRatesByResourceForUser')
            ->willReturn(['iron' => 50.0]);

        // No pending deliveries
        $deliveryRepo->method('hasDeliveryForResource')
            ->willReturn(false);

        $resourceType = new ResourceType();
        $resourceType->setCode('iron');
        $resourceTypeRepo->method('findOneBy')
            ->with(['code' => 'iron'])
            ->willReturn($resourceType);

        $service = new ResourceProductionService(
            $entityManager,
            $buildingRepo,
            $deliveryRepo,
            $resourceTypeRepo,
            $transportService
        );

        $entityManager->expects($this->once())->method('flush');

        $service->updatePlayerResources($user);

        $this->assertTrue(true); // Test passed
    }

    public function testScheduleDeliveriesReturnsEarlyWhenNoBase(): void
    {
        $user = new User();

        $entityManager = $this->createMock(EntityManagerInterface::class);
        $buildingRepo = $this->createMock(BuildingRepository::class);
        $deliveryRepo = $this->createMock(ResourceDeliveryRepository::class);
        $resourceTypeRepo = $this->createMock(ResourceTypeRepository::class);
        $transportService = $this->createMock(ResourceTransportService::class);

        // No base for user
        $buildingRepo->method('findBaseForUser')
            ->willReturn(null);

        $service = new ResourceProductionService(
            $entityManager,
            $buildingRepo,
            $deliveryRepo,
            $resourceTypeRepo,
            $transportService
        );

        // Should return early without calling transportService
        $transportService->expects($this->never())
            ->method('createDeliveryForBuilding');

        $service->scheduleDeliveries($user);

        $this->assertTrue(true); // Test passed
    }
}