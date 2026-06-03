import L from '../../LeafletWrapper.js';

const depositMarkers = new Map();

// Cache des types de ressources
let buildingTypesCache = null;
let resourceTypesCache = null;

/**
 * Charge les types de ressources depuis l'API
 */
async function loadBuildingTypes() {
    if (buildingTypesCache) return buildingTypesCache;

    try {
        const response = await fetch(`/api/building-types`);
        buildingTypesCache = await response.json();
        return buildingTypesCache;
    } catch (e) {
        console.error("Erreur lors du chargement des types de ressources", e);
        return [];
    }
}

async function loadResourceTypes() {
    if (resourceTypesCache) return resourceTypesCache;

    try {
        const response = await fetch(`/api/resource-types`);
        resourceTypesCache = await response.json();
        return resourceTypesCache;
    } catch (e) {
        console.error("Erreur lors du chargement des types de ressources", e);
        return [];
    }
}

// Mapping des couleurs par défaut
const DEFAULT_COLORS = {
    'iron': '#7f8c8d',
    'oil': '#f1c40f',
    'coal': '#2c3e50',
    'rubber': '#27ae60',
    'bauxite': '#e67e22',
    'rare_earth': '#8e44ad'
};

/**
 * Retourne la couleur pour un type de ressource (synchrone - utilise le cache)
 */
function getResourceColor(type) {
    if (resourceTypesCache) return (resourceTypesCache && resourceTypesCache[type]?.color) || DEFAULT_COLORS[type] || '#ffffff';

    loadResourceTypes();

    return (resourceTypesCache && resourceTypesCache[type]?.color) || DEFAULT_COLORS[type] || '#ffffff';
}

/**
 * Trouve le type de bâtiment (mine) pour une ressource donnée
 */
async function findBuildingTypeForResource(resourceType) {
    const buildingTypes = await loadBuildingTypes();

    // Chercher un bâtiment qui produit cette ressource
    const buildingType = buildingTypes.find(bt => {
        return (bt.resource_type === resourceType || bt.resourceType?.code === resourceType) && bt.base_cost > 0;
    });

    return buildingType?.id || null;
}

export const depositLayers = {};

/**
 * Initialise les couches de dépôts dynamiquement
 */
export async function initDepositLayers(map, control) {
    const resourceTypes = await loadResourceTypes();

    // Créer une couche pour chaque type de ressource (seulement si color existe)
    resourceTypes.forEach(rt => {
        if (rt.color && rt.color.length > 0) {
            depositLayers[rt.code] = L.layerGroup();
            control.addOverlay(depositLayers[rt.code], `Ressource: ${rt.label}`);
        }
    });
}

export async function loadDepositsForChunk(chunkId, map) {
    try {
        const response = await fetch(`/api/deposits/${chunkId}`);
        const deposits = await response.json();
        renderDepositsFromData(deposits, map);
    } catch (err) {
        console.error("Erreur chargement dépôts:", err);
    }
}

/**
 * Rendu des dépôts sur la carte
 */
export function renderDepositsFromData(deposits, map) {
    deposits.forEach(deposit => {
        if (depositMarkers.has(deposit.id)) return;

        const type = deposit.resource_type;
        const layer = depositLayers[type];

        if (!layer) {
            console.warn(`Pas de layer pour le type: ${type}`);
            return;
        }

        const color = getResourceColor(type);

        const marker = L.circleMarker([deposit.latitude, deposit.longitude], {
            radius: 8,
            fillColor: color,
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(layer);

        marker.bindPopup(`
            <b>${deposit.resource_type.toUpperCase()}</b><br>
            Richesse: ${deposit.richness}<br>
            ${deposit.is_claimed ? '⚠️ Déjà exploité' : '<button onclick="claimDeposit(' + deposit.id + ', \'' + deposit.resource_type + '\')">Exploiter</button>'}
        `);

        depositMarkers.set(deposit.id, marker);
    });
}

/**
 * Permet d'exploiter un dépôt depuis la popup
 */
window.claimDeposit = async function(id, resourceType) {
    // Trouver le type de bâtiment approprié
    const buildingTypeId = await findBuildingTypeForResource(resourceType);

    if (!buildingTypeId) {
        return alert(`Impossible de trouver un bâtiment pour extraire le ${resourceType}`);
    }

    // Construire directement le bâtiment sur les coordonnées du dépôt
    try {
        const response = await fetch('/api/build', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                lat: null,
                lng: null,
                type_id: buildingTypeId,
                deposit_id: id
            })
        });

        const responseText = await response.text();
        let data;
        try {
            data = JSON.parse(responseText);
        } catch (parseError) {
            console.error("Réponse non-JSON reçue:", responseText);
            throw new Error("Réponse invalide du serveur");
        }

        if (response.ok) {
            alert('Dépôt exploité avec succès ! Bâtiment créé.');
            location.reload();
        } else {
            alert("Erreur: " + (data.error || "Impossible d'exploiter ce dépôt"));
        }
    } catch (e) {
        console.error("Erreur lors de l'exploitation", e);
        alert("Erreur réseau lors de l'exploitation: " + e.message);
    }
}