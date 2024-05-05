<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    //Este metodo maneja la pagina de inicio de sesion del usuario administardor,
    //tras un login exitoso,te llevara hacia la ruta admin, la cual sera el panel
    //de administracion,en el panel de administarcion el usuario con suficientes permisos,
    //podra realizar diferentes operaciones  CRUD 
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // Obtiene el error de inicio d esesion si lo hay
        $error = $authenticationUtils->getLastAuthenticationError();

        // Obtiene el ultimo identificador del usuario
        //en mi caso el identificador es el correo electronico
        $lastUsername = $authenticationUtils->getLastUsername();
        //Renderiza la plantilla de inicio de sesion con los datos necesarioas
        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    //Este metodo maneja la accion de cierre de sesion en la parte del panel de administracion
    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
