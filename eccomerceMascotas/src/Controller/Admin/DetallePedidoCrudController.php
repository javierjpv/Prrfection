<?php

namespace App\Controller\Admin;

use App\Entity\DetallePedido;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class DetallePedidoCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return DetallePedido::class;
    }

    /*
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id'),
            TextField::new('title'),
            TextEditorField::new('description'),
        ];
    }
    */
    //Se configuran los campos
    public function configureFields(string $pageName): iterable
    {
        return [
            // Otros campos existentes...
            IdField::new('id')
            ->onlyOnIndex(),
            AssociationField::new('pedido')
                ->setRequired(true)
                ->autocomplete(),
            AssociationField::new('producto')
                ->setRequired(true)
                ->autocomplete(),
                IntegerField::new('cantidad'),
                IntegerField::new('precioUnitario'),
         




        ];
    }
}
