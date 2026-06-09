<?php

namespace App\Entity;

use App\Repository\BuildingRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BuildingRepository::class)]
#[ORM\HasLifecycleCallbacks]
class Building
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_IMMUTABLE)]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\PrePersist]
    public function setCreatedAtValue(): void
    {
        if ($this->createdAt === null) {
            $this->createdAt = new \DateTimeImmutable();
        }
    }

    #[ORM\Column]
    private ?float $latitudeBuild = null;

    #[ORM\Column]
    private ?float $longitudeBuild = null;

    #[ORM\Column]
    private ?int $level = null;

    #[ORM\ManyToOne(inversedBy: 'buildings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?BuildingType $buildingType = null;

    #[ORM\ManyToOne(inversedBy: 'buildings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    #[ORM\ManyToOne(inversedBy: 'buildings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Game $game = null;

    #[ORM\ManyToOne(targetEntity: Chunk::class, inversedBy: 'buildings')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Chunk $chunk = null;

    #[ORM\OneToOne(targetEntity: ResourceDeposit::class)]
    private ?ResourceDeposit $resourceDeposit = null;

    #[ORM\OneToMany(targetEntity: ResourceDelivery::class, mappedBy: 'sourceBuilding')]
    private $deliveries;

    public function __construct()
    {
        $this->deliveries = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getLatitudeBuild(): ?float
    {
        return $this->latitudeBuild;
    }

    public function setLatitudeBuild(float $latitudeBuild): static
    {
        $this->latitudeBuild = $latitudeBuild;

        return $this;
    }

    public function getLongitudeBuild(): ?float
    {
        return $this->longitudeBuild;
    }

    public function setLongitudeBuild(float $longitudeBuild): static
    {
        $this->longitudeBuild = $longitudeBuild;

        return $this;
    }

    public function getLevel(): ?int
    {
        return $this->level;
    }

    public function setLevel(int $level): static
    {
        $this->level = $level;

        return $this;
    }

    public function getBuildingType(): ?BuildingType
    {
        return $this->buildingType;
    }

    public function setBuildingType(?BuildingType $buildingType): static
    {
        $this->buildingType = $buildingType;

        return $this;
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

    public function getGame(): ?Game
    {
        return $this->game;
    }

    public function setGame(?Game $game): static
    {
        $this->game = $game;

        return $this;
    }

    public function getChunk(): ?Chunk
    {
        return $this->chunk;
    }

    public function setChunk(?Chunk $chunk): self
    {
        $this->chunk = $chunk;

        return $this;
    }

    public function setCoordinates(string $coords): void
    {
        $parts = explode(',', $coords);
        if (count($parts) === 2) {
            $this->setLatitudeBuild((float)$parts[0]);
            $this->setLongitudeBuild((float)$parts[1]);
        }
    }

    public function getCoordinates(): string
    {
        return $this->latitudeBuild . ',' . $this->longitudeBuild;
    }

    public function getResourceDeposit(): ?ResourceDeposit
    {
        return $this->resourceDeposit;
    }

    public function setResourceDeposit(?ResourceDeposit $resourceDeposit): static
    {
        $this->resourceDeposit = $resourceDeposit;
        return $this;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection|ResourceDelivery[]
     */
    public function getDeliveries(): \Doctrine\Common\Collections\Collection
    {
        return $this->deliveries;
    }

    public function addDelivery(ResourceDelivery $delivery): static
    {
        if (!$this->deliveries->contains($delivery)) {
            $this->deliveries->add($delivery);
            $delivery->setSourceBuilding($this);
        }
        return $this;
    }
}
