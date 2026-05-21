<?php

namespace App\Controller\Admin;

use App\Entity\BuildingType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class BuildingTypeCrudController extends AbstractCrudController
{
    public const INDEX = 'index';

    public static function getEntityFqcn(): string
    {
        return BuildingType::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Type de Bâtiment')
            ->setEntityLabelInPlural('Types de Bâtiments')
            ->setPageTitle(Crud::PAGE_INDEX, 'Gestion des types de bâtiments');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('name')->setLabel('Nom'),
            IntegerField::new('base_cost')->setLabel('Coût de base'),
            IntegerField::new('production_rate')->setLabel('Taux de production'),
            IntegerField::new('max_level')->setLabel('Niveau Max'),
        ];
    }
}