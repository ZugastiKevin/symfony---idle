const CACHE_VERSION = 'v1';

export function getCacheKey(chunkId) {
    return `${CACHE_VERSION}_chunk_${chunkId}`;
}