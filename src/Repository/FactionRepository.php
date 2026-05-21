<?php

namespace App\Repository;

use App\Entity\Faction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Faction>
 */
class FactionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Faction::class);
    }

    public function findOrderedByName(): array
    {
        return $this->createQueryBuilder('f')
            ->orderBy('f.name', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findByCode(string $code): ?Faction
    {
        return $this->createQueryBuilder('f')
            ->where('f.code = :code')
            ->setParameter('code', $code)
            ->getQuery()
            ->getOneOrNullResult();
    }
}
