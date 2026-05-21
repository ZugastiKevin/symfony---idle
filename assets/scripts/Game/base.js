import L from 'leaflet';
import { flyTo, getMap } from './map.js';
import { roadsState, getAllLoadedRoads } from './Roads/roadsState.js';
import { CHUNK_SIZE } from './Config/chunk.js';
import { safeLoadChunk, loadVisibleRoadChunks } from './Roads/roads.js';
import { findClosestPointOnRoad, findClosestSegment } from './Roads/roadUtils.js';
import { showNotification } from './Ui/notification.js';

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

    fetch('/api/create-base', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lat, lng })
    })
    .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
    })
    .then(() => {
        baseCreated = true;
    })
    .catch(err => {
        console.error(err);
        removeBase();
        alert("Erreur création base !");
    });

    map.getContainer().style.cursor = '';
    updateBaseDisplay();
}

// =======================
// CREATE BASE ICON
// =======================
function createBaseIcon(zoom) {

    if (zoom < 13) return null;

    const size = zoom > 15 ? 50 : 30;

    return L.icon({
        iconUrl: '/assets/images/building/plan_industry.png',

        iconSize: [size, size],       // taille de l'image
        iconAnchor: [size / 2, size / 2], // centre de l'image sur la position
        popupAnchor: [0, -size / 2]   // popup au-dessus
    });
}

// =======================
// UPDATE BASE DISPLAY
// =======================
function updateBaseDisplay() {

    const map = getMap();

    if (!basePosition) return;

    const icon = createBaseIcon(map.getZoom());

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

export function loadOtherBase(lat, lng, pseudo) {

    const map = getMap();

    if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;

    const circle = L.circle([lat, lng], {
        radius: 500,
        color: 'red'
    }).addTo(map);

    const icon = createBaseIcon(map.getZoom());

    let marker = null;

    if (icon) {
        marker = L.marker([lat, lng], { icon })
            .addTo(map)
            .bindPopup(`🏕️ Base de ${pseudo}`);
    }

    otherBases.push({ lat, lng, pseudo, marker, circle });
}

// =======================
// UPDATE OTHER BASE
// =======================
function updateOtherBases() {

    const map = getMap();
    const zoom = map.getZoom();

    otherBases.forEach(base => {

        const icon = createBaseIcon(zoom);

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