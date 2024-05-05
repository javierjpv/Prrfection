<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240127125601 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE envios (id INT AUTO_INCREMENT NOT NULL, pedido_id INT DEFAULT NULL, direccion_entrega VARCHAR(255) DEFAULT NULL, metodo_envio VARCHAR(50) DEFAULT NULL, INDEX IDX_EDC2AE674854653A (pedido_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE productos_mascotas (producto_id INT NOT NULL, mascota_id INT NOT NULL, INDEX IDX_584E110D7645698E (producto_id), INDEX IDX_584E110DFB60C59E (mascota_id), PRIMARY KEY(producto_id, mascota_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE envios ADD CONSTRAINT FK_EDC2AE674854653A FOREIGN KEY (pedido_id) REFERENCES pedidos (id)');
        $this->addSql('ALTER TABLE productos_mascotas ADD CONSTRAINT FK_584E110D7645698E FOREIGN KEY (producto_id) REFERENCES productos (id)');
        $this->addSql('ALTER TABLE productos_mascotas ADD CONSTRAINT FK_584E110DFB60C59E FOREIGN KEY (mascota_id) REFERENCES mascotas (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE envios DROP FOREIGN KEY FK_EDC2AE674854653A');
        $this->addSql('ALTER TABLE productos_mascotas DROP FOREIGN KEY FK_584E110D7645698E');
        $this->addSql('ALTER TABLE productos_mascotas DROP FOREIGN KEY FK_584E110DFB60C59E');
        $this->addSql('DROP TABLE envios');
        $this->addSql('DROP TABLE productos_mascotas');
    }
}
