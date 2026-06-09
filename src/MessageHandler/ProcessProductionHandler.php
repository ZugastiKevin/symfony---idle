<?php
namespace App\MessageHandler;

use App\Entity\User;
use App\Message\ProcessProductionMessage;
use App\Service\ResourceProductionService;
use App\Service\ResourceTransportService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Messenger\Attribute\AsMessageHandler;

#[AsMessageHandler]
class ProcessProductionHandler
{
    public function __construct(
        private readonly EntityManagerInterface $em,
        private readonly ResourceProductionService $productionService,
        private readonly ResourceTransportService $transportService,
    ) {}

    public function __invoke(ProcessProductionMessage $message): void
    {
        $users = $this->em->getRepository(User::class)->findAll();

        // 1. Planifier les nouvelles livraisons pour chaque utilisateur
        foreach ($users as $user) {
            try {
                $this->productionService->scheduleDeliveries($user);
            } catch (\Throwable $e) {
                // Continue les autres users même si un plante
                continue;
            }
        }

        // 2. Démarrer les livraisons prêtes (waiting → in_transit)
        // 3. Traiter les livraisons en cours
        // Ces opérations ne sont faites qu'une seule fois (pas une fois par utilisateur)
        $this->transportService->startReadyDeliveries();
        $this->transportService->processDeliveries();

        $this->em->flush();
    }
}