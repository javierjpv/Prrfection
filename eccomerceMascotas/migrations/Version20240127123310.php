<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240127123310 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE pagos (id INT AUTO_INCREMENT NOT NULL, pedido_id INT DEFAULT NULL, metodo_de_pago_id INT DEFAULT NULL, cantidad DOUBLE PRECISION DEFAULT NULL, INDEX IDX_DA9B0DFF4854653A (pedido_id), INDEX IDX_DA9B0DFF7E666606 (metodo_de_pago_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE pagos ADD CONSTRAINT FK_DA9B0DFF4854653A FOREIGN KEY (pedido_id) REFERENCES pedidos (id)');
        $this->addSql('ALTER TABLE pagos ADD CONSTRAINT FK_DA9B0DFF7E666606 FOREIGN KEY (metodo_de_pago_id) REFERENCES metodos_de_pago (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE pagos DROP FOREIGN KEY FK_DA9B0DFF4854653A');
        $this->addSql('ALTER TABLE pagos DROP FOREIGN KEY FK_DA9B0DFF7E666606');
        $this->addSql('DROP TABLE pagos');
    }
}
