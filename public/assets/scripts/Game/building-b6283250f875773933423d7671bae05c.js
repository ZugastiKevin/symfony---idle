import L from '../LeafletWrapper.js';
import { getMap } from './map.js';
import { getBuildingCosts, upgradeBuilding, getUpgradeInfo } from './api.js';
import { getCurrentPlayerFaction } from './base.js';

// Cache des informations de bâtiments
let buildingMarkers = new Map();

// ID du joueur actif (initialisé depuis l'API)
let currentPlayerId = null;

/**
 * Définit l'ID du joueur actif
 * @param {number} id - L'ID du joueur connecté
 */
export function setCurrentPlayerId(id) {
    currentPlayerId = id;
}

/**
 * Charge les bâtiments sur la carte avec leurs popups interactifs
 * @param {Array} buildings - Liste des bâtiments à afficher
 */
export function loadBuildingsFromData(buildings) {
    const map = getMap();

    if (!map) {
        console.error("Map not initialized");
        return;
    }

    if (!buildings || !Array.isArray(buildings)) {
        console.warn("loadBuildingsFromData: invalid buildings data");
        return;
    }

    buildings.forEach(b => {
        // Ignorer les bases - elles sont gérées par base.js
        if (b.code === 'base' || b.type?.toLowerCase() === 'base') {
            return;
        }

        if (!Number.isFinite(b.lat) || !Number.isFinite(b.lng)) {
            console.warn("❌ Building ignoré (coord invalide)", b);
            return;
        }

        // Utiliser la faction du bâtiment (ou fallback sur la faction du joueur)
        const buildingFaction = b.faction || getCurrentPlayerFaction();

        // Créer l'icône avec l'image du bâtiment
        const icon = createBuildingIcon(b.code, buildingFaction);

        // Stocker les données du building pour accès ultérieur
        const buildingData = {
            id: b.id,
            type: b.type,
            level: b.level,
            code: b.code,
            faction: buildingFaction,
            ownerId: b.ownerId,
            production: b.production || null,
            resource_type: b.resource_type || null,
        };

        // Créer le marker avec popup statique (pas d'async)
        const marker = L.marker([b.lat, b.lng], { icon })
            .addTo(map)
            .bindPopup(createSimplePopup(buildingData));

        buildingMarkers.set(b.id, { marker, data: buildingData });

        // Charger les infos d'amélioration en arrière-plan
        if (b.id) {
            loadUpgradeInfoAsync(b.id, marker, buildingData);
        }
    });
}

/**
 * Vérifie si le bâtiment appartient au joueur actif
 */
function isOwnBuilding(building) {
    return building.ownerId === currentPlayerId;
}

/**
 * Crée un popup simple (synchrone)
 */
function createSimplePopup(building) {
    return `
        <div class="building-popup">
            <h3>${building.type || 'Bâtiment'}</h3>
        </div>
    `;
}

/**
 * Charge les infos d'amélioration en arrière-plan
 */
async function loadUpgradeInfoAsync(buildingId, marker, buildingData) {
    // Ne pas charger les infos d'amélioration pour les bâtiments ennemis
    if (!isOwnBuilding(buildingData)) {
        marker.setPopupContent(createSimplePopup(buildingData));
        return;
    }

    if (!buildingId) {
        marker.setPopupContent(createSimplePopup(buildingData));
        return;
    }

    try {
        const res = await getUpgradeInfo(buildingId);

        // Gérer les erreurs HTTP (403, 404, 500, etc.)
        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            console.warn(`Erreur API upgrade-info (building ${buildingId}):`, res.status, errorData.error || '');
            marker.setPopupContent(createSimplePopup(buildingData));
            return;
        }

        const upgradeInfo = await res.json();
        const canUpgrade = upgradeInfo?.canUpgrade ?? false;
        const maxLevel = upgradeInfo?.maxLevel ?? 1;
        const needed = upgradeInfo?.needed ?? {};
        const available = upgradeInfo?.available ?? {};

        // Conteneur HTMX pour tout le contenu du popup
        let popupContent = `
            <div id="building-popup-${buildingId}" style="min-height: 120px; min-width: 200px;">
                <p class="text-muted">Chargement...</p>
            </div>
        `;

        marker.setPopupContent(popupContent);

        // Fonction pour charger le contenu du popup complet
        const loadPopupContent = () => {
            fetch(`/api/buildings/${buildingId}/popup-content`)
                .then(response => response.text())
                .then(html => {
                    const container = document.getElementById(`building-popup-${buildingId}`);
                    if (container) {
                        container.innerHTML = html;
                    }
                })
                .catch(err => console.warn('Erreur chargement popup:', err));
        };

        // Charger le contenu initialement
        loadPopupContent();

        // Stocker les données pour le timer JS (pas de polling automatique)
        buildingMarkers.set(buildingId, { marker, data: buildingData, pollInterval: null });
    } catch (e) {
        console.error("Erreur lors de la récupération des infos d'amélioration", e);
        marker.setPopupContent(createSimplePopup(buildingData));
    }
}

