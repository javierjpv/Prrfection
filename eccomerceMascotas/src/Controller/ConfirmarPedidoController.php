<?php

namespace App\Controller;
use App\Entity\DetallePedido;
use App\Entity\Pedidos;
use App\Entity\Productos;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;


class ConfirmarPedidoController extends AbstractController
{
    //Esta ruta es privada y para poder usarla debes estar haber pasado por api/login  ya que usaras tu token para realizar esta solicitud
    //Tambien de recibir un carrito con todos los productos que se pediran.
    //Primero se verifica si quien solicita esta ruta esta registardo como usuario, tras esto
    //se empieza creando un objeto pedido,se recorre el carrito(este se extrae del body d ela solicitud del frontend),
    //y por cada producto dentro del carrito se creara un objeto de tipo detallePedido
    
    #[Route('/api/confirmarPedido', name: 'app_confirmar_pedido')]
    public function index(Request $request, EntityManagerInterface $entityManager,Security $security): JsonResponse
    {
                // Verificar si el usuario está autenticado
                if (!$security->getUser()) {
                    // return new JsonResponse(['error' => 'el usuario no esta autenticado'], 400);
                    throw new \Exception('El usuario no está autenticado', 400);
                }
        $data = json_decode($request->getContent(), true);
 


        $carrito=$data['carrito']; 
        //Es un array con las propiedades de cada producto
        

       //Se extrae el usuario actual
       $usuario = $security->getUser();
       //Se crea un objeto de tipo Pedidos
    //    $entityManager->beginTransaction();
       try{
       
        //primero compruebo que cada producto tenga suficiente stock
        //, antes de realizar operaciones en la base de datos
         foreach ($carrito as $producto ) {
     
            //De cada producto extraemos el id y la cantidad
            $id = $producto['id'];
            $cantidad=$producto['cantidad'];
            //Comprobar que el id enviado en el cuerpo d ela peticion es un id validio (que existe y ademas es numerico)
            if (!$id || !is_numeric($id)) {
                // return new JsonResponse(['error' => 'id no valido'], 400);
                throw new \InvalidArgumentException('ID no válido', 400);
            }
    
            $producto = $entityManager->getRepository(Productos::class)->findOneBy(['id' => $id]);
            
            //Comprobar si el pedido existe en la base de tos
            if (!$producto) {
                // return new JsonResponse(['error' => 'el producto no existe en la base de datos'],404);
                throw new \Exception('el producto no existe en la base de datos', 404);
            }
    
            //Comprobar si el producto se encuentra en stock
            if ($producto->getStock()<=0 ||  $cantidad>$producto->getStock()) {
                // return new jsonResponse(['error'=>'el producto no se encuentra en stock'],400);
                throw new \Exception('El producto no se encuentra en stock', 400);
            }
            

           
    
           }

       $pedido=new Pedidos();
       $pedido->setFechaPedido(new DateTime());
       $pedido->setUsuario($usuario);
       $pedido->setEstadoPedido('pendiente');
       //Se guarda el obto en la base de datos
       $entityManager->persist($pedido);
       $entityManager->flush();
       

       //Se inicializa vacia
       $conjuntoPedidos=[];


         //Se recorre el carrito de compras que hemos recibido gracias a la solicitud del frontend(se envia a traves del body de la solicitud)
       foreach ($carrito as $producto ) {
     
        //De cada producto extraemos el id y la cantidad
        $id = $producto['id'];
        $cantidad=$producto['cantidad'];
        //Comprobar que el id enviado en el cuerpo d ela peticion es un id validio (que existe y ademas es numerico)
        if (!$id || !is_numeric($id)) {
            // return new JsonResponse(['error' => 'id no valido'], 400);
            throw new \InvalidArgumentException('ID no válido', 400);
        }

        $producto = $entityManager->getRepository(Productos::class)->findOneBy(['id' => $id]);
        
        //Comprobar si el pedido existe en la base de tos
        if (!$producto) {
            // return new JsonResponse(['error' => 'el producto no existe en la base de datos'],404);
            throw new \Exception('el producto no existe en la base de datos', 404);
        }

        //Comprobar si el producto se encuentra en stock
        if ($producto->getStock()<=0 ||  $cantidad>$producto->getStock()) {
            // return new jsonResponse(['error'=>'el producto no se encuentra en stock'],400);
            throw new \Exception('El producto no se encuentra en stock', 400);
        }
        
        $producto->setStock($producto->getStock()-$cantidad);
        $entityManager->persist($producto);
        $entityManager->flush();
        //Para cada producto que se encuentre en el carrito se rellena su objeto  de tipo
        //Detalle pedido correspondiente
        $precio=$producto->getPrecio();
        $detallePedido=new DetallePedido();
        $detallePedido->setPedido($pedido);
        $detallePedido->setProducto($producto);
        $detallePedido->setCantidad($cantidad);
        $detallePedido->setPrecioUnitario($precio);
        $conjuntoPedidos[]=$detallePedido;

        //Se guarda en la base de datos cada objeto de tipo DetallePedido
        $entityManager->persist($detallePedido);
        $entityManager->flush();
       

       }


       
        //Tras haber recorrido el carrito, crear su objeto Pedido correspondiente y haber creado su objeto DetallePedido para
        //cada producto dentro del carrito se devolvera un json con el id del pedido realizado y el conjunto de productos
        //que se acaban de pedir 

        // $entityManager->flush();
        return new jsonResponse(['PedidoId' => $pedido->getId(),'conjuntoPedidos' => $conjuntoPedidos], 201);

       }catch(\Exception $e){
        // $entityManager->rollback();

        // return new JsonResponse(['error' => 'Ocurrió un error durante la confirmación del pedido'], 500);
        throw new \Exception('Se ha hecho roolback', 400);
       }
      
    }
}

/*
Mediante este comando accedes a la ruta /api/confirmarPedido incluyendo
 su respectivo token
Antes de hcer esto debes acceder a la ruta api/login para poder extraer el token de alli
//curl -X POST -H "Content-Type: application/json" -d '{"email": "email", "password": "password"}' http://127.0.0.1:8000/api/login

una vez recibido el token mediante /api/login lo podras usar en esta solicitud sustituyendolo

curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDc2NjQxNzUsImV4cCI6MTcwNzY2Nzc3NSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicGFyZWRlc3ZlbGV6amF2aWVyckBnbWFpbC5jb20ifQ.CDq8nZW5edex6TPeZhH4GLTRwQld6-dPV29_lUASwDTGrya93SgB0M3KprwvIUib2JIpsoogpbrxv5LTl1-C5Ac65Xoa_lMCezjda3oa9ib-Og9TTt4pW0WpmbADIMsT0JBqLFUhqrdvwOqFBHVST4D-LlLkkUXdLVmmONTk2GyR_rotb7Tp5B5684NV-Pll2nZiLhxFNDiKWdI2RIcry8NgR6a734mF_WrjqUEHjQ36rR3axniDuQocC-0KvE18nbCO_0ynuHoY1fZ-mdr7PV0u-G-L3Gr0ULDSgF5s0_ti80LdMd8tWQUKGFTlrdgJ0Q6LXCLTP0MUIzds_CyImw" -d '{"id": 1, "cantidad": 2}' http://127.0.0.1:8000/api/confirmarPedido
    
*/