<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ConfirmarPedidoTest extends WebTestCase
{
    public function testLogin()
    {
        $client = static::createClient();

        // Simular una solicitud POST para iniciar sesión
        $client->request(
            'POST',
            '/api/login',
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            '{"email": "paredesvelezjavierr@gmail.com", "password": "696969"}'
        );

        // Verificar que la solicitud se haya completado correctamente (código de estado HTTP 200)
        $this->assertEquals(200, $client->getResponse()->getStatusCode());

        // Obtener el token JWT de la respuesta
        $responseContent = json_decode($client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('token', $responseContent);
        $token = $responseContent['token'];

        // Verificar que el token JWT no esté vacío
        $this->assertNotEmpty($token);

        return $token;
    }

    /**
     * @depends testLogin
     */
    public function testConfirmarPedido($token)
    {
        $client = static::createClient();

        // Simular una solicitud POST con datos JSON y el token JWT
        $client->request(
            'POST',
            '/api/confirmarPedido',
            [],
            [],
            ['CONTENT_TYPE' => 'application/json', 'HTTP_AUTHORIZATION' => 'Bearer ' . $token],
            '{"id": 1, "cantidad": 2}'
        );

        // Verificar que la solicitud se haya completado correctamente (código de estado HTTP 201)
        $this->assertEquals(201, $client->getResponse()->getStatusCode());

        // Verificar que la respuesta contiene el ID del pedido y el ID del detalle del pedido
        $responseContent = json_decode($client->getResponse()->getContent(), true);
        $this->assertArrayHasKey('PedidoId', $responseContent);
        $this->assertArrayHasKey('DetallePedidoId', $responseContent);
    }
}
