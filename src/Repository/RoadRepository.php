<?php

namespace App\Repository;

use App\Entity\Chunk;
use App\Entity\Road;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Road>
 */
class RoadRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Road::class);
    }

    /**
     * Trouve toutes les routes appartenant à un chunk spécifique
     *
     * @param Chunk $chunk
     * @return array
     */
    public function findByChunk(Chunk $chunk)
    {
        return $this->findBy([
            'chunk' => $chunk
        ]);
    }

    /**
     * Trouve toutes les routes avec leurs points
     */
    public function findAllWithPoints(): array
    {
        return $this->createQueryBuilder('r')
            ->addSelect('r.points')
            ->getQuery()
            ->getResult();
    }
}