# Liste des fichiers jamais utilisés dans le code

## Frontend JavaScript

### Fichiers JavaScript inutilisés

| Chemin | Status | Détails |
|--------|--------|---------|
| `assets/scripts/Game/buildings.js` | **INUTILISÉ** | Ce fichier existe mais n'est jamais importé. Le code est dupliqué dans `building.js` qui est utilisé. |
| `assets/scripts/Game/Utils/admin_clipboard.js` | **INUTILISÉ** | Importé par `base.js` mais fonctionne uniquement pour debug admin |

## Backend PHP

### Contrôleurs inutilisés

| Fichier | Status | Détails |
|---------|--------|---------|
| `src/Controller/Admin/DashboardController.php` | **INUTILISÉ** | Contrôleur admin non utilisé |
| `src/Controller/Admin/UserCrudController.php` | **INUTILISÉ** | CRUD non configuré ou non utilisé |
| `src/Controller/Admin/PlayerInventoryCrudController.php` | **INUTILISÉ** | Vu dans git status, probablement inutilisé |
| `src/Controller/Admin/BuildingCostCrudController.php` | **INUTILISÉ** | CRUD non utilisé |
| `src/Controller/Admin/BuildingTypeCrudController.php` | **INUTILISÉ** | CRUD non utilisé |
| `src/Controller/Admin/FactionCrudController.php` | **INUTILISÉ** | CRUD non utilisé |
| `src/Controller/Admin/FactionBuildingImageCrudController.php` | **INUTILISÉ** | CRUD non utilisé |

## Images

### Images supprimées ou manquantes

| Fichier | Status | Détails |
|---------|--------|---------|
| `public/assets/images/buildings/cendres/water_pump.png` | **SUPPRIMÉ** | Supprimé (git status) |
| `public/assets/images/buildings/default/water_pump.png` | **SUPPRIMÉ** | Supprimé (git status) |
| `public/assets/images/buildings/empire/water_pump.png` | **SUPPRIMÉ** | Supprimé (git status) |
| `public/assets/images/buildings/nomades/water_pump.png` | **SUPPRIMÉ** | Supprimé (git status) |

### Images potentiellement inutilisées

| Fichier | Status | Détails |
|---------|--------|---------|
| `public/assets/images/buildings/default/pump_station.png` | **INUTILISÉ ?** | À vérifier si BuildingType "pump_station" existe |
| `public/assets/images/buildings/default/image.png` | **INUTILISÉ ?** | Image générique, à vérifier |

## Autres fichiers

| Fichier | Status | Détails |
|---------|--------|---------|
| `public/test.txt` | **INUTILISÉ** | Fichier de test, à supprimer |
| `migrations/Version20260529130311.php` | **INUTILISÉ** | Migration non exécutée ou non nécessaire |

---

## Fichiers utilisés (avec liens de dépendance)

### JavaScript

```
assets/app.js
├── assets/styles/app.scss
├── assets/scripts/Layout/dropdown.js
├── assets/scripts/Layout/switch_layout.js
├── assets/scripts/Security/form.js
├── assets/scripts/Security/remember_me.js
└── assets/scripts/Security/reset-btn.js

assets/scripts/Game/game-main.js (Point d'entrée game)
├── assets/scripts/Game/map.js
│   ├── assets/scripts/LeafletWrapper.js
│   ├── assets/scripts/Game/Config/debug.js
│   │   ├── assets/scripts/Game/Config/typeMap.js
│   │   └── assets/scripts/Game/Config/debug.js (exports)
│   ├── assets/scripts/Game/Layers/gridLayer.js
│   │   ├── assets/scripts/LeafletWrapper.js
│   │   ├── assets/scripts/Game/Config/debug.js
│   │   ├── assets/scripts/Game/Config/chunk.js
│   │   └── assets/scripts/Game/map.js (cycle)
│   ├── assets/scripts/Game/Roads/roads.js
│   │   ├── assets/scripts/Game/map.js
│   │   ├── assets/scripts/Game/Config/chunk.js
│   │   ├── assets/scripts/Game/Layers/gridLayer.js
│   │   ├── assets/scripts/Game/Roads/invalidateChunk.js
│   │   │   └── assets/scripts/Game/Roads/roadsState.js
│   │   ├── assets/scripts/Game/Config/debug.js
│   │   ├── assets/scripts/Game/Roads/roadsState.js
│   │   ├── assets/scripts/Game/Map/deposits.js
│   │   └── assets/scripts/Game/Config/cacheUtils.js
│   ├── assets/scripts/Game/Roads/roadsState.js
│   ├── assets/scripts/Game/Map/deposits.js
│   └── assets/scripts/Game/Layers/gridLayer.js
├── assets/scripts/Game/gps.js
│   └── assets/scripts/Game/map.js
├── assets/scripts/Game/base.js
│   ├── assets/scripts/LeafletWrapper.js
│   ├── assets/scripts/Game/map.js
│   ├── assets/scripts/Game/Roads/roadsState.js
│   ├── assets/scripts/Game/building.js
│   ├── assets/scripts/Game/Config/chunk.js
│   ├── assets/scripts/Game/Roads/roads.js
│   ├── assets/scripts/Game/Roads/roadUtils.js
│   ├── assets/scripts/Game/UI/notification.js
│   └── assets/scripts/Game/Utils/admin_clipboard.js
├── assets/scripts/Game/buildMode.js
│   ├── assets/scripts/LeafletWrapper.js
│   ├── assets/scripts/Game/map.js
│   ├── assets/scripts/Game/api.js
│   ├── assets/scripts/Game/building.js
│   └── assets/scripts/Game/UI/notification.js
└── assets/scripts/Game/building.js
    ├── assets/scripts/LeafletWrapper.js
    ├── assets/scripts/Game/map.js
    ├── assets/scripts/Game/api.js
    └── assets/scripts/Game/base.js
```

### PHP (Backend)

```
src/Controller/GameController.php
├── src/Entity/User.php
├── src/Form/FactionChoiceType.php
├── src/Repository/BuildingRepository.php
├── src/Repository/BuildingTypeRepository.php
└── src/Service/PlayerInventoryInitializer.php

src/Controller/Api/GameApiController.php
├── src/Entity/Building.php
├── src/Entity/BuildingType.php
├── src/Entity/Game.php
├── src/Entity/User.php
├── src/Repository/BuildingRepository.php
├── src/Repository/BuildingTypeRepository.php
├── src/Repository/ChunkRepository.php
├── src/Repository/ResourceDepositRepository.php
├── src/Repository/RoadRepository.php
├── src/Service/ResourceProductionService.php
├── src/Service/BuildingService.php
├── src/Service/CoordinateService.php
└── src/Service/EnemyBaseService.php
```

---

## Recommandations

1. **Supprimer** `assets/scripts/Game/buildings.js` (doublon)
2. **Corriger** le chemin d'import dans `admin_clipboard.js` (`Ui` → `UI`)
3. **Corriger** l'import dans `deposits.js` (ajouter `.js`)
4. **Supprimer** les fichiers marqués comme supprimés dans git status
5. **Vérifier** les CRUD controllers inutilisés et les supprimer si non nécessaires