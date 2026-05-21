<?php

namespace App\Form;

use App\Entity\Faction;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FactionType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('factions', EntityType::class, [
                'label' => false,
                'class' => Faction::class,
                'choice_label' => 'name',
                'choice_attr' => function (Faction $faction) {
                    return [
                        'data-description' => $faction->getDescription(),
                    ];
                },
                'expanded' => true,
                'multiple' => false,
                'required' => true,
                'mapped' => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
}