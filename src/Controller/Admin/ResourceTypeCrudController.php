<?php

namespace App\Controller\Admin;

use App\Entity\ResourceType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;

class ResourceTypeCrudController extends AbstractCrudController
{
    public const INDEX = 'index';

    public static function getEntityFqcn(): string
    {
        return ResourceType::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Type de Ressource')
            ->setEntityLabelInPlural('Types de Ressources')
            ->setPageTitle(Crud::PAGE_INDEX, 'Gestion des types de ressources');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),
            TextField::new('label')->setLabel('Nom'),
            TextField::new('code')->setLabel('Code')->setHelp('Un code unique utilisé pour identifier le type de ressource dans le code.'),
            TextField::new('color')->setLabel('Couleur')->setHelp('La couleur associée au type de ressource.'),
        ];
    }
}
