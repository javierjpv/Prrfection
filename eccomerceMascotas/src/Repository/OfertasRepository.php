<?php

namespace App\Repository;

use App\Entity\Ofertas;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Ofertas>
 *
 * @method Ofertas|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ofertas|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ofertas[]    findAll()
 * @method Ofertas[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OfertasRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Ofertas::class);
    }

//    /**
//     * @return Ofertas[] Returns an array of Ofertas objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('o.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Ofertas
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
