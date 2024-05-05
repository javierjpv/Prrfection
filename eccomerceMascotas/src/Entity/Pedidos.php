<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity()]
class Pedidos
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?User $usuario = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $fechaPedido = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $estadoPedido = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsuario(): ?User
    {
        return $this->usuario;
    }

    public function setUsuario(?User $usuario): static
    {
        $this->usuario = $usuario;

        return $this;
    }

    public function getFechaPedido(): ?\DateTimeInterface
    {
        return $this->fechaPedido;
    }

    public function setFechaPedido(?\DateTimeInterface $fechaPedido): static
    {
        $this->fechaPedido = $fechaPedido;

        return $this;
    }

    public function getEstadoPedido(): ?string
    {
        return $this->estadoPedido;
    }

    public function setEstadoPedido(?string $estadoPedido): static
    {
        $this->estadoPedido = $estadoPedido;

        return $this;
    }
}
