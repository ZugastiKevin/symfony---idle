<?php

namespace App\Entity;

use App\Repository\FactionBuildingImageRepository;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FactionBuildingImageRepository::class)]
class FactionBuildingImage
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $imagePath = null;

    private ?UploadedFile $imageFile = null;

    #[ORM\ManyToOne(inversedBy: 'factionBuildingImages')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Faction $faction = null;

    #[ORM\ManyToOne(inversedBy: 'factionBuildingImages')]
    #[ORM\JoinColumn(nullable: false)]
    private ?BuildingType $buildingType = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImagePath(): ?string
    {
        return $this->imagePath;
    }

    public function setImagePath(string $imagePath): static
    {
        $this->imagePath = $imagePath;

        return $this;
    }

    public function getImageFile(): ?UploadedFile
    {
        return $this->imageFile;
    }

    public function setImageFile(?UploadedFile $imageFile): void
    {
        $this->imageFile = $imageFile;
    }

    public function getFaction(): ?Faction
    {
        return $this->faction;
    }

    public function setFaction(?Faction $faction): static
    {
        $this->faction = $faction;

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
}
