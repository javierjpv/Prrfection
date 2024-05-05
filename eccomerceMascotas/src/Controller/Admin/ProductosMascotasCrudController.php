<?php

namespace App\Controller\Admin;

use App\Entity\ProductosMascotas;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ProductosMascotasCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return ProductosMascotas::class;
    }

//Se configuran los campos
    public function configureFields(string $pageName): iterable
    {
        return [
            // Otros campos existentes...
            IdField::new('id')
            ->onlyOnIndex(),
            AssociationField::new('producto')
                ->setRequired(true)
                ->autocomplete(),
            AssociationField::new('mascota')
                ->setRequired(true)
                ->autocomplete(),
         




        ];
    }
}
