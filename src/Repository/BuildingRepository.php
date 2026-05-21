<?php

namespace App\Repository;

use App\Entity\Building;
use App\Entity\Game;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Building>
 */
class BuildingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Building::class);
    }

    //    /**
    //     * @return Building[] Returns an array of Building objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('b')
    //            ->andWhere('b.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('b.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Building
    //    {
    //        return $this->createQueryBuilder('b')
    //            ->andWhere('b.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    /**
     * @param Game $game
     * @return array
     */
    public function getBuildingsDataForGame(Game $game): array
    {
        $buildings = $this->findBy(['game' => $game]);
        $buildingData = [];

        foreach ($buildings as $b) {
            $buildingData[] = [
                'lat' => $b->getLatitudeBuild(),
                'lng' => $b->getLongitudeBuild(),
                'type' => $b->getBuildingType()->getName(),
                'level' => $b->getLevel(),
            ];
        }

        return $buildingData;
    }

    /**
     * @return array<string, float>
     */
    public function getProductionRatesByResourceForUser(User $user): array
    {
        $rows = $this->createQueryBuilder('b')
            ->select('bt.resourceType AS resourceType', 'SUM(COALESCE(b.level, 1) * COALESCE(bt.production_rate, 0)) AS productionRate')
            ->join('b.buildingType', 'bt')
            ->where('b.user = :user')
            ->andWhere('bt.resourceType IS NOT NULL')
            ->setParameter('user', $user)
            ->groupBy('bt.resourceType')
            ->getQuery()
            ->getArrayResult();

        $rates = [];

        foreach ($rows as $row) {
            $resourceType = $row['resourceType'] ?? null;

            if (!$resourceType) {
                continue;
            }

            $rates[$resourceType] = (float) ($row['productionRate'] ?? 0);
        }

        return $rates;
    }
}
