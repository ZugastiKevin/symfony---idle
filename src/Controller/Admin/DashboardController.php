<?php

namespace App\Controller\Admin;

use App\Controller\Admin\BuildingCrudController;
use App\Controller\Admin\BuildingTypeCrudController;
use App\Controller\Admin\FactionBuildingImageCrudController;
use App\Controller\Admin\GameCrudController;
use App\Controller\Admin\PlayerInventoryCrudController;
use App\Controller\Admin\UserCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Attribute\AdminDashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Attribute\IsGranted;

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
            ->setTitle('<a href="' . $this->generateUrl('home') . '">Iron Front</a>');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa fa-home');
        yield MenuItem::linkToRoute('Aller au Jeu', 'fas fa-gamepad', 'game');

        yield MenuItem::section('Gestion Utilisateurs');
        yield MenuItem::linkTo(GameCrudController::class, 'Gestion des session de jeux ', 'fas fa-game')->setAction(GameCrudController::INDEX);
        yield MenuItem::linkTo(UserCrudController::class, 'Gestion des utilisateurs ', 'fas fa-users')->setAction(UserCrudController::INDEX);
        yield MenuItem::linkTo(PlayerInventoryCrudController::class, 'Inventaires des joueurs', 'fas fa-backpack')->setAction(PlayerInventoryCrudController::INDEX);
        yield MenuItem::linkTo(BuildingCrudController::class, 'Gestion des bâtiments ', 'fas fa-building')->setAction(BuildingCrudController::INDEX);

        yield MenuItem::section('Gestion Jeu');
        yield MenuItem::linkTo(FactionCrudController::class, 'Gestion des factions', 'fas fa-shield')->setAction(FactionCrudController::INDEX);
        yield MenuItem::linkTo(BuildingTypeCrudController::class, 'Gestion des types de bâtiments', 'fas fa-layer-group')->setAction(BuildingTypeCrudController::INDEX);
        yield MenuItem::linkTo(FactionBuildingImageCrudController::class, 'Gestion des images', 'fas fa-image')->setAction(FactionBuildingImageCrudController::INDEX);
        yield MenuItem::linkTo(ResourceTypeCrudController::class, 'Gestion des types de ressources', 'fas fa-gem')->setAction(ResourceTypeCrudController::INDEX);
    }
}