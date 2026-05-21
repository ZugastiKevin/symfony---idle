import { TYPE_MAP } from './typeMap.js';

export const DEBUG = {
    enabled: true,
    chunks: true,
    network: true,
    cache: true
};

export function debugLog(type, ...args) {
    if (!DEBUG.enabled) return;

    if (!type) {
        console.log(...args);
        return;
    }

    if (DEBUG[type] === false) return;

    console.log(`[${type}]`, ...args);
}

export function debugError(type, ...args) {
    if (!DEBUG.enabled) return;

    const key = TYPE_MAP?.[type] || type;

    if (DEBUG[key] === false) return;

    console.error(`[${key}]`, ...args);
}