<?php

namespace App\Service;

use App\Entity\Chunk;
use App\Entity\Road;
use App\Repository\ChunkRepository;
use App\Repository\RoadRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * Service responsable de la génération du contenu d'un chunk,
 * notamment en allant chercher les données de routes depuis une API externe (Overpass).
 */
class GenerateChunkService
{
    public function __construct(
        private RoadRepository $roadRepository,
        private ChunkRepository $chunkRepository,
        private EntityManagerInterface $em,
        private LoggerInterface $logger,
        private CoordinateService $coordinateService // Injection du service de coordonnées
    ) {}

    /**
     * Génère les routes pour un chunk donné à partir de coordonnées.
     * Si les routes ont déjà été générées pour ce chunk, ne fait rien.
     *
     * @param float $lat Latitude pour identifier le chunk
     * @param float $lng Longitude pour identifier le chunk
     * @return array Les données des routes générées, ou un tableau vide si déjà fait ou en cas d'erreur.
     */
    public function generate(float $lat, float $lng): array
    {
        // Utilise le service centralisé pour obtenir l'ID du chunk
        $chunkId = $this->coordinateService->getChunkId($lat, $lng);

        // Récupère ou crée le chunk
        $chunk = $this->chunkRepository->findOrCreate($chunkId);

        // Évite la double génération en vérifiant si des routes existent déjà
        if ($chunk->getRoads()->count() > 0) {
            $this->logger->info("Génération de routes annulée pour le chunk {$chunkId} : déjà peuplé.");
            return [];
        }

        $this->logger->info("Début de la génération de routes pour le chunk {$chunkId} via Overpass API.");
        return $this->fetchFromOverpass($lat, $lng, $chunk);
    }

    /**
     * Interroge l'API Overpass pour récupérer les données de routes dans une zone géographique
     * et les persiste en base de données.
     *
     * @param float $lat
     * @param float $lng
     * @param Chunk $chunk L'entité Chunk à laquelle associer les routes
     * @return array
     */
    private function fetchFromOverpass(float $lat, float $lng, Chunk $chunk): array
    {
        // Définit la "boîte" de coordonnées à interroger
        $size = 0.01;
        $x = floor($lat / $size);
        $y = floor($lng / $size);
        $latMin = $x * $size;
        $latMax = ($x + 1) * $size;
        $lngMin = $y * $size;
        $lngMax = ($y + 1) * $size;

        // Requête Overpass QL
        $query = "[out:json][timeout:25];way[\"highway\"]($latMin,$lngMin,$latMax,$lngMax);out geom;";
        $url = "https://overpass-api.de/api/interpreter";

        // Appel à l'API avec gestion basique des erreurs
        $response = @file_get_contents($url, false, stream_context_create([
            'http' => [
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\nUser-Agent: MyGame/1.0",
                'content' => http_build_query(['data' => $query]),
                'timeout' => 20
            ]
        ]));

        if ($response === false) {
            $this->logger->error("Échec de l'appel à Overpass API pour le chunk " . $chunk->getChunkId());
            return [];
        }

        $data = json_decode($response, true);

        if (!isset($data['elements'])) {
            $this->logger->warning("Aucun élément 'elements' dans la réponse d'Overpass pour le chunk " . $chunk->getChunkId());
            return [];
        }

        $result = [];
        foreach ($data['elements'] as $way) {
            if (!isset($way['geometry']) || count($way['geometry']) < 2) continue;

            $points = [];
            foreach ($way['geometry'] as $node) {
                if (!isset($node['lat'], $node['lon'])) continue;
                $points[] = [(float)$node['lat'], (float)$node['lon']];
            }

            if (count($points) < 2) continue;

            // Crée et persiste l'entité Road
            $road = new Road();
            $road->setChunk($chunk);
            $road->setPoints($points);
            $road->setType($way['tags']['highway'] ?? 'road');
            $road->setWidth(isset($way['tags']['width']) ? (float)$way['tags']['width'] : 0);
            $this->em->persist($road);

            $result[] = [
                'points' => $points,
                'type' => $road->getType(),
                'width' => $road->getWidth()
            ];
        }

        // Met à jour la date de modification du chunk pour l'invalidation du cache
        $chunk->setUpdatedAt(new \DateTimeImmutable());
        $this->em->persist($chunk);

        $this->em->flush();

        $this->logger->info(count($result) . " routes générées pour le chunk " . $chunk->getChunkId());

        return $result;
    }
}