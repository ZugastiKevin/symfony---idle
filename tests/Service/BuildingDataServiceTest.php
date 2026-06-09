<?php

namespace App\Tests\Service;

use App\DTO\BuildingData;
use App\Entity\Building;
use App\Entity\BuildingType;
use App\Entity\Game;
use App\Entity\User;
use App\Repository\BuildingRepository;
use App\Repository\UserRepository;
use App\Service\BuildingDataService;
use PHPUnit\Framework\TestCase;

class BuildingDataServiceTest extends TestCase
{
    public function testGetBuildingsDataForGameReturnsEmptyArrayWhenNoBuildings(): void
    {
        $game = new Game();
        $user = new User();
        $game->addUser($user);

        $buildingRepo = $this->createMock(BuildingRepository::class);
        $userRepo = $this->createMock(UserRepository::class);

        $buildingRepo->method('findBy')
            ->with(['game' => $game])
            ->willReturn([]);

        $service = new BuildingDataService($buildingRepo, $userRepo);

        $result = $service->getBuildingsDataForGame($game);

        $this->assertEmpty($result);
    }

    public function testGetBuildingsDataForGameReturnsCorrectData(): void
    {
        $game = new Game();

        $buildingType = new BuildingType();
        $buildingType->setName('mine');
        $buildingType->setCode('iron_mine');
        $buildingType->setProductionRate(10.5);

        // Mock user with getId()
        $userMock = $this->createMock(User::class);
        $userMock->method('getId')->willReturn(42);
        $userMock->method('getFaction')->willReturn(null); // Will use 'default'

        // Mock building
        $buildingMock = $this->createMock(Building::class);
        $buildingMock->method('getId')->willReturn(100);
        $buildingMock->method('getLatitudeBuild')->willReturn(48.8566);
        $buildingMock->method('getLongitudeBuild')->willReturn(2.3522);
        $buildingMock->method('getLevel')->willReturn(2);
        $buildingMock->method('getBuildingType')->willReturn($buildingType);
        $buildingMock->method('getUser')->willReturn($userMock);

        $buildingRepo = $this->createMock(BuildingRepository::class);
        $userRepo = $this->createMock(UserRepository::class);

        $buildingRepo->method('findBy')
            ->with(['game' => $game])
            ->willReturn([$buildingMock]);

        $service = new BuildingDataService($buildingRepo, $userRepo);

        $result = $service->getBuildingsDataForGame($game);

        $this->assertCount(1, $result);
        $this->assertInstanceOf(BuildingData::class, $result[0]);
        $this->assertEquals(100, $result[0]->id);
        $this->assertEquals(42, $result[0]->ownerId);
        $this->assertEquals('default', $result[0]->faction);
    }
}