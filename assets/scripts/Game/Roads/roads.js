import { getMap } from '../map.js';
import { CHUNK_SIZE } from '../Config/chunk.js';
import { setChunkColor } from '../Layers/gridLayer.js';
import { invalidateChunk } from './invalidateChunk.js';
import { debugLog, debugError } from '../Config/debug.js';
import { roadsState } from './roadsState.js';
import { renderDepositsFromData } from '../Map/deposits.js';
import { getCacheKey } from '../Config/cacheUtils.js';

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

    if (!map || map.getZoom() < 14) return;

    const bounds = map.getBounds();

    const visibleChunks = getVisibleChunks(bounds);

    const chunksToLoad = visibleChunks.filter(
        chunkId => !roadsState.loadedChunks.has(chunkId)
    );

    // ==========================
    // VERIFICATION CACHE LOCAL
    // ==========================
    const finalChunksToLoad = [];

    for (const chunkId of chunksToLoad) {
        const cacheKey = getCacheKey(chunkId);
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
            const data = JSON.parse(cached);
            // Vérifier si le cache est vieux (ex: plus de 1h)
            if (Date.now() - data.ts < 3600000) { 
                roadsState.chunks[chunkId] = {
                    status: data.hasRoads ? 'loaded' : 'empty',
                    roads: data.roads,
                    buildings: data.buildings,
                    deposits: data.deposits,
                    hasRoads: data.hasRoads
                };
                roadsState.loadedChunks.add(chunkId);
                setChunkColor(chunkId, data.hasRoads ? 'blue' : '#444');
                renderDepositsFromData(data.deposits || [], map);
                continue;
            }
        }
        finalChunksToLoad.push(chunkId);
    }

    // ==========================
    // ETAT LOADING
    // ==========================

    for (const chunkId of finalChunksToLoad) {

        roadsState.chunks[chunkId] = {
            status: 'loading',
            roads: [],
            buildings: [],
            deposits: []
        };

        setChunkColor(chunkId, 'orange');
    }

    // rien à charger
    if (finalChunksToLoad.length === 0) {
        refreshChunkColors(visibleChunks);
        return;
    }

    try {

        const [roadsResponse, buildingsResponse, depositsResponse] = await Promise.all([
            fetch('/api/chunks/bulk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: finalChunksToLoad })
            }),
            fetch('/api/buildings/visible', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: finalChunksToLoad })
            }),
            fetch('/api/deposits/bulk', {       // ← nouvel endpoint à créer
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: finalChunksToLoad })
            })
        ]);

        if (!roadsResponse.ok || !buildingsResponse.ok || !depositsResponse.ok) throw new Error("API error");

        const roadsData = await roadsResponse.json();
        const buildingsData = await buildingsResponse.json();
        const depositsData = await depositsResponse.json();

        // Créer un index pour mapper les bâtiments par chunkId rapidement
        const buildingsByChunk = {};
        buildingsData.forEach(b => {
            const cId = Math.floor(b.lat * 100) + '_' + Math.floor(b.lng * 100);
            if (!buildingsByChunk[cId]) buildingsByChunk[cId] = [];
            buildingsByChunk[cId].push(b);
        });

        // ==========================
        // TRAITEMENT CHUNKS
        // ==========================

        for (const chunkId of finalChunksToLoad) {
            const chunkData = {
                roads: roadsData[chunkId]?.roads || [],
                buildings: buildingsData[chunkId]?.buildings || [],
                deposits: depositsData[chunkId] || []
            };

            const hasRoads = chunkData.roads && chunkData.roads.length > 0;

            roadsState.chunks[chunkId] = {
                status: hasRoads ? 'loaded' : 'empty',
                roads: chunkData.roads || [],
                buildings: chunkData.buildings || [],
                deposits: chunkData.deposits || [],
                hasRoads
            };

            roadsState.loadedChunks.add(chunkId);

            // ==========================
            // CACHE
            // ==========================
            const cacheKey = getCacheKey(chunkId);
            localStorage.setItem(
            cacheKey,
            JSON.stringify({
                roads: chunkData.roads || [],
                buildings: chunkData.buildings || [],
                deposits: chunkData.deposits || [],
                hasRoads,
                ts: Date.now()
            }));

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

            renderDepositsFromData(chunkData.deposits, map);

            debugLog("roads", `Chunk ${chunkId} loaded (${chunkData.roads.length} roads, ${chunkData.buildings.length} buildings, ${chunkData.deposits.length} deposits)`);
        }
    } catch (error) {

        console.error(
            "Erreur chargement chunks bulk:",
            error
        );

        // ==========================
        // ETAT ERREUR
        // ==========================

        for (const chunkId of finalChunksToLoad) {
            roadsState.chunks[chunkId] = {

                status: 'error',

                roads: [],

                buildings: [],
                deposits: []
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
            buildings: [],
            deposits: []
        };

        setChunkColor(chunkId, 'orange');

        const [roadsRes, buildingsRes, depositsRes] = await Promise.all([
            fetch('/api/chunks/bulk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: [chunkId] })
            }),
            fetch('/api/buildings/visible', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: [chunkId] })
            }),
            fetch('/api/deposits/bulk', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chunks: [chunkId] })
            })
        ]);

        if (!roadsRes.ok || !buildingsRes.ok || !depositsRes.ok) 
            throw new Error("API error");

        const roadsData     = await roadsRes.json();
        const buildingsData = await buildingsRes.json();
        const depositsData  = await depositsRes.json();

        const chunkDeposits = depositsData[chunkId] || [];

        const chunkData = {
            roads:     roadsData[chunkId]?.roads     || [],
            buildings: buildingsData[chunkId]?.buildings || [],
            deposits:  chunkDeposits
        };

        const hasRoads = chunkData.roads.length > 0;

        roadsState.chunks[chunkId] = {
            status: hasRoads ? 'loaded' : 'empty',
            roads:     chunkData.roads,
            buildings: chunkData.buildings,
            deposits:  chunkData.deposits,
            hasRoads
        };

        const cacheKey = getCacheKey(chunkId);
        localStorage.setItem(cacheKey, JSON.stringify({
            roads:     chunkData.roads,
            buildings: chunkData.buildings,
            deposits:  chunkData.deposits,
            hasRoads,
            ts: Date.now()
        }));

        setChunkColor(chunkId, hasRoads ? 'blue' : '#444');
        renderDepositsFromData(chunkData.deposits, getMap());

        debugLog("[CHUNK REFRESH]", chunkId, chunkData.roads.length);

    } catch (e) {
        roadsState.chunks[chunkId] = {
            status: 'error',
            roads: [],
            buildings: [],
            deposits: []
        };

        setChunkColor(chunkId, 'red');
        debugError("[CHUNK REFRESH ERROR]", chunkId, e);
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