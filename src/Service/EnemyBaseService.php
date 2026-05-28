<?php

namespace App\Service;

use App\Entity\Game;
use App\Entity\User;
use App\Repository\BuildingRepository;

class EnemyBaseService
{
    private $buildingRepo;

    public function __construct(BuildingRepository $buildingRepo)
    {
        $this->buildingRepo = $buildingRepo;
    }

    public function isTooCloseToEnemy(float $lat, float $lng, Game $game, User $user, float $minDistance = 1000): bool
    {
        $enemies = $this->buildingRepo->findBy(['game' => $game]);


        foreach ($enemies as $building) {

            if ($building->getUser()->getId() === $user->getId()) {
                continue;
            }
            
            if ($building->getLatitudeBuild() === null) {
                continue;
            }

            $distance = $this->distance(
                $lat,
                $lng,
                $building->getLatitudeBuild(),
                $building->getLongitudeBuild()
            );

            if ($distance < $minDistance) {
                return true;
            }
        }

        return false;
    }

    private function distance($lat1, $lng1, $lat2, $lng2): float
    {
        $earthRadius = 6371000;

        $dLat = deg2rad($lat2 - $lat1);
        $dLng = deg2rad($lng2 - $lng1);

        $a = sin($dLat / 2) ** 2 +
            cos(deg2rad($lat1)) *
            cos(deg2rad($lat2)) *
            sin($dLng / 2) ** 2;

        return 2 * $earthRadius * atan2(sqrt($a), sqrt(1 - $a));
    }
}