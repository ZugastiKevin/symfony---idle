import { roadsState } from './roadsState.js';
import { debugLog } from '../Config/debug.js';

export function invalidateChunk(id) {
    debugLog("cache", "🧹 invalidate chunk:", id);
    
    delete roadsState.chunks[id];
    localStorage.removeItem(`chunk_${id}`);
}