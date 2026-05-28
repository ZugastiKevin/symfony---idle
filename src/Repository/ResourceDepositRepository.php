<?php

namespace App\Repository;

use App\Entity\ResourceDeposit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ResourceDeposit>
 */
class ResourceDepositRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResourceDeposit::class);
    }

    public function findNearestAvailable(float $lat, float $lng, float $radius = 0.005): ?ResourceDeposit
    {
        return $this->createQueryBuilder('r')
            ->where('r.isClaimed = false')
            ->andWhere('ABS(r.latitude - :lat) < :radius')
            ->andWhere('ABS(r.longitude - :lng) < :radius')
            ->setParameter('lat', $lat)
            ->setParameter('lng', $lng)
            ->setParameter('radius', $radius)
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    public function findByChunkId(string $chunkId): array
    {
        return $this->createQueryBuilder('d')
            ->join('d.road', 'r')
            ->join('r.chunk', 'c')
            ->where('c.chunkId = :chunkId')
            ->setParameter('chunkId', $chunkId)
            ->getQuery()
            ->getResult();
    }
}
