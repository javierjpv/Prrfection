<?php

namespace App\Controller\Admin;

use App\Entity\Mascotas;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class MascotasCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Mascotas::class;
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
