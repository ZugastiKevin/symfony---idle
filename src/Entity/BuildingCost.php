<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class BuildingCost
{
    #[ORM\Id, ORM\GeneratedValue, ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: BuildingType::class, inversedBy: 'costs')]
    #[ORM\JoinColumn(nullable: false)]
    private ?BuildingType $buildingType = null;

    #[ORM\ManyToOne(targetEntity: ResourceType::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?ResourceType $resourceType = null;

    #[ORM\Column]
    private int $costs = 0;

    // Getters et Setters...
    public function getCosts(): int
    {
        return $this->costs;
    }

    public function setCosts(int $costs): self
    {
        $this->costs = $costs; return $this;
    }

    public function getResourceType(): ?ResourceType
    {
        return $this->resourceType;
    }

    public function setResourceType(?ResourceType $resourceType): self
    {
        $this->resourceType = $resourceType; return $this;
    }

    public function getBuildingType(): ?BuildingType
    {
        return $this->buildingType;
    }

    public function setBuildingType(?BuildingType $bt): self
    {
        $this->buildingType = $bt; return $this;
    }

    public function __toString(): string
    {
        return $this->costs . ' ' . $this->resourceType->getLabel();
    }
}