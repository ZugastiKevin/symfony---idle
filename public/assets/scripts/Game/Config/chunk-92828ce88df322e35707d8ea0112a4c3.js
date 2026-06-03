import { getMap } from '../map.js';
import { refreshChunk } from '../Roads/roads.js';
import { invalidateChunk } from '../Roads/invalidateChunk.js';
import { debugLog, debugError } from './debug.js';
import { snapToChunk } from '../Utils/snap.js';

export const CHUNK_SIZE = 0.01;
export const CHUNK_RADIUS = 1;

document.getElementById('requestApiRoadsAndChunksBtn').addEventListener('click', () => {

    const map = getMap();

    map.getContainer().style.cursor = 'crosshair';
    alert("Clique sur la carte pour faire une requete api pour ajouter un chunk de routes (0.01° x 0.01°).");

    map.once('click', async (e) => {

        const { lat, lng } = e.latlng;

        const snapped = snapToChunk(lat, lng);

        debugLog("network", "📡 adding roads chunk:", snapped.chunkId);

        try {
            await fetch('/api/add-roads-chunk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    lat: snapped.lat,
                    lng: snapped.lng
                })
            });

            refreshChunk(snapped.lat, snapped.lng);

            debugLog("chunks", "🔄 chunk refreshed:", snapped.chunkId);

        } catch (err) {
            debugError("network", "failed to add roads chunk", err);
        }

        map.getContainer().style.cursor = '';
    });
});