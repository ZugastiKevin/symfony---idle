<?php

namespace App\Entity;

use App\Repository\FactionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FactionRepository::class)]
class Faction
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 100, unique: true)]
    private ?string $code = null;

    #[ORM\Column(length: 1000, nullable: true)]
    private ?string $description = null;

    /**
     * @var Collection<int, User>
     */
    #[ORM\OneToMany(targetEntity: User::class, mappedBy: 'faction')]
    private Collection $users;

    /**
     * @var Collection<int, FactionBuildingImage>
     */
    #[ORM\OneToMany(targetEntity: FactionBuildingImage::class, mappedBy: 'faction', orphanRemoval: true)]
    private Collection $factionBuildingImages;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->factionBuildingImages = new ArrayCollection();
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): static
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->setFaction($this);
        }

        return $this;
    }

    public function removeUser(User $user): static
    {
        if ($this->users->removeElement($user)) {
            if ($user->getFaction() === $this) {
                $user->setFaction(null);
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
            $factionBuildingImage->setFaction($this);
        }

        return $this;
    }

    public function removeFactionBuildingImage(FactionBuildingImage $factionBuildingImage): static
    {
        if ($this->factionBuildingImages->removeElement($factionBuildingImage)) {
            // set the owning side to null (unless already changed)
            if ($factionBuildingImage->getFaction() === $this) {
                $factionBuildingImage->setFaction(null);
            }
        }

        return $this;
    }

    public function __toString(): string
    {
        return $this->name ?? '';
    }
}
