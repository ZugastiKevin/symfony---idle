<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
#[ORM\HasLifecycleCallbacks]
class ResourceDelivery
{
    public const STATUS_WAITING = 'waiting';      // En attente que la ressource soit produite
    public const STATUS_PENDING = 'pending';      // En attente de démarrage (legacy)
    public const STATUS_IN_TRANSIT = 'in_transit'; // En route vers le dépôt
    public const STATUS_DELIVERED = 'delivered';   // Livré

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\ManyToOne(targetEntity: ResourceType::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?ResourceType $resource = null;

    #[ORM\Column]
    private int $quantity = 0;

    #[ORM\ManyToOne(targetEntity: Building::class, inversedBy: 'deliveries')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Building $sourceBuilding = null;

    #[ORM\ManyToOne(targetEntity: Building::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?Building $targetBuilding = null;

    #[ORM\Column(length: 20)]
    private string $status = self::STATUS_WAITING;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $waypoints = null;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private ?\DateTimeImmutable $scheduledAt = null; // Quand la livraison peut démarrer

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE, nullable: true)]
    private ?\DateTimeImmutable $deliveredAt = null;

    #[ORM\Column(type: Types::INTEGER)]
    private int $progress = 0;

    #[ORM\Column(type: Types::INTEGER)]
    private int $estimatedTime = 0; // en secondes

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    #[ORM\PrePersist]
    public function setCreatedAtValue(): void
    {
        if ($this->createdAt === null) {
            $this->createdAt = new \DateTimeImmutable();
        }
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): static
    {
        $this->user = $user;
        return $this;
    }

    public function getResource(): ?ResourceType
    {
        return $this->resource;
    }

    public function setResource(?ResourceType $resource): static
    {
        $this->resource = $resource;
        return $this;
    }

    public function getQuantity(): int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): static
    {
        $this->quantity = $quantity;
        return $this;
    }

    public function getSourceBuilding(): ?Building
    {
        return $this->sourceBuilding;
    }

    public function setSourceBuilding(?Building $sourceBuilding): static
    {
        $this->sourceBuilding = $sourceBuilding;
        return $this;
    }

    public function getTargetBuilding(): ?Building
    {
        return $this->targetBuilding;
    }

    public function setTargetBuilding(?Building $targetBuilding): static
    {
        $this->targetBuilding = $targetBuilding;
        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): static
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getDeliveredAt(): ?\DateTimeImmutable
    {
        return $this->deliveredAt;
    }

    public function setDeliveredAt(?\DateTimeImmutable $deliveredAt): static
    {
        $this->deliveredAt = $deliveredAt;
        return $this;
    }

    public function getProgress(): int
    {
        return $this->progress;
    }

    public function setProgress(int $progress): static
    {
        $this->progress = $progress;
        return $this;
    }

    public function getEstimatedTime(): int
    {
        return $this->estimatedTime;
    }

    public function setEstimatedTime(int $estimatedTime): static
    {
        $this->estimatedTime = $estimatedTime;
        return $this;
    }

    public function getScheduledAt(): ?\DateTimeImmutable
    {
        return $this->scheduledAt;
    }

    public function setScheduledAt(?\DateTimeImmutable $scheduledAt): static
    {
        $this->scheduledAt = $scheduledAt;
        return $this;
    }

    public function isDelivered(): bool
    {
        return $this->status === self::STATUS_DELIVERED;
    }

    public function isWaiting(): bool
    {
        return $this->status === self::STATUS_WAITING;
    }

    public function startDelivery(): void
    {
        $this->status = self::STATUS_IN_TRANSIT;
        $this->progress = 0;
    }

    public function getWaypoints(): ?string
    {
        return $this->waypoints;
    }

    public function setWaypoints(?string $waypoints): static
    {
        $this->waypoints = $waypoints;
        return $this;
    }
}