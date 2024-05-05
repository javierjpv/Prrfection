<?php

namespace App\Controller\Admin;

use App\Controller\ProductosMascotasController;
use App\Entity\Categorias;
use App\Entity\DetallePedido;
use App\Entity\Envios;
use App\Entity\Imagen;
use App\Entity\Marcas;
use App\Entity\Mascotas;
use App\Entity\MetodosDePago;
use App\Entity\Pedidos;
use App\Entity\Productos;
use App\Entity\ProductosMascotas;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    //Antes de usar esta ruta debes haber llamado a /login para hacer el login y si ese login es exitoso se te traera a esta ruta automaticamente,
    //siempre que tengas los permisos necesarios
    //Esta ruta la prodra usar un usuario con permisos de administrador ,
    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {
        //return parent::index();

        // Option 1. You can make your dashboard redirect to some common page of your backend
        //
        // $adminUrlGenerator = $this->container->get(AdminUrlGenerator::class);
        // return $this->redirect($adminUrlGenerator->setController(OneOfYourCrudController::class)->generateUrl());

        // Option 2. You can make your dashboard redirect to different pages depending on the user
        //
        // if ('jane' === $this->getUser()->getUsername()) {
        //     return $this->redirect('...');
        // }

        // Option 3. You can render some custom template to display a proper dashboard with widgets, etc.
        // (tip: it's easier if your template extends from @EasyAdmin/page/content.html.twig)
        //

        //Renderizo mi plantilla 
        return $this->render('admin/my_dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('EccomerceMascotas');
    }

    public function configureMenuItems(): iterable
    {
        //Aqui se añaden los menus que aparecen en la parte izquierda del panel de administracion
        //Antes de poder crear los menus de cada entidad lo que se debe hacer es crear controladores para cada
        //entidad que extiendan de abstractCrudConller. Una vez echo esto se podran crear los menus divididos por entidades
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Usuarios', 'fas fa-list', User::class);
        yield MenuItem::linkToCrud('Categorias', 'fas fa-list', Categorias::class);
        yield MenuItem::linkToCrud('Envios', 'fas fa-list', Envios::class);
        yield MenuItem::linkToCrud('Imagenes', 'fas fa-list', Imagen::class);
        yield MenuItem::linkToCrud('Marcas', 'fas fa-list', Marcas::class);
        yield MenuItem::linkToCrud('Metodos de pago', 'fas fa-list', MetodosDePago::class);
        yield MenuItem::linkToCrud('Pedidos', 'fas fa-list', Pedidos::class);
        yield MenuItem::linkToCrud('Productos', 'fas fa-list', Productos::class);
        yield MenuItem::linkToCrud('Mascotas', 'fas fa-list', Mascotas::class);
        yield MenuItem::linkToCrud('ProductosMascotas', 'fas fa-list', ProductosMascotas::class);
        yield MenuItem::linkToCrud('Detalle Pedidos', 'fas fa-list', DetallePedido::class);
        

    }
}
