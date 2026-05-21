<?php

namespace App\Controller\Admin;

use App\Entity\Faction;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextEditorField;

class FactionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Faction::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            TextField::new('name')->setLabel('Nom'),
            TextField::new('code')->setLabel('Code')->setHelp('Identifiant unique pour la faction'),
            TextEditorField::new('description')->setLabel('Description')->hideOnIndex(),
        ];
    }
}
