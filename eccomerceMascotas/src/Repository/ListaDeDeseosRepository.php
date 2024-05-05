<?php

namespace App\Repository;

use App\Entity\ListaDeDeseos;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ListaDeDeseos>
 *
 * @method ListaDeDeseos|null find($id, $lockMode = null, $lockVersion = null)
 * @method ListaDeDeseos|null findOneBy(array $criteria, array $orderBy = null)
 * @method ListaDeDeseos[]    findAll()
 * @method ListaDeDeseos[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ListaDeDeseosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ListaDeDeseos::class);
    }

//    /**
//     * @return ListaDeDeseos[] Returns an array of ListaDeDeseos objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('l.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ListaDeDeseos
//    {
//        return $this->createQueryBuilder('l')
//            ->andWhere('l.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
