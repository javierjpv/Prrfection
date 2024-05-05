<?php

namespace App\Controller\Admin;

use App\Entity\Marcas;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class MarcasCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Marcas::class;
    }

    //Se configuran los campos
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
            ->onlyOnIndex(),
            TextField::new('nombre'),
            
        ];
    }
    
}
