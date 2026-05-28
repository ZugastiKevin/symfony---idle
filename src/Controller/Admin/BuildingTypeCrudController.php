<?php

namespace App\Controller\Admin;

use App\Entity\BuildingType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\CollectionField;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
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
            textField::new('code')->setLabel('Code')->setHelp('Un code unique utilisé pour identifier le type de bâtiment dans le code.'),
            CollectionField::new('costs')
                ->setLabel('Coûts de construction')
                ->useEntryCrudForm(BuildingCostCrudController::class)
                ->renderExpanded(false)
                ->setEntryIsComplex(true)
                ->allowAdd()
                ->allowDelete()
                ->setRequired(false)
                ->setFormTypeOption('by_reference', false)
                ->setHelp('Cliquez pour gérer les ressources nécessaires.')
                ->formatValue(function ($value, $entity) {
                    $costs = $entity->getCosts();
                    if ($costs->isEmpty()) {
                        return 'Aucun coût';
                    }
                    
                    $summary = [];
                    foreach ($costs as $cost) {
                        $summary[] = $cost->getCosts() . ' ' . $cost->getResourceType()->getLabel();
                    }
                    
                    return implode(', ', $summary);
                }),
            IntegerField::new('production_rate')->setLabel('Taux de production'),
            AssociationField::new('resourceType')->setLabel('Type de ressource'),
            IntegerField::new('max_level')->setLabel('Niveau Max'),
        ];
    }
}