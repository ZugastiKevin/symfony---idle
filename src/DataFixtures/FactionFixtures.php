<?php

namespace App\DataFixtures;

use App\Entity\Faction;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class FactionFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $factions = [
            ['name' => 'Empire du Fer', 'code' => 'empire', 'description' => 'Une faction puissante et disciplinée'],
            ['name' => 'Ligue des Cendres', 'code' => 'cendres', 'description' => 'Une faction des mages et des mystiques'],
            ['name' => 'Conclave des Nomades', 'code' => 'nomades', 'description' => 'Une faction libre et indépendante'],
        ];

        foreach ($factions as $factionData) {
            $faction = new Faction();
            $faction->setName($factionData['name']);
            $faction->setCode($factionData['code']);
            $faction->setDescription($factionData['description']);
            $manager->persist($faction);
            $this->addReference('faction_' . $factionData['code'], $faction);
        }

        $manager->flush();
    }
}
