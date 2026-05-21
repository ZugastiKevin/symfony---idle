<?php

namespace App\Command;

use App\Service\WorldExpansionService;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Contracts\Cache\CacheInterface;
use Symfony\Component\DependencyInjection\Attribute\Target;

#[AsCommand(
    name: 'app:world:run-expansion-loop',
    description: 'Lance l\'expansion du monde en boucle avec une pause entre chaque passe.',
)]
class RunExpansionLoopCommand extends Command
{
    public function __construct(
        private WorldExpansionService $worldExpansionService,
        #[Target('game.cache')] private CacheInterface $cache
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('loops', InputArgument::OPTIONAL, 'Nombre de boucles à exécuter', 100)
            ->addArgument('interval', InputArgument::OPTIONAL, 'Intervalle en secondes entre chaque boucle', 120)
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $loops = (int) $input->getArgument('loops');
        $interval = (int) $input->getArgument('interval');

        $io->title('Démarrage du service d\'expansion du monde en boucle');
        $io->text("Nombre de passes configurées : {$loops}");
        $io->text("Intervalle entre les passes : {$interval} secondes");
        $io->newLine();

        for ($i = 1; $i <= $loops; $i++) {
            $io->section("--- Début de la passe n°{$i}/{$loops} ---");

            try {
                $this->worldExpansionService->expand();
                $io->info('Expansion terminée. Vidage du cache du jeu...');
                
                $this->cache->clear();

                $io->success('Cache vidé avec succès.');

            } catch (\Exception $e) {
                $io->error('Une erreur est survenue lors de l\'expansion : ' . $e->getMessage());
            }

            if ($i < $loops) {
                $io->text("Prochaine passe dans {$interval} secondes...");
                sleep($interval);
            }
        }

        $io->newLine();
        $io->success('Toutes les passes d\'expansion ont été exécutées. Le service s\'arrête.');

        return Command::SUCCESS;
    }
}
