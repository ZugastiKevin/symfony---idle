<?php

namespace App\Service;

use App\DTO\BuildingData;
use App\Entity\Building;
use App\Entity\Game;
use App\Repository\BuildingRepository;
use App\Repository\UserRepository;

/**
 * Service dédié à la transformation des données de building pour les APIs.
 * Sépare la logique de présentation de l'entité.
 */
class BuildingDataService
{
    public function __construct(
        private readonly BuildingRepository $buildingRepository,
        private readonly UserRepository $userRepository,
    ) {}

    /**
     * Récupère les données des bâtiments pour une partie donnée.
     *
     * @return array<int, BuildingData>
     */
    public function getBuildingsDataForGame(Game $game): array
    {
        $buildings = $this->buildingRepository->findBy(['game' => $game]);
        $buildingData = [];

        // Créer une map des factions des joueurs
        $playerFactions = [];
        foreach ($game->getUsers() as $player) {
            $playerFactions[$player->getId()] = strtolower($player->getFaction()?->getCode() ?? 'default');
        }

        foreach ($buildings as $building) {
            $buildingData[] = $this->buildBuildingData($building, $playerFactions);
        }

        return $buildingData;
    }

    /**
     * Construit les données d'un seul building.
     */
    private function buildBuildingData(Building $building, array $playerFactions): BuildingData
    {
        $buildingType = $building->getBuildingType();
        $level = $building->getLevel() ?? 1;
        $productionRate = $buildingType->getProductionRate() ?? 0;
        $resourceType = $buildingType->getResourceType()?->getLabel();

        // Calculer le taux de production avec le niveau
        $production = $productionRate * $level;

        return new BuildingData(
            id: $building->getId(),
            lat: $building->getLatitudeBuild(),
            lng: $building->getLongitudeBuild(),
            type: $buildingType->getName(),
            code: $buildingType->getCode(),
            level: $level,
            ownerId: $building->getUser()->getId(),
            productionRate: $productionRate > 0 ? $productionRate : null,
            production: $production > 0 ? $production : null,
            resourceType: $resourceType,
            faction: $playerFactions[$building->getUser()->getId()] ?? 'default',
        );
    }
}