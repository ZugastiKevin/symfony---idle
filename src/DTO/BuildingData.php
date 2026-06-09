<?php

namespace App\DTO;

/**
 * DTO pour les données de building utilisées dans les APIs.
 * Sépare la logique de présentation de l'entité.
 */
class BuildingData
{
    public function __construct(
        public readonly int $id,
        public readonly float $lat,
        public readonly float $lng,
        public readonly string $type,
        public readonly string $code,
        public readonly int $level,
        public readonly int $ownerId,
        public readonly ?float $productionRate,
        public readonly ?float $production,
        public readonly ?string $resourceType,
        public readonly string $faction,
    ) {}

    /**
     * Convertit un tableau de données de building en DTO.
     */
    public static function fromArray(array $data): self
    {
        return new self(
            id: $data['id'],
            lat: $data['lat'],
            lng: $data['lng'],
            type: $data['type'],
            code: $data['code'],
            level: $data['level'],
            ownerId: $data['ownerId'],
            productionRate: $data['production_rate'] > 0 ? $data['production_rate'] : null,
            production: $data['production'] > 0 ? $data['production'] : null,
            resourceType: $data['resource_type'],
            faction: $data['faction'] ?? 'default',
        );
    }

    /**
     * Retourne les données sous forme de tableau pour l'API.
     */
    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'lat' => $this->lat,
            'lng' => $this->lng,
            'type' => $this->type,
            'code' => $this->code,
            'level' => $this->level,
            'ownerId' => $this->ownerId,
            'production_rate' => $this->productionRate,
            'production' => $this->production,
            'resource_type' => $this->resourceType,
            'faction' => $this->faction,
        ];
    }
}