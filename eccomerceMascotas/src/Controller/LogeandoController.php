<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;
use Symfony\Component\Security\Core\User\UserInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class LogeandoController extends AbstractController
{
    //Esta es una ruta publica (se puede ver en el arhivo security.YAML)
    //Si estas registrado como usuario en la aplicacion, este metodo te devolvera un token jwt gracias a JWTAuthenticationBundle
    //Si el password o el email no es valido se devolvera un json junto a su error (la respuesta no es 200).

    //De esta manera puedes obtener el token
    //curl -X POST -H "Content-Type: application/json" -d '{"email": "email", "password": "password"}' http://127.0.0.1:8000/api/login

    //Esto es un ejmplo de lo que se pude esperar (un json con el token, en el caso de mi aplicacion he decidido guardar el token en el localStorage)
    //{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDc2NjE4MzIsImV4cCI6MTcwNzY2NTQzMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicGFyZWRlc3ZlbGV6amF2aWVyckBnbWFpbC5jb20ifQ.rZZv_Nru9S0ifx9-OVkmbCN0lmiAU07u5RdgFNuYPbE0Eb_AZr88ArbQhAmLpDXnbYjU-sHw4s50T0hjjJPP8m7Q8ASvrO9FE1YW_CczICfj0h78KYs7rzC65_axRMIohHpy1zDYF91pKIOfGmUbzSHo5XCfc_4I7IzMGZfzzStvGfYDlW5c-3fhALS8t6iQpt_f5rF2mRzdk-AYI_mZfHw10G5YbXNa8cOpcxewqvGqJaBJ5d9K5TssyukM2I7hr_I_ioYioT6bZ5Q6tAw8P80QybQS1ll80F5nQWzSoIwNZZfhk4CXDFn0ypDGJCwuuTbEwZw10CLG2PGFMhV4eQ"}
    #[Route('/api/login', name: 'api_login')]
    public function login(Request $request, JWTTokenManagerInterface $jwtManager, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        //Se obtienen los datos enviados desde el body de la solicitud y se transforman a codigo PHP
        $data = json_decode($request->getContent(), true);

        //Se  obtienen los datos por separado
        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;

        //Si no se ha incluido en el body de la solicitud el email o el password se devolvera un json con el error correspondiente (el codigo de respuesta no es 200)
        if (!$email || !$password) {
            return new JsonResponse(['error' => 'Email and password are required.'], Response::HTTP_BAD_REQUEST);
        }
        
        //el email se usa para poder buscar el usuario (Objeto de la clase User) en la base de datos mediante Doctrine ORM 
        //Aqui se almacenara un objeto de tipo USER si es encontardo, si no, sera null

        $user = $entityManager->getRepository(User::class)->findOneBy(['email' => $email]);

        //Si no se ha  encontrado el usuario en la base de datos o la contraseña para ese usario no es la correcta se devolvera un json con el error correspondiente (el codigo de respuesta no es 200)
        if (!$user || !$passwordHasher->isPasswordValid($user, $password)) {
            return new JsonResponse(['error' => 'Invalid email or password.'], Response::HTTP_BAD_REQUEST);
        }

        //Tras no saltar ninguna excepcion  se craera el token mediante un objeto de JWTTokenManagerInterface y su funcion create
        $token = $jwtManager->create($user);

        //Se devolvera el token y el correo en formato json
        return new JsonResponse(['token' => $token, 'email' => $email]);
    }



    //Es una ruta publica (no hace falta estar registrado para poder llamarla)
    //En el body de la solicitud se le mandara  un email y un password y en caso de que  se le hayan mandado  los dtos coorectamente 
    //y ademas ese correo electronico no exista previamente en el sistema , se creara el usuario en la base de datos y devolvera
    //un json con el token del usuario recien creado
    //De esta forma quien se registre como usuario podra directamente acceder a la aplicacion al ya tener el token
    //lo que se debe hacer es recoger ese token y guardarlo en el localstorage (en mi caso) 
    #[Route('api/register', name: 'api_register')]
    public function register(Request $request, JWTTokenManagerInterface $jwtManager, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher): JsonResponse
    {
        //Se extraen los datos provenientes del body de la solicitus (en el frontend uso fetch) y se transforman
        //de objetos json a objetos de PHP
        $data = json_decode($request->getContent(), true);
        
        //Se extraen los datos
        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;

        //Si los datos no son correctos se devuelve un json con el error concreto
        if (!$email || !$password) {
            return new JsonResponse(['error' => 'Email and password are required.'], Response::HTTP_BAD_REQUEST);
        }

        $user = $entityManager->getRepository(User::class)->findOneBy(['email' => $email]);

        //Si el email ya existe o si el password no cumple los reuisitos de seguridad se devuelve un json con los errores correspondientes
        if ($user) {
            return new JsonResponse(['error' => 'Email already exists.'], Response::HTTP_BAD_REQUEST);
        }
        if (!$this->validatePassword($password)) {
            return new JsonResponse(['error' => 'Password does not meet security requirements.'], Response::HTTP_BAD_REQUEST);
        }

        //Se crea un objeto de tipo User si todos los datos son correctos
        $newUser = new User();
        $newUser->setEmail($email);

        //Se implementa un sistema de seguridad antes de guardar la contraseña
        $newUser->setPassword($passwordHasher->hashPassword($newUser, $password));

       //Se confirman los cambios
        $entityManager->persist($newUser);
        $entityManager->flush($newUser);

        
        //Se crea un token correspondiente al usuario recien creado
        $token = $jwtManager->create($newUser);
  
        //Se devuelve ese token en formato json
        return new JsonResponse(['token' => $token, 'error' => 'User created an logged']);
    }



    //Funcion para validar un password introducido por el usuario
    private function validatePassword(string $password): bool
    {
        // Longitud mínima
        if (strlen($password) < 8) {
            return false;
        }

        // Al menos una letra mayúscula
        if (!preg_match('/[A-Z]/', $password)) {
            return false;
        }

        // Al menos una letra minúscula
        if (!preg_match('/[a-z]/', $password)) {
            return false;
        }

        // Al menos un dígito
        if (!preg_match('/\d/', $password)) {
            return false;
        }

        // Al menos un carácter especial
        if (!preg_match('/[^a-zA-Z0-9]/', $password)) {
            return false;
        }

        // Si cumple con todas las condiciones, retorna true
        return true;
    }
}
