import L from '../LeafletWrapper.js';
import { flyTo, getMap } from './map.js';
import { roadsState, getAllLoadedRoads } from './Roads/roadsState.js';
import { getBuildingImage } from './building.js';
import { CHUNK_SIZE } from './Config/chunk.js';
import { safeLoadChunk, loadVisibleRoadChunks } from './Roads/roads.js';
import { findClosestPointOnRoad, findClosestSegment } from './Roads/roadUtils.js';
import { showNotification } from './UI/notification.js';
import { getAdminCoords } from './Utils/admin_clipboard.js';

// =======================
// 🧠 STATE
// =======================
let baseMarker = null;
let baseCircle = null;
let basePosition = null;
let baseCreated = false;
let placingBase = false;

let previewMarker = null;
let previewCircle = null;
let previewSnapLatLng = null;
let previewLine = null;
let highlightedSegment = null;

let currentPlayerFaction = 'default';


// =======================
// SET PLAYER FACTION
// =======================
export function setCurrentPlayerFaction(faction) {
    currentPlayerFaction = (faction || 'default').toLowerCase();
}

// =======================
// GET PLAYER FACTION
// =======================
export function getCurrentPlayerFaction() {
    return currentPlayerFaction;
}

// =======================
// INIT UI
// =======================
export function initBaseUI() {

    const map = getMap();

    const baseBtn = document.getElementById('baseBtn');

    baseBtn.addEventListener('click', () => {

        const mode = baseBtn.dataset.mode;

        // =======================
        // CREATE BASE MODE 
        // =======================
        if (mode === 'create') {
            if (baseCreated) {
                alert("Base déjà créée !");
                return;
            }

            placingBase = true;
            map.getContainer().style.cursor = 'crosshair';

            showNotification("Clique sur la carte pour placer ta base", 'info');
            loadVisibleRoadChunks();
        }

        // =======================
        // RETURN BASE MODE
        // =======================
        if (mode === 'return') {
            if (!basePosition) {
                alert("Aucune base !");
                return;
            }

            flyTo(basePosition[0], basePosition[1], 16);
        }
    });
    
    // =======================
    // CLICK MAP
    // =======================
    map.on('click', () => {

        if (!placingBase || baseCreated) return;
        if (!previewSnapLatLng) return;

        const { lat, lng } = previewSnapLatLng;

        if (!isBasePlacementValid(lat, lng)) {
            alert("❌ Trop proche d'une base !");
            return;
        }

        cleanupPreview(map);
        createBase(lat, lng);
    });
    

    // =======================
    // MOUSE MOVE (preview snap road)
    // =======================
    map.on('mousemove', (e) => {

        if (!placingBase) return;

        const roads = getAllLoadedRoads();

        if (!roads.length) return;

        const result = findClosestPointOnRoad(e.latlng, roads);
        if (!result.point) return;

        previewSnapLatLng = result.point;

        const isValid = isBasePlacementValid(result.point.lat, result.point.lng);

        cleanupPreview(map);

        const color = isValid ? 'green' : 'red';

        previewCircle = L.circle(result.point, {
            radius: 600,
            color,
            weight: 2,
            fillOpacity: 0.1
        }).addTo(map);

        previewMarker = L.marker(result.point).addTo(map);

        previewLine = L.polyline([e.latlng, result.point], {
            color: 'cyan',
            weight: 2,
            opacity: 0.6,
            dashArray: '5, 5'
        }).addTo(map);

        const segment = findClosestSegment(e.latlng, roads);

        if (segment) {
            highlightedSegment = L.polyline(segment, {
                color: 'yellow',
                weight: 6,
                opacity: 0.8
            }).addTo(map);
        }

        map.getContainer().style.cursor = 'none';
    });

    // =======================
    // UPDATE VISUAL BASE AND OTHER BASE
    // =======================
    map.on('zoomend', () => {
        updateBaseDisplay();
        updateOtherBases();
    });
}

// =======================
// PATHFINDING DEBUG FOR ADMIN - CLICK TO GET COORDINATES
// =======================
export function enableAdminCoordinatePicker() {
    const map = getMap();
    showNotification("Mode Admin activé : cliquez sur la carte", 'info');
        
    map.on('click', (e) => {
        getAdminCoords(e.latlng.lat, e.latlng.lng);
    });
}

window.enableAdminCoordinatePicker = enableAdminCoordinatePicker;

