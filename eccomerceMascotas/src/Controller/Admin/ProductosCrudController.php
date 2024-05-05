<?php

namespace App\Controller\Admin;

use App\Entity\Marcas;
use App\Entity\Productos;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\ArrayField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ChoiceField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ProductosCrudController extends AbstractCrudController
{


    public static function getEntityFqcn(): string
    {
        return Productos::class;
    }

    //Se configuran los campos
    public function configureFields(string $pageName): iterable
    {
        return [
            // Otros campos existentes...
            IdField::new('id')
            ->onlyOnIndex(),
            TextField::new('nombre'),
            TextField::new('descripcion'),
            IntegerField::new('precio'),
            IntegerField::new('stock'),
            AssociationField::new('marca')
                ->setRequired(true)
                ->autocomplete(),
            AssociationField::new('categoria')
                ->setRequired(true)
                ->autocomplete(),
         



        // //como cada producto tiene varias imagenes esto seria complicado
        // //Este se refiere a imaName que es el nombre de
        // //  la imagen,por ello se usa setBasePath para de esa forma llegar  a la imagen y mostrarla en el index
        // ImageField::new('imageName')
        //     ->setLabel('imageFiles')
        //     ->setBasePath('/images/products')
        //     ->onlyOnIndex()
        




        ];
    }



}
