<?php

namespace App\Service;

use App\Entity\Game;
use App\Entity\User;

class EnemyBaseService
{
    public function isTooCloseToEnemy(float $lat, float $lng, Game $game, User $me, float $minDistance = 1000): bool
    {
        foreach ($game->getUsers() as $player) {

            if ($player->getId() === $me->getId()) {
                continue;
            }

            if (!$player->getLatitudeBase()) {
                continue;
            }

            $distance = $this->distance(
                $lat,
                $lng,
                $player->getLatitudeBase(),
                $player->getLongitudeBase()
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