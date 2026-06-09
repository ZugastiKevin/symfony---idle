<?php

namespace App\Service;

use App\Entity\Building;
use App\Entity\ResourceDelivery;
use App\Repository\ResourceDeliveryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class DeliveryService
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly ResourceDeliveryRepository $deliveryRepository,
        private readonly HttpClientInterface $httpClient,
    ) {}

    /**
     * Crée une livraison avec route OSRM et ETA
     */
    public function createDeliveryWithRoute(Building $source, Building $target): ?ResourceDelivery
    {
        $buildingType = $source->getBuildingType();
        $resourceType = $buildingType->getResourceType();
        $user = $source->getUser();

        if (!$resourceType || !$user) {
            return null;
        }

        // Vérifier si une livraison existe déjà
        $existing = $this->deliveryRepository->findPendingByBuilding($source->getId());
        if ($existing) {
            return $existing;
        }

        // Calculer la quantité
        $level = $source->getLevel() ?? 1;
        $quantity = (int) ($buildingType->getProductionRate() * $level);
        if ($quantity <= 0) {
            return null;
        }

        // Récupérer le chemin OSRM (à implémenter avec un service OSRM)
        $route = $this->getOSRMRoute($source, $target);

        // Calculer l'ETA en secondes
        $etaSeconds = $route['duration'] ?? 300;

        // Créer la livraison
        $delivery = new ResourceDelivery();
        $delivery->setResource($resourceType);
        $delivery->setQuantity($quantity);
        $delivery->setSourceBuilding($source);
        $delivery->setTargetBuilding($target);
        $delivery->setStatus(ResourceDelivery::STATUS_WAITING);
        $delivery->setProgress(0);
        $delivery->setEstimatedTime($etaSeconds);
        $delivery->setScheduledAt(new \DateTimeImmutable());

        // Stocker le waypoint pour le frontend
        $delivery->setWaypoints(json_encode($route['coordinates'] ?? []));

        $this->entityManager->persist($delivery);
        $this->entityManager->flush();

        return $delivery;
    }

    /**
     * Récupère le chemin OSRM entre deux points
     */
    private function getOSRMRoute(Building $source, Building $target): array
    {
        $url = sprintf(
            'http://localhost:5000/route/v1/driving/%f,%f;%f,%f?geometries=geojson',
            $source->getLatitudeBuild(),
            $source->getLongitudeBuild(),
            $target->getLatitudeBuild(),
            $target->getLongitudeBuild()
        );

        try {
            $response = $this->httpClient->request('GET', $url, [
                'timeout' => 5,
            ]);

            $data = $response->toArray();

            $coords = [];
            foreach ($data['routes'][0]['geometry']['coordinates'] as $point) {
                $coords[] = ['lat' => $point[1], 'lng' => $point[0]];
            }

            return [
                'duration' => (int) $data['routes'][0]['duration'],
                'coordinates' => $coords
            ];
        } catch (\Exception $e) {
            // Fallback: ligne droite
            return [
                'duration' => 300,
                'coordinates' => [
                    ['lat' => $source->getLatitudeBuild(), 'lng' => $source->getLongitudeBuild()],
                    ['lat' => $target->getLatitudeBuild(), 'lng' => $target->getLongitudeBuild()]
                ]
            ];
        }
    }

    /**
     * Termine une livraison et crée une nouvelle
     */
    public function completeDelivery(ResourceDelivery $delivery): void
    {
        $delivery->setStatus(ResourceDelivery::STATUS_DELIVERED);
        $delivery->setDeliveredAt(new \DateTimeImmutable());

        // Créditer les ressources
        $user = $delivery->getTargetBuilding()?->getUser();
        $quantity = $delivery->getQuantity();
        if ($user && $delivery->getResource()) {
            // TODO: Ajouter les ressources à l'inventaire
        }

        $this->entityManager->persist($delivery);
        $this->entityManager->flush();

        // Créer une nouvelle livraison
        $source = $delivery->getSourceBuilding();
        $target = $delivery->getTargetBuilding();
        if ($source && $target) {
            $this->createDeliveryWithRoute($source, $target);
        }
    }
}