<?php

namespace App\Tests;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ProductosTest extends WebTestCase
{
    public function testSomething(): void
    {
        $client = static::createClient();
        $crawler = $client->request('GET', '/productos');

        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/json');
        
        // Decodificar el contenido JSON de la respuesta
        $content=$client->getResponse()->getContent();
        $data=json_decode($content,true);

        $this->assertIsArray($data,'la respuesta debe ser un array');

        foreach ($data as $producto) {
             // Asegurarse de que cada producto tenga las claves esperadas
            $this->arrayHasKey('id',$producto);
            $this->arrayHasKey('nombre',$producto);
            $this->assertArrayHasKey('descripcion', $producto);
            $this->assertArrayHasKey('precio', $producto);
            $this->assertArrayHasKey('stock', $producto);
        }
    }
}
