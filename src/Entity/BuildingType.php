<?php

namespace App\Entity;

use App\Repository\BuildingTypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BuildingTypeRepository::class)]
class BuildingType
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column]
    private ?int $base_cost = null;

    #[ORM\Column]
    private ?float $production_rate = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $resourceType = null;

    #[ORM\Column]
    private ?int $max_level = null;

    /**
     * @var Collection<int, Building>
     */
    #[ORM\OneToMany(targetEntity: Building::class, mappedBy: 'buildingType')]
    private Collection $buildings;

    public function __construct()
    {
        $this->buildings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getBaseCost(): ?int
    {
        return $this->base_cost;
    }

    public function setBaseCost(int $base_cost): static
    {
        $this->base_cost = $base_cost;

        return $this;
    }

    public function getProductionRate(): ?float
    {
        return $this->production_rate;
    }

    public function setProductionRate(float $production_rate): static
    {
        $this->production_rate = $production_rate;

        return $this;
    }

    public function getResourceType(): ?string
    {
        return $this->resourceType;
    }

    public function setResourceType(?string $resourceType): static
    {
        $this->resourceType = $resourceType;

        return $this;
    }

    public function getMaxLevel(): ?int
    {
        return $this->max_level;
    }

    public function setMaxLevel(int $max_level): static
    {
        $this->max_level = $max_level;

        return $this;
    }

    /**
     * @return Collection<int, Building>
     */
    public function getBuildings(): Collection
    {
        return $this->buildings;
    }

    public function addBuilding(Building $building): static
    {
        if (!$this->buildings->contains($building)) {
            $this->buildings->add($building);
            $building->setBuildingType($this);
        }

        return $this;
    }

    public function removeBuilding(Building $building): static
    {
        if ($this->buildings->removeElement($building)) {
            // set the owning side to null (unless already changed)
            if ($building->getBuildingType() === $this) {
                $building->setBuildingType(null);
            }
        }

        return $this;
    }
}
