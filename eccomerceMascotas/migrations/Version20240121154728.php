<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240121154728 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE comentarios (id INT AUTO_INCREMENT NOT NULL, producto_id INT DEFAULT NULL, usuario_id INT DEFAULT NULL, texto VARCHAR(255) DEFAULT NULL, fecha DATETIME DEFAULT NULL, INDEX IDX_F54B3FC07645698E (producto_id), INDEX IDX_F54B3FC0DB38439E (usuario_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lista_de_deseos (id INT AUTO_INCREMENT NOT NULL, usuario_id INT DEFAULT NULL, producto_id INT DEFAULT NULL, INDEX IDX_99F5A27ADB38439E (usuario_id), INDEX IDX_99F5A27A7645698E (producto_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE comentarios ADD CONSTRAINT FK_F54B3FC07645698E FOREIGN KEY (producto_id) REFERENCES productos (id)');
        $this->addSql('ALTER TABLE comentarios ADD CONSTRAINT FK_F54B3FC0DB38439E FOREIGN KEY (usuario_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE lista_de_deseos ADD CONSTRAINT FK_99F5A27ADB38439E FOREIGN KEY (usuario_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE lista_de_deseos ADD CONSTRAINT FK_99F5A27A7645698E FOREIGN KEY (producto_id) REFERENCES productos (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE comentarios DROP FOREIGN KEY FK_F54B3FC07645698E');
        $this->addSql('ALTER TABLE comentarios DROP FOREIGN KEY FK_F54B3FC0DB38439E');
        $this->addSql('ALTER TABLE lista_de_deseos DROP FOREIGN KEY FK_99F5A27ADB38439E');
        $this->addSql('ALTER TABLE lista_de_deseos DROP FOREIGN KEY FK_99F5A27A7645698E');
        $this->addSql('DROP TABLE comentarios');
        $this->addSql('DROP TABLE lista_de_deseos');
    }
}
