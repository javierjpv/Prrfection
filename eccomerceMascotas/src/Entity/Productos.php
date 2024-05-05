<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Ignore;
use Doctrine\Common\Collections\Collection;
use App\Repository\ProductosRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductosRepository::class)]
class Productos
{

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $nombre = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $descripcion = null;

    #[ORM\Column(nullable: true)]
    private ?int $precio = null;

    #[ORM\Column(nullable: true)]
    private ?int $stock = null;

    #[ORM\ManyToOne]
    private ?Categorias $categoria = null;

    #[ORM\ManyToOne]
    private ?Marcas $marca = null;
    
    #[Ignore]
    #[ORM\OneToMany(targetEntity: ProductosMascotas::class, mappedBy: "producto")]
    //debes poner ignore porque si no se creara un bucle infinito ya que es una propiedad inversa
    private Collection $productosMascotas;

    #[Ignore]
    #[ORM\OneToMany(mappedBy: 'producto', targetEntity: Imagen::class)]
    private Collection $imagen;

    public function __construct()
    {
        $this->imagen = new ArrayCollection();
    }

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

    public function getDescripcion(): ?string
    {
        return $this->descripcion;
    }

    public function setDescripcion(?string $descripcion): static
    {
        $this->descripcion = $descripcion;

        return $this;
    }

    public function getPrecio(): ?int
    {
        return $this->precio;
    }

    public function setPrecio(?int $precio): static
    {
        $this->precio = $precio;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(?int $stock): static
    {
        $this->stock = $stock;

        return $this;
    }

    public function getCategoria(): ?Categorias
    {
        return $this->categoria;
    }

    public function setCategoria(?Categorias $categoria): static
    {
        $this->categoria = $categoria;

        return $this;
    }

    public function getMarca(): ?Marcas
    {
        return $this->marca;
    }

    public function setMarca(?Marcas $marca): static
    {
        $this->marca = $marca;

        return $this;
    }

    /**
     * @return Collection<int, Imagen>
     */
    public function getImagens(): Collection
    {
        return $this->imagen;
    }

    public function addImagen(Imagen $imagen): static
    {
        if (!$this->imagen->contains($imagen)) {
            $this->imagen->add($imagen);
            $imagen->setProducto($this);
        }

        return $this;
    }

    public function removeImagen(Imagen $imagen): static
    {
        if ($this->imagen->removeElement($imagen)) {
            // set the owning side to null (unless already changed)
            if ($imagen->getProducto() === $this) {
                $imagen->setProducto(null);
            }
        }

        return $this;
    }


    public function __toString(): string
    {
        return $this->nombre ?: '';
    }
    
}
