<?php

namespace App\Controller\Admin;

use App\Entity\FactionBuildingImage;
use Doctrine\ORM\EntityManagerInterface;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\Field;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\ImageField;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;
use Imagine\Image\ImagineInterface;

class FactionBuildingImageCrudController extends AbstractCrudController
{
    public const INDEX = 'index';
    public const BASE_PATH = 'assets/images/buildings';
    public const PUBLIC_DIR = 'assets/images/buildings';

    public function __construct(
        private SluggerInterface $slugger,
        private ImagineInterface $imagine
    ) {
    }

    public static function getEntityFqcn(): string
    {
        return FactionBuildingImage::class;
    }

    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityLabelInSingular('Image de bâtiment')
            ->setEntityLabelInPlural('Images de bâtiments')
            ->setPageTitle(Crud::PAGE_INDEX, 'Gestion des images');
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->onlyOnIndex(),

            AssociationField::new('faction')
                ->setLabel('Faction'),

            AssociationField::new('buildingType')
                ->setLabel('Type de bâtiment'),

            Field::new('imageFile')
                ->setLabel('Image')
                ->setFormType(FileType::class)
                ->onlyOnForms(),

            ImageField::new('imagePath')
                ->setBasePath(self::BASE_PATH)
                ->onlyOnIndex(),
        ];
    }

    public function persistEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $this->handleImageUpload($entityInstance);

        parent::persistEntity($entityManager, $entityInstance);
    }

    public function updateEntity(EntityManagerInterface $entityManager, $entityInstance): void
    {
        $this->handleImageUpload($entityInstance);

        parent::updateEntity($entityManager, $entityInstance);
    }

    private function handleImageUpload(FactionBuildingImage $entity): void
    {
        $imageFile = $entity->getImageFile();

        if (!$imageFile instanceof UploadedFile) {
            return;
        }

        $faction = $entity->getFaction();
        $buildingType = $entity->getBuildingType();

        if (!$faction || !$buildingType) {
            return;
        }

        /*
        |--------------------------------------------------------------------------
        | Nom dossier faction
        |--------------------------------------------------------------------------
        */

        $factionFolder = $this->slugger
            ->slug($faction->getCode())
            ->lower()
            ->toString();

        /*
        |--------------------------------------------------------------------------
        | Nom fichier bâtiment
        |--------------------------------------------------------------------------
        */

        $buildingName = strtolower($buildingType->getCode());

        $filename = match ($buildingName) {
            default => str_replace(
                '-',
                '_',
                $this->slugger
                    ->slug($buildingName)
                    ->lower()
                    ->toString()
            ),
        };

        $extension = $imageFile->guessExtension() ?: 'png';

        $newFilename = $filename . '.' . $extension;

        /*
        |--------------------------------------------------------------------------
        | Dossier final
        |--------------------------------------------------------------------------
        */

        $targetDirectory = sprintf(
            '%s/%s/%s',
            $this->getParameter('kernel.project_dir'),
            'public/' . self::PUBLIC_DIR,
            $factionFolder
        );

        /*
        |--------------------------------------------------------------------------
        | Création dossier
        |--------------------------------------------------------------------------
        */

        if (!is_dir($targetDirectory)) {
            mkdir($targetDirectory, 0777, true);
        }

        /*
        |--------------------------------------------------------------------------
        | Fichier temporaire
        |--------------------------------------------------------------------------
        */

        $tempFile = sys_get_temp_dir() . '/' . uniqid() . '.' . $extension;

        $imageFile->move(
            dirname($tempFile),
            basename($tempFile)
        );

        /*
        |--------------------------------------------------------------------------
        | Compression image
        |--------------------------------------------------------------------------
        */

        $finalPath = $targetDirectory . '/' . $newFilename;

        $this->compressImage(
            $tempFile,
            $finalPath
        );

        /*
        |--------------------------------------------------------------------------
        | Suppression temp
        |--------------------------------------------------------------------------
        */

        if (file_exists($tempFile)) {
            unlink($tempFile);
        }

        /*
        |--------------------------------------------------------------------------
        | Sauvegarde DB
        |--------------------------------------------------------------------------
        */

        $entity->setImagePath(
            $factionFolder . '/' . $newFilename
        );
    }

    private function compressImage(
        string $sourcePath,
        string $destinationPath,
        int $quality = 75
    ): void {
        $image = $this->imagine->open($sourcePath);

        $image->save($destinationPath, [
            'jpeg_quality' => $quality,
            'png_compression_level' => 9,
        ]);
    }
}