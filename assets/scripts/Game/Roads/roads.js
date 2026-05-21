import { getMap } from '../map.js';
import { CHUNK_SIZE } from '../Config/chunk.js';
import { setChunkColor } from '../Layers/gridLayer.js';
import { invalidateChunk } from './invalidateChunk.js';
import { debugLog, debugError } from '../Config/debug.js';
import { roadsState } from './roadsState.js';

// ==========================
// LOAD CONTROL
// ==========================
const loadingQueue = new Set();
const MAX_CONCURRENT = 4;
let activeRequests = 0;

// ==========================
// CHUNK ID
// ==========================
function getChunkId(lat, lng) {
    const x = Math.floor(lat / CHUNK_SIZE);
    const y = Math.floor(lng / CHUNK_SIZE);
    return `${x}_${y}`;
}

// ==========================
// MAIN LOAD VISIBLE
// ==========================
export async function loadVisibleRoadChunks() {

    const map = getMap();

    if (!map || map.getZoom() < 14) {
        return;
    }

    const bounds = map.getBounds();

    const visibleChunks = getVisibleChunks(bounds);

    const chunksToLoad = visibleChunks.filter(
        chunkId => !roadsState.loadedChunks.has(chunkId)
    );

    // ==========================
    // ETAT LOADING
    // ==========================

    for (const chunkId of chunksToLoad) {

        roadsState.chunks[chunkId] = {
            status: 'loading',
            roads: [],
            buildings: []
        };

        setChunkColor(chunkId, 'orange');
    }

    // rien à charger
    if (chunksToLoad.length === 0) {

        refreshChunkColors(visibleChunks);

        return;
    }

    try {

        // ==========================
        // BULK API
        // ==========================

        const response = await fetch('/api/chunks/bulk', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                chunks: chunksToLoad
            })
        });

        const data = await response.json();

        // ==========================
        // TRAITEMENT CHUNKS
        // ==========================

        for (const chunkId of chunksToLoad) {

            const chunkData = data[chunkId] || {
                roads: [],
                buildings: []
            };

            const hasRoads =
                chunkData.roads &&
                chunkData.roads.length > 0;

            roadsState.chunks[chunkId] = {

                status: hasRoads
                    ? 'loaded'
                    : 'empty',

                roads: chunkData.roads || [],

                buildings: chunkData.buildings || [],

                hasRoads
            };

            roadsState.loadedChunks.add(chunkId);

            // ==========================
            // DRAW ROADS
            // ==========================

            // chunkData.roads.forEach(road => {
            //     drawRoad(road);
            // });

            // ==========================
            // DRAW BUILDINGS
            // ==========================

            // chunkData.buildings.forEach(building => {
            //     drawBuilding(building);
            // });

            // ==========================
            // COULEUR CHUNK
            // ==========================

            setChunkColor(
                chunkId,
                hasRoads ? 'blue' : '#444'
            );

            debugLog(
                "roads",
                `Chunk ${chunkId} loaded (${chunkData.roads.length} roads)`
            );
        }

    } catch (error) {

        console.error(
            "Erreur chargement chunks bulk:",
            error
        );

        // ==========================
        // ETAT ERREUR
        // ==========================

        for (const chunkId of chunksToLoad) {

            roadsState.chunks[chunkId] = {

                status: 'error',

                roads: [],

                buildings: []
            };

            setChunkColor(chunkId, 'red');
        }
    }

    // ==========================
    // REFRESH VISUEL FINAL
    // ==========================

    refreshChunkColors(visibleChunks);
}

// ==========================
// REFRESH CHUNK COLORS
// ==========================
function refreshChunkColors(visibleChunks) {

    for (const chunkId of visibleChunks) {

        const chunk = roadsState.chunks[chunkId];

        if (!chunk) {

            setChunkColor(chunkId, 'orange');

            continue;
        }

        switch (chunk.status) {

            case 'loaded':

                setChunkColor(chunkId, 'blue');

                break;

            case 'empty':

                setChunkColor(chunkId, '#444');

                break;

            case 'loading':

                setChunkColor(chunkId, 'orange');

                break;

            case 'error':

                setChunkColor(chunkId, 'red');

                break;

            default:

                setChunkColor(chunkId, 'yellow');
        }
    }
}

// ==========================
// REFRESH CHUNK
// ==========================
export async function refreshChunk(lat, lng) {
    const chunkId = getChunkId(lat, lng);
    
    invalidateChunk(chunkId);

    roadsState.loadedChunks.delete(chunkId);

    await fetchSingleChunk(chunkId);
}

// ==========================
// FETCH SINGLE CHUNK
// ==========================
async function fetchSingleChunk(chunkId) {

    try {

        roadsState.chunks[chunkId] = {
            status: 'loading',
            roads: [],
            buildings: []
        };

        setChunkColor(chunkId, 'orange');

        const response = await fetch('/api/chunks/bulk', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                chunks: [chunkId]
            })
        });

        if (!response.ok) {

            roadsState.chunks[chunkId].status = 'error';

            setChunkColor(chunkId, 'red');

            return;
        }

        const data = await response.json();

        const chunkData = data[chunkId] || {
            roads: [],
            buildings: []
        };

        const hasRoads =
            chunkData.roads &&
            chunkData.roads.length > 0;

        roadsState.chunks[chunkId] = {

            status: hasRoads
                ? 'loaded'
                : 'empty',

            roads: chunkData.roads || [],

            buildings: chunkData.buildings || [],

            hasRoads
        };

        // ==========================
        // CACHE
        // ==========================

        localStorage.setItem(
            `chunk_${chunkId}`,
            JSON.stringify({
                roads: chunkData.roads || [],
                buildings: chunkData.buildings || [],
                hasRoads,
                ts: Date.now()
            })
        );

        // ==========================
        // DRAW
        // ==========================

        // redraw roads
        // clearChunkRoads(chunkId);

        // chunkData.roads.forEach(road => {
        //     drawRoad(road);
        // });

        // redraw buildings
        // clearChunkBuildings(chunkId);

        // chunkData.buildings.forEach(building => {
        //     drawBuilding(building);
        // });

        setChunkColor(
            chunkId,
            hasRoads ? 'blue' : '#444'
        );

        debugLog(
            "[CHUNK REFRESH]",
            chunkId,
            chunkData.roads.length
        );

    } catch (e) {

        roadsState.chunks[chunkId] = {
            status: 'error',
            roads: [],
            buildings: []
        };

        setChunkColor(chunkId, 'red');

        debugError(
            "[CHUNK REFRESH ERROR]",
            chunkId,
            e
        );
    }
}

function getVisibleChunks(bounds) {

    const minX = Math.floor(bounds.getSouth() / CHUNK_SIZE);
    const maxX = Math.floor(bounds.getNorth() / CHUNK_SIZE);

    const minY = Math.floor(bounds.getWest() / CHUNK_SIZE);
    const maxY = Math.floor(bounds.getEast() / CHUNK_SIZE);

    const chunkId = [];

    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            chunkId.push(`${x}_${y}`);
        }
    }

    return chunkId;
}