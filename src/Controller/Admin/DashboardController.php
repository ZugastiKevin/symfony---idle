<?php

namespace App\Controller\Admin;

use App\Controller\Admin\UserCrudController;
use App\Controller\Admin\BuildingCrudController;
use App\Controller\Admin\FactionCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use Symfony\Component\Security\Http\Attribute\IsGranted;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use Symfony\Component\HttpFoundation\Response;

#[IsGranted('ROLE_ADMIN')]
#[AdminDashboard(routePath: '/admin', routeName: 'admin')]
class DashboardController extends AbstractDashboardController
{
    public function index(): Response
    {
        return $this->render('admin/index.html.twig', [
            'user' => $this->getUser(),
        ]);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('<a href="' . $this->generateUrl('home') . '">Symfony Idle</a>');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToCrud('Factions', 'fas fa-shield', FactionCrudController::getEntityFqcn());
        yield MenuItem::linkToCrud('Users', 'fas fa-users', UserCrudController::getEntityFqcn());
        yield MenuItem::linkToCrud('Buildings', 'fas fa-building', BuildingCrudController::getEntityFqcn());
    }
}