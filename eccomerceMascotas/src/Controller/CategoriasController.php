<?php

namespace App\Controller;

use App\Entity\Categorias;
use App\Repository\CategoriasRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;


class CategoriasController extends AbstractController
{
    #[Route('/categoria', name: 'app_categorias_index', methods: ['GET'])]
    public function index(EntityManagerInterface $entitymanager): JsonResponse
    {
        // $categorias=$categoriasRepository->findAll();
        $categorias=$entitymanager->getRepository(Categorias::class)->findAll();
        return $this->json($categorias);
    }

 
}
