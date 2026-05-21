<?php

namespace App\Service;

use App\Repository\ChunkRepository;

/**
 * Service de logique métier lié aux routes.
 * Permet de vérifier des informations sur les routes, comme la proximité.
 * Orchestre la génération de routes si elles n'existent pas.
 */
class RoadService
{
    public function __construct(
        private ChunkRepository $chunkRepository,
        private GenerateChunkService $chunkGenerator, // Service pour générer le contenu d'un chunk
        private CoordinateService $coordinateService // Service pour les calculs GPS
    ) {}

    /**
     * Vérifie si un point GPS est à proximité d'une route.
     * Si le chunk correspondant n'a pas encore été généré, cette méthode déclenchera sa génération.
     *
     * @param float $lat Latitude du point à vérifier
     * @param float $lng Longitude du point à vérifier
     * @param float $maxDistance Distance maximale autorisée en mètres
     * @return bool
     */
    public function isNearRoad(float $lat, float $lng, float $maxDistance = 50): bool
    {
        // 1. Obtenir l'ID du chunk et le récupérer depuis la BDD
        $chunkId = $this->coordinateService->getChunkId($lat, $lng);
        $chunk = $this->chunkRepository->findOneBy(['chunkId' => $chunkId]);

        // 2. Si le chunk n'existe pas ou n'a pas de routes, le générer
        if (!$chunk || $chunk->getRoads()->isEmpty()) {
            $this->chunkGenerator->generate($lat, $lng);
            // Re-récupérer le chunk depuis la BDD pour avoir les routes fraîchement créées
            $chunk = $this->chunkRepository->findOneBy(['chunkId' => $chunkId]);
        }

        // Si après génération, le chunk n'existe toujours pas (erreur API?), on considère qu'on n'est pas près d'une route
        if (!$chunk) {
            return false;
        }

        // 3. Parcourir les routes du chunk et vérifier la distance
        foreach ($chunk->getRoads() as $road) {
            $points = $road->getPoints();
            for ($i = 0; $i < count($points) - 1; $i++) {
                $a = $points[$i];
                $b = $points[$i + 1];

                // Utilise la méthode privée pour calculer la distance au segment de route
                if ($this->distanceToSegment($lat, $lng, $a, $b) < $maxDistance) {
                    return true; // Dès qu'on trouve une route assez proche, on retourne true
                }
            }
        }

        // Si aucune route n'a été trouvée à proximité après avoir tout vérifié
        return false;
    }

    /**
     * Calcule la distance la plus courte entre un point et un segment de ligne [a, b].
     * Utilise une approximation pour le gameplay, pas un calcul géodésique précis.
     *
     * @param float $lat Latitude du point
     * @param float $lng Longitude du point
     * @param array $a Point de départ du segment [lat, lng]
     * @param array $b Point d'arrivée du segment [lat, lng]
     * @return float La distance approximative
     */
    private function distanceToSegment(float $lat, float $lng, array $a, array $b): float
    {
        $x = $lat;
        $y = $lng;
        $x1 = $a[0];
        $y1 = $a[1];
        $x2 = $b[0];
        $y2 = $b[1];

        $A = $x - $x1;
        $B = $y - $y1;
        $C = $x2 - $x1;
        $D = $y2 - $y1;

        $dot = $A * $C + $B * $D;
        $lenSq = $C * $C + $D * $D;

        if ($lenSq == 0) { // a et b sont le même point
            return $this->coordinateService->distance($x, $y, $x1, $y1);
        }

        $param = $dot / $lenSq;

        if ($param < 0) { // Le point le plus proche est a
            return $this->coordinateService->distance($x, $y, $x1, $y1);
        } elseif ($param > 1) { // Le point le plus proche est b
            return $this->coordinateService->distance($x, $y, $x2, $y2);
        }

        // Le point le plus proche est sur le segment
        $xx = $x1 + $param * $C;
        $yy = $y1 + $param * $D;

        return $this->coordinateService->distance($x, $y, $xx, $yy);
    }
}