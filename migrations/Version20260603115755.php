<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260603115755 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D4F28401B9 FOREIGN KEY (building_type_id) REFERENCES building_type (id)');
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D4E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D48BD543CD FOREIGN KEY (chunk_id) REFERENCES chunk (id)');
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D4F80DA337 FOREIGN KEY (resource_deposit_id) REFERENCES resource_deposit (id)');
        $this->addSql('ALTER TABLE building_cost ADD CONSTRAINT FK_BE02E3A8F28401B9 FOREIGN KEY (building_type_id) REFERENCES building_type (id)');
        $this->addSql('ALTER TABLE building_cost ADD CONSTRAINT FK_BE02E3A898EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
        $this->addSql('ALTER TABLE building_type ADD CONSTRAINT FK_2AFA207D98EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
        $this->addSql('ALTER TABLE faction_building_image ADD CONSTRAINT FK_64AA84374448F8DA FOREIGN KEY (faction_id) REFERENCES faction (id)');
        $this->addSql('ALTER TABLE faction_building_image ADD CONSTRAINT FK_64AA8437F28401B9 FOREIGN KEY (building_type_id) REFERENCES building_type (id)');
        $this->addSql('ALTER TABLE player_inventory ADD CONSTRAINT FK_11217F0F99E6F5DF FOREIGN KEY (player_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE player_inventory ADD CONSTRAINT FK_11217F0F98EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
        $this->addSql('ALTER TABLE resource_deposit ADD CONSTRAINT FK_C87B7AD198EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
        $this->addSql('ALTER TABLE resource_deposit ADD CONSTRAINT FK_C87B7AD1962F8178 FOREIGN KEY (road_id) REFERENCES road (id)');
        $this->addSql('ALTER TABLE road ADD CONSTRAINT FK_95C0C4B18BD543CD FOREIGN KEY (chunk_id) REFERENCES chunk (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6494448F8DA FOREIGN KEY (faction_id) REFERENCES faction (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D4F28401B9');
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D4A76ED395');
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D4E48FD905');
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D48BD543CD');
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D4F80DA337');
        $this->addSql('ALTER TABLE building_cost DROP FOREIGN KEY FK_BE02E3A8F28401B9');
        $this->addSql('ALTER TABLE building_cost DROP FOREIGN KEY FK_BE02E3A898EC6B7B');
        $this->addSql('ALTER TABLE building_type DROP FOREIGN KEY FK_2AFA207D98EC6B7B');
        $this->addSql('ALTER TABLE faction_building_image DROP FOREIGN KEY FK_64AA84374448F8DA');
        $this->addSql('ALTER TABLE faction_building_image DROP FOREIGN KEY FK_64AA8437F28401B9');
        $this->addSql('ALTER TABLE player_inventory DROP FOREIGN KEY FK_11217F0F99E6F5DF');
        $this->addSql('ALTER TABLE player_inventory DROP FOREIGN KEY FK_11217F0F98EC6B7B');
        $this->addSql('ALTER TABLE resource_deposit DROP FOREIGN KEY FK_C87B7AD198EC6B7B');
        $this->addSql('ALTER TABLE resource_deposit DROP FOREIGN KEY FK_C87B7AD1962F8178');
        $this->addSql('ALTER TABLE road DROP FOREIGN KEY FK_95C0C4B18BD543CD');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649E48FD905');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6494448F8DA');
    }
}
