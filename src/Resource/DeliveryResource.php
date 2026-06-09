<?php

namespace App\Resource;

use App\Entity\ResourceDelivery;
use App\Repository\ResourceDeliveryRepository;
use Symfony\Component\Serializer\Attribute\Groups;
use Symfony\Component\Serializer\Attribute\Ignore;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;

#[ApiResource(
    shortName: 'Delivery',
    description: 'Livraison de ressources',
    operations: [
        new GetCollection(),
        new Get()
    ]
)]
class DeliveryResource
{
    public function __construct(
        #[Groups(['read'])]
        public readonly int $id,

        #[Groups(['read'])]
        public readonly ?string $resource,

        #[Groups(['read'])]
        public readonly int $quantity,

        #[Groups(['read'])]
        public readonly string $status,

        #[Groups(['read'])]
        public readonly int $progress,

        #[Groups(['read'])]
        public readonly int $estimatedTime,

        #[Groups(['read'])]
        public readonly ?string $waypoints,
    ) {}

    public static function fromEntity(ResourceDelivery $delivery): self
    {
        return new self(
            id: $delivery->getId(),
            resource: $delivery->getResource()?->getCode(),
            quantity: $delivery->getQuantity(),
            status: $delivery->getStatus(),
            progress: $delivery->getProgress(),
            estimatedTime: $delivery->getEstimatedTime(),
            waypoints: $delivery->getWaypoints(),
        );
    }
}