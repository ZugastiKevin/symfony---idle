<?php

namespace App\Entity;

use App\Repository\ChunkRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ChunkRepository::class)]
class Chunk
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: 'string', length: 50, unique: true)]
    private string $chunkId;

    #[ORM\Column(type: "datetime_immutable")]
    private \DateTimeImmutable $updatedAt;

    #[ORM\OneToMany(targetEntity: Building::class, mappedBy: 'chunk')]
    private Collection $buildings;

    /**
     * @var Collection<int, Road>
     */
    #[ORM\OneToMany(targetEntity: Road::class, mappedBy: 'chunk')]
    private Collection $roads;

    public function __construct()
    {
        $this->updatedAt = new \DateTimeImmutable();
        $this->roads = new ArrayCollection();
        $this->buildings = new ArrayCollection();
    }

    public function __toString(): string
    {
        return $this->chunkId ?? 'Chunk #' . $this->id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getChunkId(): ?string
    {
        return $this->chunkId;
    }

    public function setChunkId(string $chunkId): self
    {
        $this->chunkId = $chunkId;
        return $this;
    }

    public function getUpdatedAt(): \DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;
        return $this;
    }

    /**
     * @return Collection<int, Road>
     */
    public function getRoads(): Collection
    {
        return $this->roads;
    }

    public function addRoad(Road $road): self
    {
        if (!$this->roads->contains($road)) {
            $this->roads->add($road);
            $road->setChunk($this);
        }

        return $this;
    }

    public function removeRoad(Road $road): self
    {
        if ($this->roads->removeElement($road)) {
            // set the owning side to null (unless already changed)
            if ($road->getChunk() === $this) {
                $road->setChunk(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Building>
     */
    public function getBuildings(): Collection
    {
        return $this->buildings;
    }

    public function addBuilding(Building $building): self
    {
        if (!$this->buildings->contains($building)) {
            $this->buildings->add($building);
            $building->setChunk($this);
        }

        return $this;
    }

    public function removeBuilding(Building $building): self
    {
        if ($this->buildings->removeElement($building)) {
            // set the owning side to null (unless already changed)
            if ($building->getChunk() === $this) {
                $building->setChunk(null);
            }
        }

        return $this;
    }
}
