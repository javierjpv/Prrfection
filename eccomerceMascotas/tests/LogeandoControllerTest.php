<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class LogeandoControllerTest extends WebTestCase
{
    public function testLogeandoEndpoint()
    {
        $client = static::createClient();
    
        // Realiza una solicitud POST al endpoint /logeando con datos de inicio de sesión
        $client->request(
            'POST',
            'http://127.0.0.1:8000/logeando',
            [], // Parámetros adicionales si es necesario
            [], // Headers adicionales si es necesario
            ['CONTENT_TYPE' => 'application/json'],
            '{"email": "paredesvelezjavierr@gmail.com", "password": "696969"}'
        );
        
        // Verifica que la respuesta es un JSON válido
        $this->assertJson($client->getResponse()->getContent());
    
        // Verifica si la respuesta es exitosa o no
        if ($client->getResponse()->isSuccessful()) {
            // Verifica que la respuesta contiene un token
            $responseData = json_decode($client->getResponse()->getContent(), true);
            $this->assertNotNull($responseData);
            $this->assertArrayHasKey('token', $responseData);
        } else {
            // Verifica el código de estado y el contenido del JSON para errores
            $statusCode = $client->getResponse()->getStatusCode();
            if ($statusCode === 404) {
                $this->assertJsonStringEqualsJsonString('{"error": "Usuario o contraseña inválidos"}', $client->getResponse()->getContent());
            } else {
                $this->fail("Unexpected HTTP status code: $statusCode");
            }
        }
    }
    
    
}
