<?php

namespace App\Entity;

use App\Repository\PlayerResourceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlayerResourceRepository::class)]
class PlayerResource
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    /**
     * Joueur propriétaire des ressources
     */
    #[ORM\OneToOne(inversedBy: 'playerResource', targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $player = null;

    /**
     * Fer
     */
    #[ORM\Column]
    private int $iron = 0;

    /**
     * Pierre
     */
    #[ORM\Column]
    private int $stone = 0;

    /**
     * Eau
     */
    #[ORM\Column]
    private int $water = 0;

    /**
     * Pétrole
     */
    #[ORM\Column]
    private int $oil = 0;

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

    public function getPlayer(): ?User
    {
        return $this->player;
    }

    public function setPlayer(User $player): static
    {
        $this->player = $player;

        return $this;
    }

    public function getIron(): int
    {
        return $this->iron;
    }

    public function setIron(int $iron): static
    {
        $this->iron = $iron;

        return $this;
    }

    public function addIron(int $amount): static
    {
        $this->iron += $amount;

        return $this;
    }

    public function getStone(): int
    {
        return $this->stone;
    }

    public function setStone(int $stone): static
    {
        $this->stone = $stone;

        return $this;
    }

    public function addStone(int $amount): static
    {
        $this->stone += $amount;

        return $this;
    }

    public function getWater(): int
    {
        return $this->water;
    }

    public function setWater(int $water): static
    {
        $this->water = $water;

        return $this;
    }

    public function addWater(int $amount): static
    {
        $this->water += $amount;

        return $this;
    }

    public function getOil(): int
    {
        return $this->oil;
    }

    public function setOil(int $oil): static
    {
        $this->oil = $oil;

        return $this;
    }

    public function addOil(int $amount): static
    {
        $this->oil += $amount;

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
