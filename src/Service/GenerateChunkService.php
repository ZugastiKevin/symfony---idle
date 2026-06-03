<?php

namespace App\Service;

use App\Entity\Chunk;
use App\Entity\ResourceDeposit;
use App\Entity\ResourceType;
use App\Entity\Road;
use App\Repository\ChunkRepository;
use App\Repository\ResourceTypeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;

/**
 * Service responsable de la génération du contenu d'un chunk,
 * notamment en allant chercher les données de routes depuis une API externe (Overpass).
 */
class GenerateChunkService
{
    public function __construct(
        private ResourceTypeRepository $resourceTypeRepository,
        private ChunkRepository $chunkRepository,
        private EntityManagerInterface $em,
        private LoggerInterface $logger,
        private CoordinateService $coordinateService
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
        $chunkId = $this->coordinateService->getChunkId($lat, $lng);
        $chunk = $this->chunkRepository->findOrCreate($chunkId);

        if ($chunk->getRoads()->count() > 0) {
            $this->logger->info("Génération de routes annulée pour le chunk {$chunkId} : déjà peuplé.");
            return [];
        }
        
        $this->logger->info("Démarrage de la génération de routes pour le chunk {$chunkId}...");
        $roads = $this->fetchFromOverpass($lat, $lng, $chunk);

        $allTypes = $this->resourceTypeRepository->findAll();

        if (empty($allTypes)) {
            $this->logger->warning("Aucun type de ressource trouvé en base de données !");
            return $roads;
        }

        // Filtrer pour n'inclure que les ressources extractibles (avec couleur définie)
        $allTypes = array_filter($allTypes, fn($rt) => !empty($rt->getColor()));

        // Vérifier qu'il reste des types valides après filtrage
        if (empty($allTypes)) {
            $this->logger->warning("Aucun type de ressource extractible trouvé (avec couleur définie) !");
            return $roads;
        }

        // Toujours générer au moins un dépôt si des routes existent
        $depositCount = !empty($roads) ? rand(1, min(2, count($roads))) : 0;
        $selectedRoads = [];

        if ($depositCount > 0) {
            $shuffled = $roads;
            shuffle($shuffled);
            $selectedRoads = array_slice($shuffled, 0, $depositCount);

            foreach ($selectedRoads as $road) {
                // Sélectionner une ressource selon sa rareté
                // 0 = Commun (80%), 1 = Rare (15%), 2 = Très rare (5%)
                $randomType = $this->selectResourceByRarity($allTypes);

                $deposit = new ResourceDeposit($randomType, (float)rand(8, 20) / 10);
                $deposit->setRoad($road);

                $points = $road->getPoints();
                if (!empty($points)) {
                    $deposit->setLatitude((float)$points[0][0]);
                    $deposit->setLongitude((float)$points[0][1]);
                }

                $this->em->persist($deposit);
                $this->logger->info("Dépôt [{$randomType->getCode()}] généré sur la route {$road->getId()}.");
            }
        }

        $this->em->flush();

        $actualDepositCount = count($selectedRoads);
        $this->logger->info("Génération terminée pour le chunk {$chunkId} : " . count($roads) . " routes, {$actualDepositCount} dépôt(s).");
        return $roads;
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

        $roads = [];
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

            $roads[] = $road;
        }

        // Met à jour la date de modification du chunk pour l'invalidation du cache
        $chunk->setUpdatedAt(new \DateTimeImmutable());
        $this->em->persist($chunk);

        $this->em->flush();

        $this->logger->info(count($roads) . " routes générées pour le chunk " . $chunk->getChunkId());

        return $roads;
    }

    /**
     * Sélectionne une ressource selon sa rareté.
     * 0 = Commun (80%), 1 = Rare (15%), 2 = Très rare (5%)
     */
    private function selectResourceByRarity(array $types): ResourceType
    {
        $roll = rand(1, 100);

        if ($roll <= 10) {
            // Très rare (10%)
            $rareTypes = array_filter($types, fn($rt) => $rt->getRarity() >= 2);
            if (!empty($rareTypes)) {
                return $rareTypes[array_rand($rareTypes)];
            }
        }

        if ($roll <= 25) {
            // Rare (20%)
            $rareTypes = array_filter($types, fn($rt) => $rt->getRarity() >= 1);
            if (!empty($rareTypes)) {
                return $rareTypes[array_rand($rareTypes)];
            }
        }

        // Commun (70%)
        $commonTypes = array_filter($types, fn($rt) => $rt->getRarity() === 0);
        if (!empty($commonTypes)) {
            return $commonTypes[array_rand($commonTypes)];
        }

        // Fallback : retourne n'importe quel type disponible
        return $types[array_rand($types)];
    }
}