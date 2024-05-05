<?php

namespace App\Repository;

use App\Entity\Envios;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Envios>
 *
 * @method Envios|null find($id, $lockMode = null, $lockVersion = null)
 * @method Envios|null findOneBy(array $criteria, array $orderBy = null)
 * @method Envios[]    findAll()
 * @method Envios[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EnviosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Envios::class);
    }

//    /**
//     * @return Envios[] Returns an array of Envios objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Envios
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
