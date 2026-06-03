<?php

namespace App\Controller\Admin;

use App\Entity\Game;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;

class GameCrudController extends AbstractCrudController
{
    public const INDEX = 'index';

    public static function getEntityFqcn(): string
    {
        return Game::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Jeu')
            ->setEntityLabelInPlural('Jeux')
            ->setPageTitle(Crud::PAGE_INDEX, 'Gestion des jeux');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('name')->setLabel('Nom de la partie'),
            TextEditorField::new('description')->setLabel('Description')->setRequired(false),
            BooleanField::new('is_active')->setLabel('Partie active')->setHelp('Indique si cette partie est actuellement active.'),
            DateTimeField::new('started_at')->setLabel('Démarrée le')->setFormat('dd/MM/yyyy HH:mm'),
            DateTimeField::new('ended_at')->setLabel('Terminée le')->setRequired(false),
            AssociationField::new('users')->setLabel('Joueurs')->hideOnForm(),
            AssociationField::new('buildings')->setLabel('Bâtiments')->hideOnForm(),
        ];
    }
}