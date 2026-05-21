<?php

namespace App\Controller\Admin;

use App\Controller\Admin\UserCrudController;
use App\Controller\Admin\BuildingCrudController;
use App\Controller\Admin\BuildingTypeCrudController;
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
        yield MenuItem::linkTo(FactionCrudController::class, 'Factions', 'fas fa-shield')->setAction(FactionCrudController::INDEX);
        yield MenuItem::linkTo(UserCrudController::class, 'Users', 'fas fa-users')->setAction(UserCrudController::INDEX);
        yield MenuItem::linkTo(BuildingCrudController::class, 'Buildings', 'fas fa-building')->setAction(BuildingCrudController::INDEX);
        yield MenuItem::linkTo(BuildingTypeCrudController::class, 'Types', 'fas fa-layer-group')->setAction(BuildingTypeCrudController::INDEX);
    }
}