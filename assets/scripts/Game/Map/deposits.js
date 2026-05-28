import L from '../../LeafletWrapper';

const depositMarkers = new Map();

export async function loadDepositsForChunk(chunkId, map) {
    try {
        const response = await fetch(`/api/deposits/${chunkId}`);
        const deposits = await response.json();
        renderDepositsFromData(deposits, map);
    } catch (err) {
        console.error("Erreur chargement dépôts:", err);
    }
}

function getResourceColor(type) {
    const colors = { 'iron': '#7f8c8d', 'coal': '#2c3e50', 'oil': '#f1c40f', 'bauxite': '#e67e22', 'rubber': '#27ae60', 'rare_earth': '#8e44ad' };
    return colors[type] || '#ffffff';
}

window.claimDeposit = function(id) {
    console.log("Tentative d'exploitation du dépôt:", id);
    // Ici, vous devrez faire un fetch POST vers une route API 
    // qui déclenche la construction d'un bâtiment extracteur.
};

export const depositLayers = {
    'iron': L.layerGroup(),
    'coal': L.layerGroup(),
    'oil': L.layerGroup(),
    'bauxite': L.layerGroup(),
    'rubber': L.layerGroup(),
    'rare_earth': L.layerGroup()
};

export function initDepositLayers(map, control) {
    Object.keys(depositLayers).forEach(key => {
        control.addOverlay(depositLayers[key], `Ressource: ${key}`);
    });
}

export function renderDepositsFromData(deposits, map) {
    deposits.forEach(deposit => {
        if (depositMarkers.has(deposit.id)) return;

        const type = deposit.resource_type;
        const layer = depositLayers[type];

        if (!layer) {
            console.warn(`Pas de layer pour le type: ${type}`);
            return;
        }

        const marker = L.circleMarker([deposit.latitude, deposit.longitude], {
            radius: 8,
            fillColor: getResourceColor(deposit.resource_type),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }).addTo(layer);

        marker.bindPopup(`
            <b>${deposit.resource_type.toUpperCase()}</b><br>
            Richesse: ${deposit.richness}<br>
            ${deposit.is_claimed ? '⚠️ Déjà exploité' : '<button onclick="claimDeposit(' + deposit.id + ')">Exploiter</button>'}
        `);

        depositMarkers.set(deposit.id, marker);
    });
}