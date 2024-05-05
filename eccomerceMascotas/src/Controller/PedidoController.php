<?php

namespace App\Controller;

use App\Entity\Pedidos;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\SerializerInterface;

class PedidoController extends AbstractController
{
    //Esta ruta se empieza por /api por lo cual aqui interviene el sistema de suridad mediante jwt
    //eso quiero decir que para hacer una llamada a este controlador se debe estar registardo mediante el token jwt
    //En caso de no estar autenticado en la aplicacion mediante el login o no tener permisos suficientes
    //este controlador devolveria  un json con un mensaje de error y una respuesta 4001
    //En caso que todo vaya segun lo previsto, se obtendra el usuario y se buscaran los pedidos de ese usario en concreto
    //devolviendo  en formato json y un codigo 200 los pedidos del usuario que esta realizando la peticion

    #[Route('/api/pedidos', name: 'app_pedidos')]
    public function index(EntityManagerInterface $entityManager, Security $security, SerializerInterface $serializer): JsonResponse
    {
        // Obtén los datos de los pedidos desde tu base de datos u otro origen
        //Obtenemos el usuario que ha llamado al controlador
        $user=$security->getUser();
                // Si el usuario no está autenticado, devuelve una respuesta de error
                if (!$user) {
                    return new JsonResponse(['message' => 'Usuario no autenticado'], 401);
                }
        //Si el usuario esta autenticado se buscaran los objetos Pedidos  mediante el usuario al cual pertenecen
        $pedidos = $entityManager->getRepository(Pedidos::class)->findBy(['usuario' => $user]);

        // Serializa los datos de los pedidos a formato JSON
        $data = $serializer->serialize($pedidos, 'json');

        // Devuelve una respuesta JSON con los datos de los pedidos
        return new JsonResponse($data, 200, [], true);
    }
}