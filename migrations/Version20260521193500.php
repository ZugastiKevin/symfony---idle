<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260521193500 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add resource type to building types';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE building_type ADD resource_type VARCHAR(50) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE building_type DROP resource_type');
    }
}
