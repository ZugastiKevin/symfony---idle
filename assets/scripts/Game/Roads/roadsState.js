export const roadsState = {
    chunks: {},
    loadedChunks: new Set(),
    roadsReady: false,
    drawnRoads: [],
    visibleChunks: new Set(),
    
    roadLayers: {},

    buildingLayers: {}
};

let cachedRoads = [];
let cacheDirty = true;

export function markRoadCacheDirty() {
    cacheDirty = true;
}

export function getAllLoadedRoads() {

    if (!roadsState?.chunks) return [];

    if (!cacheDirty) return cachedRoads;

    cachedRoads = Object.values(roadsState.chunks)
        .filter(c => c?.status === 'loaded' && Array.isArray(c.roads))
        .flatMap(c => c.roads);

    cacheDirty = false;

    return cachedRoads;
}