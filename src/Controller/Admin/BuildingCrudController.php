<?php

namespace App\Controller\Admin;

use App\Entity\Building;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
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

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            NumberField::new('latitudeBuild'),
            NumberField::new('longitudeBuild'),
            IntegerField::new('level'),
            AssociationField::new('buildingType'),
            AssociationField::new('user'),
            AssociationField::new('game'),
            AssociationField::new('chunk'),
        ];
    }
}
