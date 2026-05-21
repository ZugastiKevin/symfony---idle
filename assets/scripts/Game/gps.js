import { flyTo } from './map.js';

export function initGPS(defaultLat, defaultLng) {
    if (navigator.geolocation) {
        let gpsFound = false;

        navigator.geolocation.watchPosition(
            (position) => {
                gpsFound = true;

                flyTo(
                    position.coords.latitude,
                    position.coords.longitude
                );
            },
            () => {},
            {
                timeout: 5000
            }
        );

        setTimeout(() => {
            if (!gpsFound) {
                flyTo(defaultLat, defaultLng, 7);
            }
        }, 5500);
    }
}