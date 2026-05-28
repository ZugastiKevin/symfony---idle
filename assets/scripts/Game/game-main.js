import { initMap, loadWorld, map } from './map.js';
import { initGPS } from './gps.js';
import { initBaseUI } from './base.js';
import { loadBuildings } from './building.js';

document.addEventListener('DOMContentLoaded', () => {

    enableLeafletDebug(false);

    const defaultLat = 46.53972;
    const defaultLng = 2.43028;

    initMap(defaultLat, defaultLng);

    initBaseUI();
    loadWorld();
    loadBuildings();
});

export function enableLeafletDebug(debug = false) {

    if (!debug) return;

    const originalMarker = L.marker;
    const originalCircle = L.circle;
    const originalPolyline = L.polyline;

    L.marker = function (...args) {
        console.log("🧨 MARKER CALL:", args);
        console.trace("MARKER STACK");
        return originalMarker.apply(this, args);
    };

    L.circle = function (...args) {
        console.log("🧨 CIRCLE CALL:", args);
        console.trace("CIRCLE STACK");
        return originalCircle.apply(this, args);
    };

    L.polyline = function (...args) {
        console.log("🧨 POLYLINE CALL:", args);
        console.trace("POLYLINE STACK");
        return originalPolyline.apply(this, args);
    };
}