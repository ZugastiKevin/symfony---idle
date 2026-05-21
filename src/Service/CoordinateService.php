<?php

namespace App\Service;

class CoordinateService
{
    private const EARTH_RADIUS_METERS = 6371000;
    private const CHUNK_SIZE_DIVIDER = 100;

    /**
     * Calcule la distance en mètres entre deux points GPS en utilisant la formule Haversine.
     *
     * @param float $lat1 Latitude du point 1
     * @param float $lon1 Longitude du point 1
     * @param float $lat2 Latitude du point 2
     * @param float $lon2 Longitude du point 2
     * @return float La distance en mètres
     */
    public function distance(float $lat1, float $lon1, float $lat2, float $lon2): float
    {
        $dLat = deg2rad($lat2 - $lat1);
        $dLon = deg2rad($lon2 - $lon1);

        $a = sin($dLat / 2) ** 2 +
            cos(deg2rad($lat1)) *
            cos(deg2rad($lat2)) *
            sin($dLon / 2) ** 2;

        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        return self::EARTH_RADIUS_METERS * $c;
    }

    /**
     * Génère un identifiant de chunk unique basé sur les coordonnées GPS.
     *
     * @param float $lat Latitude
     * @param float $lng Longitude
     * @return string L'identifiant du chunk (ex: "4885_234")
     */
    public function getChunkId(float $lat, float $lng): string
    {
        return floor($lat * self::CHUNK_SIZE_DIVIDER) . '_' . floor($lng * self::CHUNK_SIZE_DIVIDER);
    }
}
