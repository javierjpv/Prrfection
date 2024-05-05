<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240127122232 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE ofertas (id INT AUTO_INCREMENT NOT NULL, producto_id INT DEFAULT NULL, descuento DOUBLE PRECISION DEFAULT NULL, fecha_inicio DATETIME DEFAULT NULL, fecha_fin DATETIME DEFAULT NULL, INDEX IDX_48C925F37645698E (producto_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reviews (id INT AUTO_INCREMENT NOT NULL, producto_id INT DEFAULT NULL, usuario_id INT DEFAULT NULL, texoto_comentario VARCHAR(255) DEFAULT NULL, calificacion INT DEFAULT NULL, fecha DATETIME DEFAULT NULL, INDEX IDX_6970EB0F7645698E (producto_id), INDEX IDX_6970EB0FDB38439E (usuario_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ofertas ADD CONSTRAINT FK_48C925F37645698E FOREIGN KEY (producto_id) REFERENCES productos (id)');
        $this->addSql('ALTER TABLE reviews ADD CONSTRAINT FK_6970EB0F7645698E FOREIGN KEY (producto_id) REFERENCES productos (id)');
        $this->addSql('ALTER TABLE reviews ADD CONSTRAINT FK_6970EB0FDB38439E FOREIGN KEY (usuario_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ofertas DROP FOREIGN KEY FK_48C925F37645698E');
        $this->addSql('ALTER TABLE reviews DROP FOREIGN KEY FK_6970EB0F7645698E');
        $this->addSql('ALTER TABLE reviews DROP FOREIGN KEY FK_6970EB0FDB38439E');
        $this->addSql('DROP TABLE ofertas');
        $this->addSql('DROP TABLE reviews');
    }
}
