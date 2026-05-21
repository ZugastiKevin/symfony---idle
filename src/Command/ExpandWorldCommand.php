<?php

namespace App\Command;

use App\Service\WorldExpansionService;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:world:expand',
    description: 'Lance une passe de génération procédurale du monde.',
)]
class ExpandWorldCommand extends Command
{
    public function __construct(
        private WorldExpansionService $worldExpansionService
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $io->title('Lancement manuel de l\'expansion du monde');

        $this->worldExpansionService->expand();

        $io->success('Opération d\'expansion terminée. Vérifiez les logs pour plus de détails.');

        return Command::SUCCESS;
    }
}
