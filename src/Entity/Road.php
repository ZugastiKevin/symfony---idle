<?php

namespace App\Entity;

use App\Entity\Chunk;
use App\Repository\RoadRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: RoadRepository::class)]
class Road
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Chunk::class, inversedBy: 'roads')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Chunk $chunk = null;

    #[ORM\Column(type: 'json')]
    private array $points = [];

    #[ORM\Column(length: 50)]
    private string $type;

    #[ORM\Column(type: 'float')]
    private float $width = 0;

    /**
     * @var Collection<int, ResourceDeposit>
     */
    #[ORM\OneToMany(targetEntity: ResourceDeposit::class, mappedBy: 'road')]
    private Collection $deposits;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getPoints(): array
    {
        return $this->points;
    }

    public function setPoints(array $points): self
    {
        $this->points = $points;
        return $this;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;
        return $this;
    }

    public function getWidth(): float
    {
        return $this->width;
    }

    public function setWidth(float $width): self
    {
        $this->width = $width;
        return $this;
    }

    /**
     * @return Collection<int, ResourceDeposit>
     */
    public function getDeposits(): Collection
    {
        return $this->deposits;
    }

    public function addDeposit(ResourceDeposit $deposit): static
    {
        if (!$this->deposits->contains($deposit)) {
            $this->deposits->add($deposit);
            $deposit->setRoad($this);
        }

        return $this;
    }

    public function removeDeposit(ResourceDeposit $deposit): static
    {
        if ($this->deposits->removeElement($deposit)) {
            // set the owning side to null (unless already changed)
            if ($deposit->getRoad() === $this) {
                $deposit->setRoad(null);
            }
        }

        return $this;
    }
}
