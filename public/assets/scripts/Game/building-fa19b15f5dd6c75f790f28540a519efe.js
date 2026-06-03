import L from '../LeafletWrapper.js';
import { getMap } from './map.js';
import { getBuildingCosts, upgradeBuilding, getUpgradeInfo } from './api.js';
import { getCurrentPlayerFaction } from './base.js';

// Cache des informations de bâtiments
let buildingMarkers = new Map();

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

        // Créer l'icône avec l'image du bâtiment
        const icon = createBuildingIcon(b.code);

        // Stocker les données du building pour accès ultérieur
        const buildingData = {
            id: b.id,
            type: b.type,
            level: b.level,
            code: b.code
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
 * Crée un popup simple (synchrone)
 */
function createSimplePopup(building) {
    return `
        <div class="building-popup">
            <h3>${building.type || 'Bâtiment'}</h3>
            <p>Niveau: ${building.level || 1}</p>
            <div id="upgrade-info-${building.id}">Chargement...</div>
        </div>
    `;
}

/**
 * Charge les infos d'amélioration en arrière-plan
 */
async function loadUpgradeInfoAsync(buildingId, marker, buildingData) {
    if (!buildingId) {
        marker.setPopupContent(createSimplePopup(buildingData));
        return;
    }

    try {
        const res = await getUpgradeInfo(buildingId);
        if (!res.ok) {
            marker.setPopupContent(createSimplePopup(buildingData));
            return;
        }

        const upgradeInfo = await res.json();
        const canUpgrade = upgradeInfo?.canUpgrade ?? false;
        const maxLevel = upgradeInfo?.maxLevel ?? 1;
        const needed = upgradeInfo?.needed ?? {};
        const available = upgradeInfo?.available ?? {};

        let costsHtml = '';
        if (!canUpgrade && maxLevel > 1) {
            costsHtml = '<div class="upgrade-costs unavailable">Coûts insuffisants</div>';
        } else if (Object.keys(needed).length > 0) {
            costsHtml = '<div class="upgrade-costs">';
            for (const [resource, amount] of Object.entries(needed)) {
                const has = available[resource] || 0;
                const cls = has >= amount ? 'enough' : 'missing';
                costsHtml += `<div class="${cls}">${resource}: ${has}/${amount}</div>`;
            }
            costsHtml += '</div>';
        }

        const popupContent = `
            <div class="building-popup">
                <h3>${buildingData.type}</h3>
                <p>Niveau: ${buildingData.level} / ${maxLevel}</p>
                ${costsHtml}
                <div class="popup-actions">
                    ${canUpgrade ?
                        `<button onclick="window.upgradeBuilding(${buildingId})" class="btn-upgrade">Améliorer</button>` :
                        `<button disabled class="btn-upgrade">Améliorer</button>`
                    }
                </div>
            </div>
        `;

        marker.setPopupContent(popupContent);
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
 * @returns {L.Icon} L'icône Leaflet personnalisée.
 */
export function createBuildingIcon(buildingCode) {
    const faction = getCurrentPlayerFaction();
    const size = 70; // Taille par défaut des icônes

    return L.icon({
        iconUrl: getBuildingImage(faction, buildingCode),
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

    // Si la faction est 'default' ou invalide, utiliser directement l'icône default
    if (factionSlug === 'default') {
        return `/assets/images/buildings/default/${buildingSlug}.png`;
    }

    // Essayer d'abord l'icône de la faction
    // Le serveur ou le navigateur gérera le fallback si l'icône n'existe pas
    // Pour forcer le fallback côté client, vous pouvez:
    // 1. Configurer le serveur web (Nginx/Apache) pour faire un try_files vers default
    // 2. Utiliser une requête HEAD asyncone pour vérifier l'existence (coûteux)

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