import L from 'leaflet';
import { getMap } from '../map.js';

/**
 * Trouve le point le plus proche sur toutes les routes
 */
export function findClosestPointOnRoad(latlng, roads) {

    const map = getMap();
    let bestPoint = null;
    let bestDistance = Infinity;

    if (!Array.isArray(roads)) return { point: null, distance: Infinity };

    roads.forEach(road => {

        if (!Array.isArray(road.points)) return;
        if (road.points.length < 2) return;

        for (let i = 0; i < road.points.length - 1; i++) {

            const aRaw = road.points[i];
            const bRaw = road.points[i + 1];

            if (!aRaw || !bRaw) {
                console.warn("BROKEN ROAD SEGMENT:", road);
            }

            if (aRaw.length < 2 || bRaw.length < 2) continue;

            const a = L.latLng(aRaw[0], aRaw[1]);
            const b = L.latLng(bRaw[0], bRaw[1]);

            const projected = projectPointOnSegment(latlng, a, b);
            const dist = map.distance(latlng, projected);

            if (dist < bestDistance) {
                bestDistance = dist;
                bestPoint = projected;
            }
        }
    });

    return {
        point: bestPoint,
        distance: bestDistance
    };
}

/**
 * Trouve le segment le plus proche (pour highlight visuel)
 */
export function findClosestSegment(latlng, roads) {

    const map = getMap();
    let bestSegment = null;
    let bestDistance = Infinity;

    if (!Array.isArray(roads)) return null;

    roads.forEach(road => {

        if (!Array.isArray(road.points)) return;

        for (let i = 0; i < road.points.length - 1; i++) {

            const aRaw = road.points[i];
            const bRaw = road.points[i + 1];

            if (!aRaw || !bRaw) continue;
            if (aRaw.length < 2 || bRaw.length < 2) continue;

            const a = L.latLng(aRaw[0], aRaw[1]);
            const b = L.latLng(bRaw[0], bRaw[1]);

            const mid = L.latLng(
                (a.lat + b.lat) / 2,
                (a.lng + b.lng) / 2
            );

            const dist = map.distance(latlng, mid);

            if (dist < bestDistance) {
                bestDistance = dist;
                bestSegment = [a, b];
            }
        }
    });

    return bestSegment;
}

/**
 * Projection d'un point sur un segment (A-B)
 * math stable pour snap routes
 */
export function projectPointOnSegment(p, a, b) {

    const A = [a.lat, a.lng];
    const B = [b.lat, b.lng];
    const P = [p.lat, p.lng];

    const AB = [B[0] - A[0], B[1] - A[1]];
    const AP = [P[0] - A[0], P[1] - A[1]];

    const ab2 = AB[0] * AB[0] + AB[1] * AB[1];

    if (ab2 === 0) return a;

    let t = (AP[0] * AB[0] + AP[1] * AB[1]) / ab2;

    t = Math.max(0, Math.min(1, t));

    return L.latLng(
        A[0] + AB[0] * t,
        A[1] + AB[1] * t
    );
}

/**
 * Distance point -> segment (utile validation future)
 */
export function distanceToSegment(p, a, b) {
    const map = getMap();

    const projected = projectPointOnSegment(p, a, b);
    return map.distance(p, projected);
}

/**
 * Check simple debug roads
 */
export function debugRoads(roads) {
    console.log("ROADS DEBUG:", roads.length, roads);
}