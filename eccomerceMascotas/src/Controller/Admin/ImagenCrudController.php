<?php

namespace App\Controller\Admin;

use App\Entity\Imagen;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ImagenCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Imagen::class;
    }

    //se configuran los campos
    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')
                ->onlyOnIndex(),
            IntegerField::new('imageSize')
                ->onlyOnIndex(),


            //Este se refiere a imaName que es el nombre de
            //  la imagen,por ello se usa setBasePath para de esa forma llegar  a la imagen y mostrarla en el index
            ImageField::new('imageName')
                ->setLabel('imageFiles')
                ->setBasePath('/images/products')
                ->onlyOnIndex(),

            //Solo se muestra en los formularios ya que solo alli sera necesario subir el archivo,
            //la visualizacion y la subida de imagenes van aparte
            //He tardado muchas horas arreglando un problema  al intentar integrar easyadminbundle con el bundle de las imagenes
            //Estuve poniendo este campo como ImageField pero eso era incorrecto ya que se debia poner de tipo Field
            //Y luego dev¡cir de que tipo es el formulario
            //Este se refiere a imageFile que es en concreto la propiedad del archivo
            Field::new('imageFile')
            ->setFormType(VichImageType::class)
            ->setRequired(false)
            ->onlyOnForms(),



            AssociationField::new('producto')
                ->setRequired(false)
                ->autocomplete()

            // debes crear 2 imageField,la razon
            // es porque uno sera para mostrarlo en el index con la
            //  ruta en la que se encuentra y el otro imageField se usara 
            //  en los formularios y solo servira para que los archivos
            //   sean subidos


        ];
    }
}
