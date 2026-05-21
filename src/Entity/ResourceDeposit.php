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
     * @var int Quantité restante
     */
    #[ORM\Column]
    private int $quantity;

    /**
     * @var bool Indique si le dépôt a déjà été récolté ou s'il est inutilisable.
     */
    #[ORM\Column]
    private bool $isClaimed = false;

    #[ORM\ManyToOne(targetEntity: Road::class, inversedBy: 'deposits')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Road $road = null;

    public function __construct(string $resourceType, int $initialQuantity = 10)
    {
        $this->resourceType = $resourceType;
        $this->quantity = $initialQuantity;
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

    public function getQuantity(): int
    {
        return $this->quantity;
    }

    public function setQuantity(int $quantity): static
    {
        $this->quantity = $quantity;

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