<?php

namespace App\Controller\Admin;

use App\Entity\Building;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\NumberField;

class BuildingCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Building::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Bâtiment')
            ->setEntityLabelInPlural('Bâtiments')
            ->setPageTitle(Crud::PAGE_INDEX, 'Gestion des bâtiments');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            NumberField::new('latitudeBuild')->setLabel('Latitude'),
            NumberField::new('longitudeBuild')->setLabel('Longitude'),
            IntegerField::new('level')->setLabel('Niveau'),
            AssociationField::new('buildingType')->setLabel('Type'),
            AssociationField::new('user')->setLabel('Utilisateur'),
            AssociationField::new('game')->setLabel('Jeu'),
            AssociationField::new('chunk')->setLabel('Chunk'),
        ];
    }
}
