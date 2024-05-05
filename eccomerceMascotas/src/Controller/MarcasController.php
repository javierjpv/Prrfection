<?php

namespace App\Controller;

use App\Entity\Marcas;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MarcasController extends AbstractController
{
    #[Route('/marca', name: 'app_marcas_index', methods: ['GET'])]
    public function index(EntityManagerInterface $entityManager, SerializerInterface $serializer): JsonResponse
    { 
        $marcas = $entityManager->getRepository(Marcas::class)->findAll();
        $data = $serializer->serialize($marcas, 'json');

        return new JsonResponse($data, 200, [], true);
    }

   
}
