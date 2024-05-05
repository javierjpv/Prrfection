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
    public function index(EntityManagerInterface $entityManager ): Response // JsonResponse
    {
        //Mediante doctrine  obtengo todos los opbjetos de la clase Productos
        $productos=$entityManager->getRepository(Productos::class)->findAll();
     
        //TRanformo esos objetos en formato json
        return $this->json($productos);
    }
     
     

    //Esta ruta recibe filtros(son objetos dentro de un arary) en la peticion y mediante esos filtro
    //y gracias a doctrine ,se puede llamar al metodo findByFilters (el cual he creado yo en productRepository para añadir una capa de abstraccion)
    //el metodo findByFilters nos filtrara los objetos de tipo Productos por los filtros que les pasemos
    #[Route('/filtrado', name: 'app_filtrado', methods: ['POST'])]
    public function filtrado(ProductosRepository $productRepository, Request $request): Response
    {
        //De esta forma extraemos lo que nos envian desde el body de la solicitud
        $filters = json_decode($request->getContent(), true);

        //Aqui se usa el metodo findByFilters (el cual nos devolvera objetos de tipo Productos),este metodo nos filtrara
        //los productos segun los filtros que les pasemos
        $products = $productRepository->findByFilters($filters);

        // Devolver los productos como JSON
        return $this->json($products);
    }
    
}
