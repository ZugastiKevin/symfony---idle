import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { debugLog } from './Config/debug.js';

import { gridLayer, initGridLayer } from './Layers/gridLayer.js';
import { loadVisibleRoadChunks } from './Roads/roads.js';
import { roadsState } from './Roads/roadsState.js';

import { loadBaseFromServer, loadOtherBase } from './base.js';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Marker.prototype.options.icon = L.icon({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

let mapInstance = null;
let moveTimeout = null;
let isChunkMode = false;

export function initMap(lat, lng) {

    mapInstance = L.map('map').setView([lat, lng], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(mapInstance);

    L.control.layers(null, {
        "Chunk Grid": gridLayer
    }).addTo(mapInstance);

    L.control.layers(null, {
        "eau": gridLayer,
        "fer": gridLayer
    }).addTo(mapInstance);

    // =====================
    // CENTRAL CHUNK CONTROLLER
    // =====================

    mapInstance.on('moveend', () => {

        if (!isChunkMode) return;
        if (mapInstance.getZoom() < 14) return;

        clearTimeout(moveTimeout);

        moveTimeout = setTimeout(() => {
            initGridLayer();
            loadVisibleRoadChunks();
        }, 300);
    });

    mapInstance.on('overlayadd', (e) => {
        if (e.layer === gridLayer) {
            debugLog("grid", "Grid ON");

            initGridLayer();
            loadVisibleRoadChunks();
        }
    });

    mapInstance.on('overlayremove', (e) => {
        if (e.layer === gridLayer) {
            debugLog("grid", "Grid OFF");
        }
    });

    // =====================
    // EVENTS
    // =====================
    mapInstance.on('zoomend', () => {

        const zoom = mapInstance.getZoom();

        if (zoom >= 14) {
            enterChunkMode();
        } else {
            exitChunkMode();
        }
    });
}

export function isGridLayerActive() {
    return mapInstance?.hasLayer(gridLayer);
}

export function getMap() {
    return mapInstance;
}

export function flyTo(lat, lng, zoom = 13) {
    const map = getMap();
    map.flyTo([lat, lng], zoom, {
        animate: true,
        duration: 1.5
    });
}

// =====================
// WORLD
// =====================
export function loadWorld() {

    fetch('/api/world-state')
        .then(res => res.json())
        .then(data => {

            const map = getMap();

            data.buildings.forEach(b => {
                L.marker([b.lat, b.lng])
                    .addTo(map)
                    .bindPopup(`${b.type} lvl ${b.level}`);
            });

            if (data.bases) {

                let hasCentered = false;

                data.bases.forEach(base => {

                    if (base.isMe) {

                        loadBaseFromServer(base.lat, base.lng);

                        if (!hasCentered) {
                            flyTo(base.lat, base.lng, 16);
                            hasCentered = true;
                        }

                        return;
                    }

                    loadOtherBase(base.lat, base.lng, base.pseudo);
                });
            }
        })
        .catch(err => {
            console.error("Erreur load world", err);
        });
}

function enterChunkMode() {
    if (isChunkMode) return;

    isChunkMode = true;

    debugLog("chunks", "ENTER CHUNK MODE");

    initGridLayer();
    loadVisibleRoadChunks();
}

function exitChunkMode() {
    if (!isChunkMode) return;

    isChunkMode = false;

    debugLog("chunks", "EXIT CHUNK MODE");

    if (mapInstance.hasLayer(gridLayer)) {
        mapInstance.removeLayer(gridLayer);
    }
}