<?php

namespace App\Controller;

use App\Repository\ProductosRepository;
use App\Entity\Productos;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductosController extends AbstractController
{
    //Esta ruta buscara en la base de datos todos los objetos de tipo (Productos)
    //y nos devolvera esos objetos en formato json
    //Esta ruta es publica ,por lo cual no hace falta estar autenticado para poder acceder a ella
    #[Route('/productos', name: 'app_productos', methods: ['GET'])]
    public function index(ProductosRepository $productRepository,EntityManagerInterface $entityManager,Request $request ): Response // JsonResponse
    {
        $filters=$request->query->all(); //nuevo
        //Mediante doctrine  obtengo todos los opbjetos de la clase Productos
        if (empty($filters)) {
            $products=$entityManager->getRepository(Productos::class)->findAll();
        }else{
            $products = $productRepository->findByFilters($filters);
        }
        // Devolver los productos como JSON
        return $this->json($products);
    }
     
    
}
