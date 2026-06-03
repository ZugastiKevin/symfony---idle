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

    #[ORM\Column(length: 100, unique: true)]
    private ?string $code = null;

    #[ORM\Column]
    private ?float $production_rate = null;

    #[ORM\ManyToOne(targetEntity: ResourceType::class)]
    private ?ResourceType $resourceType = null;

    #[ORM\Column]
    private ?int $max_level = null;

    /**
     * @var Collection<int, Building>
     */
    #[ORM\OneToMany(targetEntity: Building::class, mappedBy: 'buildingType')]
    private Collection $buildings;

    /**
     * @var Collection<int, FactionBuildingImage>
     */
    #[ORM\OneToMany(targetEntity: FactionBuildingImage::class, mappedBy: 'buildingType', orphanRemoval: true)]
    private Collection $factionBuildingImages;

    #[ORM\OneToMany(targetEntity: BuildingCost::class, mappedBy: 'buildingType', cascade: ['persist', 'remove'], orphanRemoval: true)]
    private Collection $costs;

    public function __construct()
    {
        $this->buildings = new ArrayCollection();
        $this->factionBuildingImages = new ArrayCollection();
        $this->costs = new ArrayCollection();
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

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): static
    {
        $this->code = $code;

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

    public function getResourceType(): ?ResourceType
    {
        return $this->resourceType;
    }

    public function setResourceType(?ResourceType $resourceType): static
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

    /**
     * @return Collection<int, FactionBuildingImage>
     */
    public function getFactionBuildingImages(): Collection
    {
        return $this->factionBuildingImages;
    }

    public function addFactionBuildingImage(FactionBuildingImage $factionBuildingImage): static
    {
        if (!$this->factionBuildingImages->contains($factionBuildingImage)) {
            $this->factionBuildingImages->add($factionBuildingImage);
            $factionBuildingImage->setBuildingType($this);
        }

        return $this;
    }

    public function removeFactionBuildingImage(FactionBuildingImage $factionBuildingImage): static
    {
        if ($this->factionBuildingImages->removeElement($factionBuildingImage)) {
            // set the owning side to null (unless already changed)
            if ($factionBuildingImage->getBuildingType() === $this) {
                $factionBuildingImage->setBuildingType(null);
            }
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->name ?? '';
    }

    /** @return Collection<int, BuildingCost> */
    public function getCosts(): Collection { return $this->costs; }

    public function addCost(BuildingCost $cost): self
    {
        if (!$this->costs->contains($cost)) {
            $this->costs->add($cost);
            $cost->setBuildingType($this);
        }
        return $this;
    }
    
    public function removeCost(BuildingCost $cost): self
    {
        if ($this->costs->removeElement($cost)) {
            if ($cost->getBuildingType() === $this) {
                $cost->setBuildingType(null);
            }
        }
        return $this;
    }
}
