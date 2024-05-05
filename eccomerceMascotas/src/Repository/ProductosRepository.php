<?php

namespace App\Repository;

use App\Entity\Productos;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Productos>
 *
 * @method Productos|null find($id, $lockMode = null, $lockVersion = null)
 * @method Productos|null findOneBy(array $criteria, array $orderBy = null)
 * @method Productos[]    findAll()
 * @method Productos[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProductosRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Productos::class);
    }

    //    /**
    //     * @return Productos[] Returns an array of Productos objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('p.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Productos
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
    public function findByFilters(array $filters): array
    {
        // Verificar si no hay filtros definidos
        if (empty($filters)) {
            // En este caso, devolver todos los productos sin aplicar ningún filtro
            return $this->findAll();
        }

        $queryBuilder = $this->createQueryBuilder('p');

        // Aplicar filtros dinámicamente según las claves y valores proporcionados
        foreach ($filters as $key => $value) {
            if ($value !== null) {
                // Añadir condiciones de filtrado según las claves y valores
                switch ($key) {
                    case 'categoria':
                        $queryBuilder
                            ->andWhere('p.categoria = :categoria') // Utiliza la relación categoria
                            ->setParameter('categoria', $value);
                        break;
                    case 'marca':
                        $queryBuilder
                            ->andWhere('p.marca = :marca') // Utiliza la relación marca
                            ->setParameter('marca', $value);
                        break;
                    case 'mascota':
                        $queryBuilder
                            ->innerJoin('p.productosMascotas', 'pm')
                            ->andWhere('pm.mascota = :mascota') // Utiliza la relación mascota
                            ->setParameter('mascota', $value);
                        break;
                    case 'orden':
                        //En el futuro podras ordenarlos por novedades y mejor valorados,pero debes aprenderlo
                        if ($value=='precioDesc') {
                            $queryBuilder->orderBy('p.precio', 'DESC');
                        }
                        elseif ($value=='precioAsc') {
                            $queryBuilder->orderBy('p.precio', 'ASC');
                        }
                        
                        break;
                        // Añadir más casos según los filtros que necesites
                }
            }
        }
       
        // Ejecutar la consulta y devolver los resultados
        return $queryBuilder->getQuery()->getResult();
    }
}
