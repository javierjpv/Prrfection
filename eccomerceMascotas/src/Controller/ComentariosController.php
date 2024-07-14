<?php

namespace App\Controller;

use App\Entity\Comentarios;
use App\Entity\Productos;
use App\Repository\ComentariosRepository;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\Request;

class ComentariosController extends AbstractController
{
    #[Route('/commentsByProduct/{productId}', name: 'commentsByProduct', methods: ['GET'])]
    public function getCommentsByProduct(int $productId, ComentariosRepository $comentariosRepository): JsonResponse
    {
        try {
            $comments = $comentariosRepository->findByProduct($productId);
            $data = array_map(function ($comment) {
                return [
                    'id' => $comment->getId(),
                    'user' => $comment->getUsuario()->getUserIdentifier(),
                    'content' => $comment->getTexto(),
                    'date' => $comment->getFecha()->format('Y-m-d H:i:s'),
                ];
            }, $comments);
            return $this->json($data);
        } catch (\Exception $e) {
            throw new \Exception('Ha habido un error en commentsByProduct', 400);
        }

    }



    #[Route('/api/comments', name: 'addNewComment', methods: ['POST'])]
    public function adNewComment(Request $request, EntityManagerInterface $entityManager, Security $security): JsonResponse
    {
        // Verificar si el usuario está autenticado
        if (!$security->getUser()) {

            throw new \Exception('El usuario no está autenticado', 400);
        }
        $data = json_decode($request->getContent(), true);
        $comment = $data['comment'];

        $usuario = $security->getUser();

        try {
            $newComent = new Comentarios();
            $id = $comment['product'];
     
            //Comprobar que el id enviado en el cuerpo d ela peticion es un id validio (que existe y ademas es numerico)
            if (!$id || !is_numeric($id)) {
                // return new JsonResponse(['error' => 'id no valido'], 400);
                throw new \InvalidArgumentException('Id de producto no válido al comentar', 400);
            }
    
            $producto = $entityManager->getRepository(Productos::class)->findOneBy(['id' => $id]);
            
            //Comprobar si el producto existe en la base de datos
            if (!$producto) {
                
                throw new \Exception('El producto el cual se quiere dejar un comentario no existe en la base de datos', 404);
            }         
            $newComent->setProducto($producto);
            $newComent->setTexto($comment['content']);
            $newComent->setUsuario($usuario);
            $newComent->setFecha(new DateTime());

            $entityManager->persist($newComent);
            $entityManager->flush();

            return new jsonResponse(['comment' => $newComent], 201);
        } catch (\Exception $e) {
            throw new \Exception('Se ha hecho roolback en api/comments', 400);
        }
    }
}
