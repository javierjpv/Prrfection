<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class RegistrationController extends AbstractController
{
    // Este método maneja el registro de nuevos usuarios en la parte del administrador
    //para registarse como usuario normal existe otro metodo (api/register)
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        // Se crea una nueva instancia de User
        $user = new User();
        // Se crea el formulario de registro asociado a la entidad User

        $form = $this->createForm(RegistrationFormType::class, $user);
        // Se maneja la solicitud del formulario
        $form->handleRequest($request);


        // Si el formulario se ha enviado y es válido
        if ($form->isSubmitted() && $form->isValid()) {
            // Se cifra la contraseña del usuario antes de almacenarla
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );
            // Se guarda el usuario en la base de datos
            $entityManager->persist($user);
            $entityManager->flush();
          
            // Redirige a la página de inicio u otra página deseada
            return $this->redirectToRoute('_profiler');
        }
        // Si el formulario no se ha enviado o no es válido, se muestra la página de registro
        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }
}
