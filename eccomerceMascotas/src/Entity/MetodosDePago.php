<?php

namespace App\Entity;

use App\Repository\MetodosDePagoRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MetodosDePagoRepository::class)]
class MetodosDePago
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nombreMetodo = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombreMetodo(): ?string
    {
        return $this->nombreMetodo;
    }

    public function setNombreMetodo(?string $nombreMetodo): static
    {
        $this->nombreMetodo = $nombreMetodo;

        return $this;
    }
}
