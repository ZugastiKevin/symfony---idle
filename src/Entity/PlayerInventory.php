<?php

namespace App\Entity;

use App\Repository\PlayerInventoryRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayerInventoryRepository::class)]
#[ORM\Table(name: 'player_inventory')]
#[ORM\UniqueConstraint(name: 'user_resource_unique', fields: ['player', 'resourceType'])]
class PlayerInventory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private int $quantity = 0;

    #[ORM\ManyToOne(inversedBy: 'playerInventories', targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $player = null;

    #[ORM\ManyToOne(targetEntity: ResourceType::class)]
    private ?ResourceType $resourceType = null;

    /**
     * Dernière mise à jour des ressources
     */
    #[ORM\Column]
    private ?\DateTimeImmutable $updatedAt = null;

    public function __construct()
    {
        $this->updatedAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPlayer(): ?User
    {
        return $this->player;
    }

    public function setPlayer(User $player): static
    {
        $this->player = $player;

        return $this;
    }

    public function getResourceType(): ?ResourceType
    {
        return $this->resourceType;
    }

    public function setResourceType(ResourceType $resourceType): static
    {
        $this->resourceType = $resourceType;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): static
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }
}
