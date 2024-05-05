<?php

namespace App\Controller\Admin;

use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class UserCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return User::class;
    }


    //se configuran los campos
    public function configureFields(string $pageName): iterable
    {
        return [
            // Otros campos existentes...
            TextField::new('email'),
            // TextField::new('password'),
            ArrayField::new('roles'),
            // Otros campos existentes...
        ];
    }
    
}
