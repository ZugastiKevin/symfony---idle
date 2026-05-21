<?php

namespace App\Entity;

use App\Entity\Road;
use App\Repository\ResourceDepositRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ResourceDepositRepository::class)]
class ResourceDeposit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    /**
     * @var string Type de ressource (EAU, PIERRE, FER, PETROL)
     */
    #[ORM\Column(length: 50)]
    private string $resourceType;

    /**
     * Multiplicateur de richesse du filon.
     *
     * Exemples :
     * 0.8 = pauvre
     * 1.0 = normal
     * 1.5 = riche
     * 2.0 = très riche
     */
    #[ORM\Column(type: 'float')]
    private float $richness = 1.0;

    /**
     * @var bool Indique si le filon est déjà exploité/réservé.
     */
    #[ORM\Column]
    private bool $isClaimed = false;

    #[ORM\ManyToOne(targetEntity: Road::class, inversedBy: 'deposits')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Road $road = null;

    public function __construct(string $resourceType, float $richness = 1.0)
    {
        $this->resourceType = $resourceType;
        $this->richness = $richness;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getResourceType(): string
    {
        return $this->resourceType;
    }

    public function setResourceType(string $resourceType): static
    {
        $this->resourceType = $resourceType;

        return $this;
    }

    public function getRichness(): float
    {
        return $this->richness;
    }

    public function setRichness(float $richness): static
    {
        $this->richness = $richness;

        return $this;
    }

    public function getIsClaimed(): bool
    {
        return $this->isClaimed;
    }

    public function setIsClaimed(bool $isClaimed): static
    {
        $this->isClaimed = $isClaimed;

        return $this;
    }

    public function getRoad(): ?Road
    {
        return $this->road;
    }

    public function setRoad(?Road $road): static
    {
        $this->road = $road;

        return $this;
    }
}