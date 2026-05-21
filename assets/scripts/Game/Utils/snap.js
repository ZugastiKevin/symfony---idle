import { CHUNK_SIZE } from '../Config/chunk.js';

export function snapToChunk(lat, lng) {
    const x = Math.floor(lat / CHUNK_SIZE);
    const y = Math.floor(lng / CHUNK_SIZE);

    return {
        lat: x * CHUNK_SIZE,
        lng: y * CHUNK_SIZE,
        chunkId: `${x}_${y}`
    };
}