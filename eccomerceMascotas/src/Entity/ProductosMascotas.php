<?php
// src/Entity/ProductosMascotas.php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity]
class ProductosMascotas
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;
     //#[ORM\Id]
    #[ORM\ManyToOne(targetEntity: "App\Entity\Productos",inversedBy: "productosMascotas")]
    #[ORM\JoinColumn(nullable: false)]
    private $producto;

     //#[ORM\Id]
    #[ORM\ManyToOne(targetEntity: "App\Entity\Mascotas",inversedBy: "productosMascotas")]
    #[ORM\JoinColumn(nullable: false)]
    private $mascota;

    // ... otros campos y métodos ...

    public function getProducto(): ?Productos
    {
        return $this->producto;
    }

    public function setProducto(?Productos $producto): self
    {
        $this->producto = $producto;
        return $this;
    }

    public function getMascota(): ?Mascotas
    {
        return $this->mascota;
    }

    public function setMascota(?Mascotas $mascota): self
    {
        $this->mascota = $mascota;
        return $this;
    }
    
    public function __toString(): string
    {
        return $this->producto->getNombre() ?: ''; // Devuelve el nombre de la marca si está definido, de lo contrario, una cadena vacía
    }

    /**
     * Get the value of id
     */ 
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     *
     * @return  self
     */ 
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }
}
