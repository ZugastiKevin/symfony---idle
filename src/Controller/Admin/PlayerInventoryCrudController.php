<?php

namespace App\Controller\Admin;

use App\Entity\PlayerInventory;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;

class PlayerInventoryCrudController extends AbstractCrudController
{
    public const INDEX = 'index';
    
    public static function getEntityFqcn(): string
    {
        return PlayerInventory::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Inventaire')
            ->setEntityLabelInPlural('Inventaires')
            ->setPageTitle(Crud::PAGE_INDEX, 'Gestion des inventaires')
            ->setDefaultSort(['updatedAt' => 'DESC']);
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            AssociationField::new('player', 'Joueur')->setRequired(true),
            AssociationField::new('resourceType', 'Ressource')->setRequired(true),
            IntegerField::new('quantity', 'Quantité'),
            DateTimeField::new('updatedAt', 'Dernière mise à jour')->hideOnForm(),
        ];
    }
}