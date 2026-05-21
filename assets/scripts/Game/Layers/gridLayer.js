import L from 'leaflet';
import { debugLog } from '../Config/debug.js';
import { CHUNK_SIZE } from '../Config/chunk.js';
import { getMap, isGridLayerActive } from '../map.js';

export const gridLayer = L.layerGroup();

const visibleChunks = new Map();

export function initGridLayer() {

    const map = getMap();
    if (!map) return;

    if (!isGridLayerActive()) return;

    const zoom = map.getZoom();
    if (zoom < 14) return;

    const bounds = map.getBounds();

    const minLat = Math.floor(bounds.getSouth() / CHUNK_SIZE);
    const maxLat = Math.ceil(bounds.getNorth() / CHUNK_SIZE);
    const minLng = Math.floor(bounds.getWest() / CHUNK_SIZE);
    const maxLng = Math.ceil(bounds.getEast() / CHUNK_SIZE);

    const newVisible = new Set();

    for (let i = minLat; i < maxLat; i++) {
        for (let j = minLng; j < maxLng; j++) {

            const id = `${i}_${j}`;
            newVisible.add(id);

            if (visibleChunks.has(id)) continue;

            const lat = i * CHUNK_SIZE;
            const lng = j * CHUNK_SIZE;

            const rect = L.rectangle([
                [lat, lng],
                [lat + CHUNK_SIZE, lng + CHUNK_SIZE]
            ], {
                color: "orange",
                weight: 1,
                fillOpacity: 0.15
            });

            rect.on('mouseover', () => rect.setStyle({ fillOpacity: 0.3 }));
            rect.on('mouseout', () => rect.setStyle({ fillOpacity: 0.15 }));

            gridLayer.addLayer(rect);

            visibleChunks.set(id, rect);
        }
    }

    // 🧹 remove ceux hors écran
    for (const [id, rect] of visibleChunks.entries()) {
        if (!newVisible.has(id)) {
            gridLayer.removeLayer(rect);
            visibleChunks.delete(id);
        }
    }

    debugLog("chunks", "Chunks visibles:", visibleChunks.size);
}

// ==========================
// CHUNK COLOR
// ==========================
export function setChunkColor(id, color) {
    if (!isGridLayerActive()) return;
    
    const rect = visibleChunks.get(id);
    if (!rect) return;

    rect.setStyle({
        color,
        fillOpacity: 0.2
    });
}