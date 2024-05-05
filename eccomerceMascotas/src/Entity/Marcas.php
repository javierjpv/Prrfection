<?php

namespace App\Entity;

use App\Repository\MarcasRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MarcasRepository::class)]
class Marcas
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nombre = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNombre(): ?string
    {
        return $this->nombre;
    }

    public function setNombre(?string $nombre): static
    {
        $this->nombre = $nombre;

        return $this;
    }
    public function __toString(): string
{
    return $this->nombre ?: ''; // Devuelve el nombre de la marca si está definido, de lo contrario, una cadena vacía
}

}
