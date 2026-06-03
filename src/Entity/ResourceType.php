<?php

namespace App\Entity;

use App\Repository\ResourceTypeRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ResourceTypeRepository::class)]
class ResourceType
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50, unique: true)]
    private ?string $code = null;

    #[ORM\Column(length: 100)]
    private ?string $label = null;

    #[ORM\Column(length: 7)]
    private ?string $color = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    { 
        return $this->code;
    }

    public function setCode(string $code): self
    { 
        $this->code = $code; return $this;
    }

    public function getLabel(): ?string
    { 
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label; return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;
        return $this;
    }

    public function __toString(): string
    { 
        return $this->label ?? '';
    }
}