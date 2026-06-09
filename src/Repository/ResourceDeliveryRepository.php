<?php

namespace App\Repository;

use App\Entity\ResourceDelivery;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ResourceDeliveryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResourceDelivery::class);
    }

    /**
     * Trouve les livraisons en attente ou en cours
     */
    public function findPending(): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->setParameter('status', ResourceDelivery::STATUS_PENDING)
            ->getQuery()
            ->getResult();
    }

    /**
     * Trouve les livraisons prêtes à être démarrées (waiting mais scheduledAt passé)
     */
    public function findReadyToStart(\DateTimeImmutable $now): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->andWhere('d.scheduledAt <= :now')
            ->setParameter('status', ResourceDelivery::STATUS_WAITING)
            ->setParameter('now', $now)
            ->getQuery()
            ->getResult();
    }

    /**
     * Vérifie s'il y a des livraisons pour une ressource donnée
     * Retourne true si une livraison existe (même terminée) pour éviter les doublons
     */
    public function hasDeliveryForResource(\App\Entity\User $user, string $resourceCode): bool
    {
        $result = $this->createQueryBuilder('d')
            ->select('COUNT(d.id)')
            ->join('d.sourceBuilding', 'b')
            ->join('d.resource', 'r')
            ->where('b.user = :user')
            ->andWhere('r.code = :resourceCode')
            ->setParameter('user', $user)
            ->setParameter('resourceCode', $resourceCode)
            ->getQuery()
            ->getSingleScalarResult();

        return (int) $result > 0;
    }

    /**
     * Trouve les livraisons en cours avec un seuil de progrès
     */
    public function findInProgress(int $minProgress = 0): array
    {
        return $this->createQueryBuilder('d')
            ->where('d.status = :status')
            ->andWhere('d.progress >= :minProgress')
            ->setParameter('status', ResourceDelivery::STATUS_IN_TRANSIT)
            ->setParameter('minProgress', $minProgress)
            ->getQuery()
            ->getResult();
    }

    /**
     * Trouve une livraison en attente ou en transit pour un bâtiment donné
     */
    public function findPendingByBuilding(int $buildingId): ?ResourceDelivery
    {
        return $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :buildingId')
            ->andWhere('d.status IN (:statuses)')
            ->setParameter('buildingId', $buildingId)
            ->setParameter('statuses', [ResourceDelivery::STATUS_PENDING, ResourceDelivery::STATUS_IN_TRANSIT])
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Trouve la prochaine livraison pour un bâtiment (waiting ou in_transit)
     * Le bâtiment peut être source (producteur) ou cible (base)
     * Retourne null si pas de livraison
     */
    public function findNextDepartureByBuilding(int $buildingId): ?ResourceDelivery
    {
        return $this->createQueryBuilder('d')
            ->where('d.sourceBuilding = :buildingId OR d.targetBuilding = :buildingId')
            ->andWhere('d.status IN (:statuses)')
            ->setParameter('buildingId', $buildingId)
            ->setParameter('statuses', [ResourceDelivery::STATUS_WAITING, ResourceDelivery::STATUS_PENDING, ResourceDelivery::STATUS_IN_TRANSIT])
            ->orderBy('d.createdAt', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Calcule le temps restant pour la PROCHAINE livraison
     * Ignore les livraisons déjà passées
     * Retourne null si pas de livraison
     */
    public function getTimeUntilNextDeparture(int $buildingId): ?int
    {
        $now = new \DateTimeImmutable();

        // Chercher la prochaine livraison encore à venir
        $delivery = $this->createQueryBuilder('d')
            ->where('(d.sourceBuilding = :buildingId OR d.targetBuilding = :buildingId)')
            ->andWhere('d.status IN (:statuses)')
            ->andWhere('(d.scheduledAt IS NULL OR d.scheduledAt > :now)')
            ->setParameter('buildingId', $buildingId)
            ->setParameter('statuses', [ResourceDelivery::STATUS_WAITING, ResourceDelivery::STATUS_PENDING, ResourceDelivery::STATUS_IN_TRANSIT])
            ->setParameter('now', $now)
            ->orderBy('d.scheduledAt', 'ASC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();

        if (!$delivery) {
            return null;
        }

        // Si la livraison est en attente (waiting), retourner le temps jusqu'au scheduledAt
        if ($delivery->isWaiting()) {
            $scheduledAt = $delivery->getScheduledAt();
            if (!$scheduledAt) {
                return null;
            }

            $remaining = $scheduledAt->getTimestamp() - $now->getTimestamp();
            return max(0, (int) $remaining);
        }

        // Si la livraison est en transit, calculer le temps restant basé sur le progrès
        $estimatedTime = $delivery->getEstimatedTime();
        $progress = $delivery->getProgress();

        if ($progress >= 100) {
            return 0;
        }

        $remaining = (int) (($estimatedTime * (100 - $progress)) / 100);
        return max(0, $remaining);
    }
}