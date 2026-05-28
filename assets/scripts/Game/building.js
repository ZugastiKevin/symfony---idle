import L from '../LeafletWrapper.js';
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

/**
 * Retourne dynamiquement le chemin de l'image.
 * @param {string} faction - Le code ou nom de la faction (ex: "Empire", "Cendres").
 * @param {string} building - Le nom du bâtiment (ex: "base", "iron_mine").
 */
export function getBuildingImage(faction, building) {
    const factionSlug = (faction || 'default').toLowerCase();

    return `/assets/images/buildings/${factionSlug}/${building}.png`;
}