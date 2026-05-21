<?php

namespace App\Service;

use App\Entity\PlayerResource;
use App\Entity\User;
use App\Repository\BuildingRepository;
use Doctrine\ORM\EntityManagerInterface;

class ResourceProductionService
{
    /**
     * @var array<string, string>
     */
    private const RESOURCE_ALIASES = [
        'iron' => 'iron',
        'fer' => 'iron',
        'stone' => 'stone',
        'pierre' => 'stone',
        'water' => 'water',
        'eau' => 'water',
        'oil' => 'oil',
        'petrol' => 'oil',
        'petrole' => 'oil',
        'pétrole' => 'oil',
    ];

    public function __construct(
        private readonly BuildingRepository $buildingRepository,
        private readonly EntityManagerInterface $entityManager
    ) {
    }

    public function updatePlayerResources(User $user, ?\DateTimeImmutable $now = null): PlayerResource
    {
        $now = $now ?? new \DateTimeImmutable();
        $playerResource = $user->getPlayerResource();

        if (!$playerResource) {
            $playerResource = new PlayerResource();
            $playerResource->setPlayer($user);
            $playerResource->setUpdatedAt($now);
            $user->setPlayerResource($playerResource);
            $this->entityManager->persist($playerResource);

            return $playerResource;
        }

        $updatedAt = $playerResource->getUpdatedAt() ?? $now;
        $elapsedSeconds = $now->getTimestamp() - $updatedAt->getTimestamp();

        if ($elapsedSeconds < 3600) {
            return $playerResource;
        }

        $elapsedHours = intdiv($elapsedSeconds, 3600);
        $ratesByResource = $this->buildingRepository->getProductionRatesByResourceForUser($user);

        $this->applyProduction($playerResource, $ratesByResource, $elapsedHours);
        $playerResource->setUpdatedAt($updatedAt->modify(sprintf('+%d hours', $elapsedHours)));

        return $playerResource;
    }

    /**
     * @param array<string, float> $ratesByResource
     */
    private function applyProduction(PlayerResource $playerResource, array $ratesByResource, int $hours): void
    {
        foreach ($ratesByResource as $resourceType => $ratePerHour) {
            $normalized = $this->normalizeResourceType($resourceType);

            if ($normalized === null) {
                continue;
            }

            $amount = (int) floor($ratePerHour * $hours);

            if ($amount <= 0) {
                continue;
            }

            match ($normalized) {
                'iron' => $playerResource->addIron($amount),
                'stone' => $playerResource->addStone($amount),
                'water' => $playerResource->addWater($amount),
                'oil' => $playerResource->addOil($amount),
                default => null,
            };
        }
    }

    private function normalizeResourceType(string $resourceType): ?string
    {
        $type = strtolower(trim($resourceType));
        $type = str_replace([' ', '-', '_'], '', $type);

        return self::RESOURCE_ALIASES[$type] ?? null;
    }
}
