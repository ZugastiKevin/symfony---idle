<?php

namespace App\Service;

use App\Repository\ChunkRepository;
use Psr\Log\LoggerInterface;
use Symfony\Component\Console\Command\Command;

/**
 * Ce service contient la logique métier pour l'expansion procédurale du monde du jeu.
 */
class WorldExpansionService
{
    private const CHUNK_SIZE = 0.01; // Correspond à 1 / 100 dans CoordinateService

    public function __construct(
        private ChunkRepository $chunkRepository,
        private GenerateChunkService $generateChunkService,
        private LoggerInterface $logger
    ) {
    }

    /**
     * Exécute une passe d'expansion du monde.
     * Trouve un chunk peuplé, cherche un voisin vide et le génère.
     *
     * @return int Le statut de l'opération (inspiré des statuts de commande Symfony).
     */
    public function expand(): int
    {
        // 1. Trouver un chunk aléatoire qui a déjà des routes
        $populatedChunk = $this->chunkRepository->findRandomChunkWithRoads();

        if (!$populatedChunk) {
            $this->logger->warning('[WorldExpansion] Aucun chunk peuplé de routes trouvé. Impossible d\'étendre le monde.');
            return Command::SUCCESS;
        }

        $this->logger->info('[WorldExpansion] Chunk de départ trouvé : ' . $populatedChunk->getChunkId());

        // 2. Extraire les coordonnées de base du chunkId
        [$x, $y] = array_map('intval', explode('_', $populatedChunk->getChunkId()));

        // 3. Définir les 8 voisins potentiels et les mélanger
        $neighbors = [
            [$x + 1, $y], [$x - 1, $y], [$x, $y + 1], [$x, $y - 1],
            [$x + 1, $y + 1], [$x + 1, $y - 1], [$x - 1, $y + 1], [$x - 1, $y - 1],
        ];
        shuffle($neighbors);

        // 4. Chercher un voisin vide et le générer
        foreach ($neighbors as $neighborCoords) {
            [$nx, $ny] = $neighborCoords;
            $neighborChunkId = "{$nx}_{$ny}";

            $neighborChunk = $this->chunkRepository->findOneByChunkId($neighborChunkId);

            if (!$neighborChunk || $neighborChunk->getRoads()->isEmpty()) {
                $this->logger->info("[WorldExpansion] Voisin vide trouvé : {$neighborChunkId}. Tentative de génération...");

                $lat = $nx * self::CHUNK_SIZE;
                $lng = $ny * self::CHUNK_SIZE;

                $generatedRoads = $this->generateChunkService->generate($lat, $lng);

                if (count($generatedRoads) > 0) {
                    $this->logger->info("[WorldExpansion] Le chunk {$neighborChunkId} a été généré avec " . count($generatedRoads) . " routes.");
                    return Command::SUCCESS;
                } else {
                    $this->logger->warning("[WorldExpansion] La génération du chunk {$neighborChunkId} n'a produit aucune route ou a échoué.");
                }
            }
        }

        $this->logger->info('[WorldExpansion] Aucun chunk voisin vide trouvé pour ' . $populatedChunk->getChunkId() . '.');
        return Command::SUCCESS;
    }
}
