<?php
namespace App\Controller\Api;

use App\Entity\ResourceDelivery;
use App\Entity\User;
use App\Repository\BuildingRepository;
use App\Repository\ResourceDeliveryRepository;
use App\Repository\PlayerInventoryRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Mercure\HubInterface;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_USER')]
final class DeliveryController extends AbstractController
{
    public function __construct(
        private readonly HubInterface $hub,
        private readonly EntityManagerInterface $em,
    ) {}

    #[Route('/api/deliveries', methods: ['GET'])]
    public function getDeliveries(
        BuildingRepository $buildingRepo,
        ResourceDeliveryRepository $deliveryRepo
    ): JsonResponse {
        $user = $this->getUser();
        if (!$user instanceof User) {
            return $this->json(['error' => 'Not authenticated'], 401);
        }

        $base = $buildingRepo->findBaseForUser($user);
        if (!$base) {
            return $this->json([]);
        }

        $deliveries = $deliveryRepo->createQueryBuilder('d')
            ->where('d.targetBuilding = :base')
            ->andWhere('d.status IN (:statuses)')
            ->setParameter('base', $base)
            ->setParameter('statuses', [
                ResourceDelivery::STATUS_WAITING,
                ResourceDelivery::STATUS_IN_TRANSIT,
            ])
            ->getQuery()
            ->getResult();

        return $this->json(array_map(fn($d) => [
            'id'             => $d->getId(),
            'resource'       => $d->getResource()?->getCode(),
            'quantity'       => $d->getQuantity(),
            'status'         => $d->getStatus(),
            'progress'       => $d->getProgress(),
            'estimatedTime'  => $d->getEstimatedTime(),
            'scheduledAt'    => $d->getScheduledAt()?->format('c'),
            'waypoints'      => $d->getWaypoints(),
            'sourceBuilding' => $d->getSourceBuilding()?->getId(),
        ], $deliveries));
    }

    #[Route('/api/deliveries/{id}/arrive', methods: ['PATCH'])]
    public function markAsArrived(
        int $id,
        ResourceDeliveryRepository $deliveryRepo,
        PlayerInventoryRepository $inventoryRepo
    ): JsonResponse {
        $user = $this->getUser();
        if (!$user instanceof User) {
            return $this->json(['error' => 'Not authenticated'], 401);
        }

        $delivery = $deliveryRepo->find($id);
        if (!$delivery) {
            return $this->json(['error' => 'Delivery not found'], 404);
        }

        // Sécurité : vérifier que la livraison appartient bien à ce joueur
        if ($delivery->getUser()?->getId() !== $user->getId()) {
            return $this->json(['error' => 'Forbidden'], 403);
        }

        // Créditer l'inventaire
        $this->addResourcesToUser($delivery, $inventoryRepo);

        $delivery->setStatus(ResourceDelivery::STATUS_DELIVERED);
        $delivery->setDeliveredAt(new \DateTimeImmutable());
        $this->em->flush();

        // Push Mercure → client retire le marker et rafraîchit l'inventaire
        $this->hub->publish(new Update(
            topics: ["game/delivery/{$user->getId()}"],
            data: json_encode([
                'id'     => $delivery->getId(),
                'status' => 'arrived',
            ]),
            private: true
        ));

        return $this->json(['status' => 'ok']);
    }

    private function addResourcesToUser(
        ResourceDelivery $delivery,
        PlayerInventoryRepository $inventoryRepo
    ): void {
        $user = $delivery->getSourceBuilding()?->getUser(); // ← via sourceBuilding
        $resourceType = $delivery->getResource();
        if (!$user || !$resourceType) return;

        $inventory = $inventoryRepo->findOneBy([
            'player'         => $user,
            'resourceType' => $resourceType,
        ]);

        if ($inventory) {
            $inventory->setQuantity($inventory->getQuantity() + $delivery->getQuantity());
        } else {
            $inventory = new \App\Entity\PlayerInventory();
            $inventory->setPlayer($user);
            $inventory->setResourceType($resourceType);
            $inventory->setQuantity($delivery->getQuantity());
            $this->em->persist($inventory);
        }
    }
}