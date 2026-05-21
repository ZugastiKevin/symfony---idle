import L from 'leaflet';
import { getMap } from './map.js';
import { getBuildings } from './api.js';

export function loadBuildings() {

    const map = getMap();

    if (!map) {
        console.error("Map not initialized");
        return;
    }

    getBuildings().then(data => {

        data.forEach(b => {

            if (!Number.isFinite(b.lat) || !Number.isFinite(b.lng)) {
                console.warn("❌ Building ignoré (coord invalide)", b);
                return;
            }

            L.marker([b.lat, b.lng])
                .addTo(map)
                .bindPopup(`${b.type} lvl ${b.level}`);
        });

    });
}