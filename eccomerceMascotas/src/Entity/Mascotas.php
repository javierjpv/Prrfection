<?php

namespace App\Entity;

use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Ignore;
use App\Repository\MascotasRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MascotasRepository::class)]
class Mascotas
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nombre = null;

    #[ORM\OneToMany(targetEntity:"App\Entity\ProductosMascotas", mappedBy:"mascota")]
    //debes poner ignore porque si no se creara un bucle infinito ya que es una propiedad inversa
    #[Ignore]
    private Collection $productosMascotas;

    public function getProductosMascotas(): Collection
    {
        return $this->productosMascotas;
    }


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
