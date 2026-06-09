<?php

namespace App\Controller\Api;

use App\Service\ResourceTransportService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
final class ResourceDeliveryController extends AbstractController
{
    #[Route('/api/deliveries/process', methods: ['POST'])]
    public function processDeliveries(ResourceTransportService $transportService): \Symfony\Component\HttpFoundation\JsonResponse
    {
        try {
            // D'abord, démarrer les livraisons prêtes
            $transportService->startReadyDeliveries();
            // Puis, traiter les livraisons en cours
            $transportService->processDeliveries();

            return $this->json(['status' => 'ok']);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()], 500);
        }
    }
}