/**
 * Charge les bâtiments depuis l'API (fonction de compatibilité)
 * @deprecated Utiliser loadBuildingsFromData(data) à la place
 */
export function loadBuildings() {
    fetch('/api/map-data')
        .then(res => res.json())
        .then(data => {
            loadBuildingsFromData(data);
        })
        .catch(err => {
            console.error("Erreur chargement bâtiments", err);
        });
}

/**
 * Crée une icône (marker) pour un bâtiment avec son image spécifique.
 * @param {string} buildingCode - Le code du bâtiment (ex: "base", "iron_mine").
 * @param {string} faction - La faction du bâtiment (optionnel, fallback sur le joueur actuel).
 * @returns {L.Icon} L'icône Leaflet personnalisée.
 */
export function createBuildingIcon(buildingCode, faction = null) {
    const actualFaction = faction || getCurrentPlayerFaction();
    const size = 70; // Taille par défaut des icônes

    return L.icon({
        iconUrl: getBuildingImage(actualFaction, buildingCode),
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -size / 2]
    });
}

/**
 * Retourne dynamiquement le chemin de l'image avec fallback vers default.
 * @param {string} faction - Le code ou nom de la faction (ex: "Empire", "Cendres").
 * @param {string} building - Le code du bâtiment (ex: "base", "iron_mine").
 * @returns {string} Le chemin de l'icône.
 */
export function getBuildingImage(faction, building) {
    // Normaliser le nom du building pour l'image (remplacer espaces et caractères spéciaux)
    const buildingSlug = building.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
    const factionSlug = (faction || 'default').toLowerCase();

    // Toujours utiliser l'icône de la faction en premier
    // Le serveur ou le navigateur gérera le fallback si l'icône n'existe pas
    // Si la faction est 'default', utiliser l'icône default directement
    if (factionSlug === 'default') {
        return `/assets/images/buildings/default/${buildingSlug}.png`;
    }

    return `/assets/images/buildings/${factionSlug}/${buildingSlug}.png`;
}

/**
 * Améliore un bâtiment
 */
window.upgradeBuilding = async function(buildingId) {
    try {
        const response = await upgradeBuilding(buildingId);
        const data = await response.json();

        if (response.ok) {
            // Mettre à jour le marqueur
            const entry = buildingMarkers.get(buildingId);
            if (entry) {
                entry.data.level = data.newLevel;
                const marker = entry.marker;
                marker.setPopupContent(createSimplePopup(entry.data));

                // Recharger les infos d'amélioration
                loadUpgradeInfoAsync(buildingId, marker, entry.data);
            }
            alert('Bâtiment amélioré avec succès !');
        } else {
            alert("Erreur: " + (data.error || "Impossible d'améliorer le bâtiment"));
        }
    } catch (e) {
        console.error("Erreur lors de l'amélioration", e);
        alert("Erreur réseau lors de l'amélioration");
    }
};

/**
 * Retourne les informations sur les coûts de construction d'un type de bâtiment
 */
export async function getBuildingTypeCosts(buildingTypeId) {
    try {
        const response = await getBuildingCosts(buildingTypeId);
        return await response.json();
    } catch (e) {
        console.error("Erreur lors de la récupération des coûts", e);
        return null;
    }
}

/**
 * Vérifie si le joueur peut construire un bâtiment
 */
export async function canBuildBuilding(buildingTypeId) {
    const costs = await getBuildingTypeCosts(buildingTypeId);
    if (!costs) return false;

    const response = await fetch('/api/player-resources');
    const data = await response.json();

    const resources = {};
    data.resources.forEach(r => {
        resources[r.type] = r.quantity;
    });

    for (const [resource, amount] of Object.entries(costs.costs)) {
        if ((resources[resource] || 0) < amount) {
            return false;
        }
    }

    return true;
}