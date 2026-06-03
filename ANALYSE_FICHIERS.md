# Analyse des fichiers inutilisés et arborescence des dépendances

## Fichiers inutilisés (jamais importés ou utilisés)

### Frontend JavaScript

| Fichier | Raison |
|---------|--------|
| `assets/scripts/Game/buildings.js` | Doublon de `building.js` - importé par `game-main.js` mais le code est dupliqué dans `building.js` |
| `assets/scripts/Game/Utils/admin_clipboard.js` | Importé dans `base.js` mais la fonction `getAdminCoords` n'est utilisée que pour un debug admin |

### Images

| Fichier | Raison |
|---------|--------|
| `public/assets/images/buildings/default/water_pump.png` | Supprimé (n'existe plus) |
| `public/assets/images/buildings/empire/water_pump.png` | Nom incorrect - devrait être `pump_station` |
| `public/assets/images/buildings/nomades/water_pump.png` | Nom incorrect - devrait être `pump_station` |
| `public/assets/images/buildings/cendres/water_pump.png` | Nom incorrect - devrait être `pump_station` |
| `public/assets/images/buildings/default/pump_station.png` | Peut-être inutilisé selon les BuildingTypes |

### Autres

| Fichier | Raison |
|---------|--------|
| `public/test.txt` | Fichier de test, probablement inutile |
| `src/Controller/Admin/PlayerInventoryCrudController.php` | CRUD non utilisé (vu dans git status) |
| `src/Controller/Admin/BuildingCostCrudController.php` | Contrôleur CRUD non utilisé |
| `src/Controller/Admin/BuildingTypeCrudController.php` | Contrôleur CRUD non utilisé |
| `src/Controller/Admin/FactionBuildingImageCrudController.php` | Contrôleur CRUD non utilisé |
| `src/Controller/Admin/FactionCrudController.php` | Contrôleur CRUD non utilisé |
| `src/Controller/Admin/UserCrudController.php` | Contrôleur CRUD non utilisé |
| `src/Controller/Admin/DashboardController.php` | Contrôleur non utilisé |

---

## Arborescence des fichiers utilisés

### Point d'entrée principal
```
game-main.js
├── map.js
├── gps.js
├── base.js
├── building.js
└── buildMode.js
```

### Dépendances détaillées

#### `game-main.js` (Point d'entrée)
```
game-main.js
├── map.js
│   ├── LeafletWrapper.js
│   ├── Config/debug.js
│   │   ├── Config/typeMap.js
│   │   └── Config/debug.js (exports DEBUG object)
│   ├── Layers/gridLayer.js
│   │   ├── LeafletWrapper.js
│   │   ├── Config/debug.js
│   │   ├── Config/chunk.js
│   │   └── map.js (cycle: getMap, isGridLayerActive)
│   ├── Roads/roads.js
│   │   ├── map.js
│   │   ├── Config/chunk.js
│   │   ├── Layers/gridLayer.js (setChunkColor)
│   │   ├── Roads/invalidateChunk.js
│   │   │   └── Roads/roadsState.js
│   │   ├── Config/debug.js
│   │   ├── Roads/roadsState.js
│   │   ├── Map/deposits.js
│   │   │   ├── LeafletWrapper.js (sans extension .js)
│   │   │   └── Map/deposits.js (exports)
│   │   └── Config/cacheUtils.js
│   ├── Roads/roadsState.js
│   ├── Map/deposits.js
│   │   └── Map/deposits.js (exports)
│   └── Layers/gridLayer.js
├── gps.js
│   └── map.js (flyTo)
├── base.js
│   ├── LeafletWrapper.js
│   ├── map.js (flyTo, getMap)
│   ├── Roads/roadsState.js (roadsState, getAllLoadedRoads)
│   ├── building.js (getBuildingImage)
│   ├── Config/chunk.js (CHUNK_SIZE)
│   ├── Roads/roads.js (safeLoadChunk, loadVisibleRoadChunks)
│   ├── Roads/roadUtils.js (findClosestPointOnRoad, findClosestSegment)
│   ├── UI/notification.js (showNotification)
│   └── Utils/admin_clipboard.js (getAdminCoords)
│       └── UI/notification.js (showNotification - chemin incorrect 'Ui' vs 'UI')
├── buildMode.js
│   ├── LeafletWrapper.js
│   ├── map.js (getMap)
│   ├── api.js (getBuildingCosts, buildRequest)
│   ├── building.js (getBuildingImage)
│   └── UI/notification.js (showNotification)
└── building.js
    ├── LeafletWrapper.js
    ├── map.js (getMap)
    ├── api.js (getBuildings)
    └── base.js (getCurrentPlayerFaction)
```

#### `api.js` (Utilisé par plusieurs modules)
```
api.js
├── buildings.js (getBuildingCosts, upgradeBuilding, getUpgradeInfo)
└── buildMode.js (getBuildingCosts, buildRequest)
```

#### `Config/chunk.js`
```
Config/chunk.js
├── map.js (getMap)
├── Roads/roads.js (refreshChunk)
├── Roads/invalidateChunk.js
├── Config/debug.js (debugLog, debugError)
└── Utils/snap.js (snapToChunk)
```

---

## Notes importantes

### Problèmes de casse
- `assets/scripts/Game/Utils/admin_clipboard.js` importe `../Ui/notification.js` mais le dossier s'appelle `UI` (majuscule)
- `assets/scripts/Game/Map/deposits.js` importe `../../LeafletWrapper` sans extension `.js`

### Fichiers potentiellement inutiles à vérifier
- `assets/styles/components/_resources.scss` - à vérifier si utilisé
- `templates/game_api/index.html.twig` - à vérifier si cette route est utilisée
- `public/assets/images/resources/` - dossier potentiellement inutilisé

### Structure des images
```
public/assets/images/buildings/
├── default/
│   ├── base.png ✓
│   ├── iron_mine.png ✓
│   ├── image.png (générique ?)
│   └── pump_station.png (inutilisé ?)
├── empire/
│   ├── base.png ✓
│   ├── iron_mine.png ✓
│   └── pump_station.png ✓
├── cendres/
│   ├── base.png ✓
│   ├── iron_mine.png ✓
│   └── pump_station.png ✓
└── nomades/
    ├── base.png ✓
    ├── iron_mine.png ✓
    └── pump_station.png ✓
```