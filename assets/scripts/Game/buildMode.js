import L from '../LeafletWrapper.js';
import { getMap } from './map.js';
import { getBuildingCosts, buildRequest } from './api.js';
import { getBuildingImage } from './building.js';
import { showNotification } from './UI/notification.js';

// =======================
// BUILD MODE STATE
// =======================
let selectedBuildingType = null;
let previewBuildingMarker = null;

/**
 * Initialise le mode construction
 */
export function initBuildMode() {
    const map = getMap();

    // Utiliser la délégation d'événements pour les boutons dynamiques
    document.addEventListener('click', async (e) => {
        const btn = e.target.closest('.build-item');
        if (!btn) return;

        const typeId = btn.dataset.typeId;
        if (!typeId) return;

        // Sélectionner le type de bâtiment
        await selectBuildingType(typeId, btn);
    });

    // Click sur la carte pour construire
    map.on('click', onMapClick);

    // Mouse move pour prévisualiser
    map.on('mousemove', onMapMouseMove);
}

/**
 * Sélectionne un type de bâtiment à construire
 */
async function selectBuildingType(typeId, button) {
    const map = getMap();

    // Désélectionner précédemment
    clearBuildingSelection();

    // Gérer le cas spécial de la base (bouton #baseBtn)
    if (button.id === 'baseBtn' && typeId == 1) {
        // La base est gérée par base.js, on ne fait rien ici
        return;
    }

    // Mettre en évidence le bouton sélectionné
    button.classList.add('selected');

    // Récupérer les coûts
    try {
        const data = await getBuildingCosts(typeId);
        selectedBuildingType = {
            id: typeId,
            name: data.name,
            costs: data.costs,
            button: button
        };

        showNotification(`Sélectionné: ${data.name}. Clique sur la carte pour construire.`, 'info');
    } catch (e) {
        console.error("Erreur lors de la récupération des coûts", e);
        showNotification("Erreur lors de la récupération des coûts", 'error');
    }
}

/**
 * Nettoie la sélection actuelle
 */
function clearBuildingSelection() {
    const map = getMap();

    if (previewBuildingMarker) {
        map.removeLayer(previewBuildingMarker);
        previewBuildingMarker = null;
    }

    selectedBuildingType = null;

    // Retirer la classe selected de tous les boutons
    document.querySelectorAll('.build-item').forEach(btn => {
        btn.classList.remove('selected');
    });
}

/**
 * Gestion du click sur la carte
 */
async function onMapClick(e) {
    const map = getMap();

    if (!selectedBuildingType) return;
    if (!previewBuildingMarker) return;

    const lat = e.latlng.lat;
    const lng = e.latlng.lng;

    try {
        const response = await buildRequest(lat, lng, selectedBuildingType.id);
        const data = await response.json();

        if (response.ok) {
            showNotification(`${selectedBuildingType.name} construit avec succès !`, 'success');

            // Nettoyer
            map.removeLayer(previewBuildingMarker);
            previewBuildingMarker = null;
            clearBuildingSelection();
        } else {
            showNotification(`Erreur: ${data.error}`, 'error');
        }
    } catch (e) {
        console.error("Erreur lors de la construction", e);
        showNotification("Erreur réseau lors de la construction", 'error');
    }
}

/**
 * Prévisualisation de la position de construction
 */
function onMapMouseMove(e) {
    const map = getMap();

    if (!selectedBuildingType) {
        // Nettoyer les markers de prévisualisation
        if (previewBuildingMarker) {
            map.removeLayer(previewBuildingMarker);
            previewBuildingMarker = null;
        }
        return;
    }

    // Ajouter un marker de prévisualisation
    if (!previewBuildingMarker) {
        previewBuildingMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    } else {
        previewBuildingMarker.setLatLng(e.latlng);
    }
}

/**
 * Active le mode construction pour un type de bâtiment
 */
export function activateBuildMode(typeId) {
    const btn = document.querySelector(`[data-type-id="${typeId}"]`);
    if (btn) {
        btn.click();
    }
}

/**
 * Désactive le mode construction
 */
export function deactivateBuildMode() {
    clearBuildingSelection();
}

/**
 * Vérifie si le mode construction est actif
 */
export function isBuildModeActive() {
    return selectedBuildingType !== null;
}