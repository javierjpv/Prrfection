<?php

namespace App\Controller\Admin;

use App\Entity\Categorias;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class CategoriasCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Categorias::class;
    }


    //se configuran los campos
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
            ->onlyOnIndex(),
            TextField::new('nombre'),
           
        ];
    }
    
}
