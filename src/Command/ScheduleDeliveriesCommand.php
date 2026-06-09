<?php

namespace App\Command;

use App\Entity\User;
use App\Service\ResourceProductionService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

#[AsCommand(
    name: 'game:schedule-deliveries',
    description: 'Planifie les livraisons pour tous les joueurs ayant des bâtiments producteurs',
)]
class ScheduleDeliveriesCommand extends Command
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly ResourceProductionService $productionService
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $output->writeln('<info>Démarrage de la planification des livraisons...</info>');

        $users = $this->entityManager->getRepository(User::class)->findAll();
        $deliveriesCreated = 0;

        foreach ($users as $user) {
            try {
                $this->productionService->scheduleDeliveries($user);
                $deliveriesCreated++;
                $output->writeln(sprintf('<comment>Joueur %s: livraisons planifiées</comment>', $user->getPseudo() ?? $user->getId()));
            } catch (\Exception $e) {
                $output->writeln(sprintf('<error>Erreur pour le joueur %s: %s</error>', $user->getPseudo() ?? $user->getId(), $e->getMessage()));
            }
        }

        $this->entityManager->flush();

        $output->writeln(sprintf('<info>Terminé. %d joueurs traités.</info>', $deliveriesCreated));

        return Command::SUCCESS;
    }
}