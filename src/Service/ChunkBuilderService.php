<?php

namespace App\Service;

use App\Entity\Chunk;
use App\Entity\Road;
use App\Entity\Building;
use App\Repository\ChunkRepository;
use App\Repository\RoadRepository;
use App\Repository\BuildingRepository;
use Doctrine\ORM\EntityManagerInterface;

class ChunkBuilderService
{
    public function __construct(
        private EntityManagerInterface $em,
        private ChunkRepository $chunkRepo,
        private RoadRepository $roadRepo,
        private BuildingRepository $buildingRepo
    ) {}

    /**
     * Met à jour le chunk spécifié après une modification (route ou building)
     */
    public function updateChunk(Chunk $chunk): void
    {
        // 1. Récupérer les données brutes
        $roads = $this->roadRepo->findByChunk($chunk);
        $buildings = $this->buildingRepo->findByChunk($chunk);

        // 2. Sérialiser pour le stockage JSON
        $data = [
            'roads' => $this->serializeRoads($roads),
            'buildings' => $this->serializeBuildings($buildings),
            'version' => time() // Pour invalider le cache si besoin
        ];

        // 3. Sauvegarder dans l'entité Chunk
        $chunk = $this->chunkRepo->findOrCreate($chunk->getChunkId());
        $chunk->setUpdatedAt(new \DateTimeImmutable());

        $this->em->flush();
    }

    private function serializeRoads(array $roads): array
    {
        return array_map(function(Road $road) {
            return [
                'id' => $road->getId(),
                'points' => $road->getPoints(),
                'type' => $road->getType(),
                'width' => $road->getWidth()
            ];
        }, $roads);
    }

    private function serializeBuildings(array $buildings): array
    {
        return array_map(function(Building $building) {
            return [
                'id' => $building->getId(),
                'lat' => $building->getLatitudeBuild(),
                'lng' => $building->getLongitudeBuild(),
                'level' => $building->getLevel(),
                'type' => $building->getBuildingType()
            ];
        }, $buildings);
    }
}