<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20260608FixDeliveryStatus extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Fix delivery status values from integers to strings';
    }

    public function up(Schema $schema): void
    {
        // Convertir les statuts entiers en strings
        $this->addSql("UPDATE resource_delivery SET status = 'waiting' WHERE status = 0");
        $this->addSql("UPDATE resource_delivery SET status = 'pending' WHERE status = 1");
        $this->addSql("UPDATE resource_delivery SET status = 'in_transit' WHERE status = 2");
        $this->addSql("UPDATE resource_delivery SET status = 'delivered' WHERE status = 3");
    }

    public function down(Schema $schema): void
    {
        // Revert: convertir les strings en integers
        $this->addSql("UPDATE resource_delivery SET status = 0 WHERE status = 'waiting'");
        $this->addSql("UPDATE resource_delivery SET status = 1 WHERE status = 'pending'");
        $this->addSql("UPDATE resource_delivery SET status = 2 WHERE status = 'in_transit'");
        $this->addSql("UPDATE resource_delivery SET status = 3 WHERE status = 'delivered'");
    }
}