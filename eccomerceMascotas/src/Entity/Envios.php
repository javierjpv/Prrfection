<?php

namespace App\Entity;

use App\Repository\EnviosRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EnviosRepository::class)]
class Envios
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    private ?Pedidos $pedido = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $direccionEntrega = null;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $metodoEnvio = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPedido(): ?Pedidos
    {
        return $this->pedido;
    }

    public function setPedido(?Pedidos $pedido): static
    {
        $this->pedido = $pedido;

        return $this;
    }

    public function getDireccionEntrega(): ?string
    {
        return $this->direccionEntrega;
    }

    public function setDireccionEntrega(?string $direccionEntrega): static
    {
        $this->direccionEntrega = $direccionEntrega;

        return $this;
    }

    public function getMetodoEnvio(): ?string
    {
        return $this->metodoEnvio;
    }

    public function setMetodoEnvio(?string $metodoEnvio): static
    {
        $this->metodoEnvio = $metodoEnvio;

        return $this;
    }
}
