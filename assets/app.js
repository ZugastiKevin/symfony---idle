import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';

import './scripts/Layout/dropdown.js';
import './scripts/Security/form.js';
import './scripts/Security/remember_me.js';
import './scripts/Security/reset-btn.js';

import "leaflet/dist/leaflet.css";

import { initMap, loadWorld, map } from './scripts/Game/map.js';
import { initGPS } from './scripts/Game/gps.js';
import { initBaseUI } from './scripts/Game/base.js';
import { loadBuildings } from './scripts/Game/building.js';

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

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