// =======================
// 🧹 CLEAN PREVIEW
// =======================
function cleanupPreview() {

    const map = getMap();

    previewMarker && map.removeLayer(previewMarker);
    previewCircle && map.removeLayer(previewCircle);
    previewLine && map.removeLayer(previewLine);
    highlightedSegment && map.removeLayer(highlightedSegment);

    previewMarker = null;
    previewCircle = null;
    previewLine = null;
    highlightedSegment = null;

    map.getContainer().style.cursor = '';
}

// =======================
// VALIDATION
// =======================
function isBasePlacementValid(lat, lng) {

    const map = getMap();

    return otherBases.every(base => {

        const dist = map.distance(
            [lat, lng],
            [base.lat, base.lng]
        );

        return dist >= 1100;
    });
}

// =======================
// CREATE BASE
// =======================
function createBase(lat, lng) {

    const map = getMap();

    placingBase = false;
    basePosition = [lat, lng];

    flyTo(lat, lng);

    baseCircle = L.circle(basePosition, {
        radius: 500,
    }).addTo(map);

    const baseTypeId = 1;
    fetch('/api/build', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            lat,
            lng,
            type_id: baseTypeId
        })
    })
    .then(res => {
        if (!res.ok) return res.json().then(err => { throw new Error(err.error || "API error") });
        return res.json();
    })
    .then(() => {
    baseCreated = true;
    })
    .catch(err => {
        console.error(err);
        removeBase();
        alert("Erreur création base : " + err.message);
    });

    map.getContainer().style.cursor = '';
    updateBaseDisplay();
}

// =======================
// REMOVE BASE
// =======================
function removeBase() {

    const map = getMap();

    baseMarker && map.removeLayer(baseMarker);
    baseCircle && map.removeLayer(baseCircle);

    baseMarker = null;
    baseCircle = null;
    basePosition = null;
    baseCreated = false;
    placingBase = false;

    map.getContainer().style.cursor = '';
}
// =======================
// LOAD OTHER BASE
// =======================
let otherBases = [];

export function loadOtherBase(lat, lng, pseudo, faction) {

    const map = getMap();

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

    const circle = L.circle([lat, lng], {
        radius: 500,
        color: 'red'
    }).addTo(map);

    const icon = createBaseIcon(map.getZoom(), faction);

    let marker = null;

    if (icon) {
        marker = L.marker([lat, lng], { icon })
            .addTo(map)
            .bindPopup(`🏕️ Base de ${pseudo}`);
    }

    otherBases.push({ lat, lng, pseudo, marker, circle, faction });
}

// =======================
// UPDATE OTHER BASE
// =======================
function updateOtherBases() {

    const map = getMap();
    const zoom = map.getZoom();

    otherBases.forEach(base => {

        const icon = createBaseIcon(zoom, base.faction);

        if (!icon) {
            if (base.marker) map.removeLayer(base.marker);
            return;
        }

        if (!base.marker) {
            base.marker = L.marker([base.lat, base.lng], { icon })
                .addTo(map)
                .bindPopup(`🏕️ Base de ${base.pseudo}`);
            return;
        }

        if (!map.hasLayer(base.marker)) base.marker.addTo(map);

        base.marker.setIcon(icon);
    });
}

// =======================
// LOAD FROM SERVER
// =======================
export function loadBaseFromServer(lat, lng) {

    const map = getMap();

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

    basePosition = [lat, lng];
    baseCreated = true;

    baseCircle = L.circle(basePosition, {
        radius: 500,
    }).addTo(map);

    updateBaseDisplay();
}

// =======================
// UPDATE BASE DISPLAY
// =======================
function updateBaseDisplay() {

    const map = getMap();

    if (!basePosition) return;

    const icon = createBaseIcon(map.getZoom(), currentPlayerFaction);

    if (!icon) {
        if (baseMarker) map.removeLayer(baseMarker);
        return;
    }

    if (!baseMarker) {
        baseMarker = L.marker(basePosition, { icon }).addTo(map);
    } else {
        if (!map.hasLayer(baseMarker)) baseMarker.addTo(map);
        baseMarker.setIcon(icon);
    }
}

// =======================
// CREATE BASE ICON
// =======================
function createBaseIcon(zoom, faction) {

    if (zoom < 13) return null;

    const size = faction !== 'nomades' ? (zoom > 15 ? 100 : 70) : (zoom > 15 ? 75 : 60);

    // Toujours utiliser l'icône de la faction (le fallback Apache gère les 404)
    // Si l'icône n'existe pas, Apache redirige vers default automatiquement
    const iconUrl = getBuildingImage(faction, 'base');

    return L.icon({
        iconUrl: iconUrl,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        popupAnchor: [0, -size / 2]
    });
}