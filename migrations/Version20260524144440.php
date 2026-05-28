<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20260524144440 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE player_inventory (id INT AUTO_INCREMENT NOT NULL, quantity INT NOT NULL, updated_at DATETIME NOT NULL, player_id INT NOT NULL, resource_type_id INT DEFAULT NULL, INDEX IDX_11217F0F99E6F5DF (player_id), INDEX IDX_11217F0F98EC6B7B (resource_type_id), UNIQUE INDEX user_resource_unique (player_id, resource_type_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('CREATE TABLE resource_type (id INT AUTO_INCREMENT NOT NULL, code VARCHAR(50) NOT NULL, label VARCHAR(100) NOT NULL, UNIQUE INDEX UNIQ_83FEF79377153098 (code), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4');
        $this->addSql('ALTER TABLE player_inventory ADD CONSTRAINT FK_11217F0F99E6F5DF FOREIGN KEY (player_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE player_inventory ADD CONSTRAINT FK_11217F0F98EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
        $this->addSql('DROP TABLE player_resource');
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D4F28401B9 FOREIGN KEY (building_type_id) REFERENCES building_type (id)');
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D4E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE building ADD CONSTRAINT FK_E16F61D48BD543CD FOREIGN KEY (chunk_id) REFERENCES chunk (id)');
        $this->addSql('ALTER TABLE building_type ADD resource_type_id INT DEFAULT NULL, DROP resource_type');
        $this->addSql('ALTER TABLE building_type ADD CONSTRAINT FK_2AFA207D98EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
        $this->addSql('CREATE INDEX IDX_2AFA207D98EC6B7B ON building_type (resource_type_id)');
        $this->addSql('ALTER TABLE faction_building_image ADD CONSTRAINT FK_64AA84374448F8DA FOREIGN KEY (faction_id) REFERENCES faction (id)');
        $this->addSql('ALTER TABLE faction_building_image ADD CONSTRAINT FK_64AA8437F28401B9 FOREIGN KEY (building_type_id) REFERENCES building_type (id)');
        $this->addSql('ALTER TABLE resource_deposit ADD resource_type_id INT NOT NULL, DROP resource_type');
        $this->addSql('ALTER TABLE resource_deposit ADD CONSTRAINT FK_C87B7AD198EC6B7B FOREIGN KEY (resource_type_id) REFERENCES resource_type (id)');
        $this->addSql('ALTER TABLE resource_deposit ADD CONSTRAINT FK_C87B7AD1962F8178 FOREIGN KEY (road_id) REFERENCES road (id)');
        $this->addSql('CREATE INDEX IDX_C87B7AD198EC6B7B ON resource_deposit (resource_type_id)');
        $this->addSql('ALTER TABLE road ADD CONSTRAINT FK_95C0C4B18BD543CD FOREIGN KEY (chunk_id) REFERENCES chunk (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649E48FD905 FOREIGN KEY (game_id) REFERENCES game (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6494448F8DA FOREIGN KEY (faction_id) REFERENCES faction (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE player_resource (id INT AUTO_INCREMENT NOT NULL, iron INT NOT NULL, stone INT NOT NULL, water INT NOT NULL, oil INT NOT NULL, updated_at DATETIME NOT NULL, player_id INT NOT NULL, UNIQUE INDEX UNIQ_BA46B5F699E6F5DF (player_id), PRIMARY KEY (id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_0900_ai_ci` ENGINE = MyISAM COMMENT = \'\' ');
        $this->addSql('ALTER TABLE player_inventory DROP FOREIGN KEY FK_11217F0F99E6F5DF');
        $this->addSql('ALTER TABLE player_inventory DROP FOREIGN KEY FK_11217F0F98EC6B7B');
        $this->addSql('DROP TABLE player_inventory');
        $this->addSql('DROP TABLE resource_type');
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D4F28401B9');
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D4A76ED395');
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D4E48FD905');
        $this->addSql('ALTER TABLE building DROP FOREIGN KEY FK_E16F61D48BD543CD');
        $this->addSql('ALTER TABLE building_type DROP FOREIGN KEY FK_2AFA207D98EC6B7B');
        $this->addSql('DROP INDEX IDX_2AFA207D98EC6B7B ON building_type');
        $this->addSql('ALTER TABLE building_type ADD resource_type VARCHAR(50) DEFAULT NULL, DROP resource_type_id');
        $this->addSql('ALTER TABLE faction_building_image DROP FOREIGN KEY FK_64AA84374448F8DA');
        $this->addSql('ALTER TABLE faction_building_image DROP FOREIGN KEY FK_64AA8437F28401B9');
        $this->addSql('ALTER TABLE resource_deposit DROP FOREIGN KEY FK_C87B7AD198EC6B7B');
        $this->addSql('ALTER TABLE resource_deposit DROP FOREIGN KEY FK_C87B7AD1962F8178');
        $this->addSql('DROP INDEX IDX_C87B7AD198EC6B7B ON resource_deposit');
        $this->addSql('ALTER TABLE resource_deposit ADD resource_type VARCHAR(50) NOT NULL, DROP resource_type_id');
        $this->addSql('ALTER TABLE road DROP FOREIGN KEY FK_95C0C4B18BD543CD');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649E48FD905');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6494448F8DA');
    }
}
