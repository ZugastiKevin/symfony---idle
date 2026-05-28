import { showNotification } from '../Ui/notification.js';

// =======================
// PATHFINDING DEBUG - CLICK TO GET COORDINATES
// =======================
export function getAdminCoords(lat, lng) {
    if (lat === undefined || lng === undefined) return;

    const format = `${lat.toFixed(6)},${lng.toFixed(6)}`;
    navigator.clipboard.writeText(format);
    showNotification("Format collable admin copié : " + format, 'success');
}