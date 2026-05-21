<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260521115901 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Replace faction string field with foreign key to faction table';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE user ADD faction_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D64997A4C3F3 FOREIGN KEY (faction_id) REFERENCES faction (id)');
        $this->addSql('CREATE INDEX IDX_8D93D64997A4C3F3 ON user (faction_id)');
        $this->addSql('ALTER TABLE user DROP faction');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D64997A4C3F3');
        $this->addSql('DROP INDEX IDX_8D93D64997A4C3F3 ON user');
        $this->addSql('ALTER TABLE user DROP faction_id');
        $this->addSql('ALTER TABLE user ADD faction VARCHAR(20) DEFAULT NULL');
    }
}
