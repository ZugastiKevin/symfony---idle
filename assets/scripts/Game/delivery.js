/**
 * Système de livraison avec Mercure (SSE avec annotations)
 */

let eventSource = null;

/**
 * Initialise la connexion Mercure
 */
export function initMercureConnection() {
    if (eventSource) {
        eventSource.close();
    }

    eventSource = new EventSource('http://localhost:3000/.well-known/mercure');

    eventSource.addEventListener('delivery.completed', (e) => {
        const data = JSON.parse(e.data);
        console.log('Livraison terminée:', data);
        handleDeliveryCompleted(data.delivery);
    });

    eventSource.addEventListener('delivery.progress', (e) => {
        const data = JSON.parse(e.data);
        updateDeliveryProgress(data.delivery);
    });
}

/**
 * Gère la fin d'une livraison
 */
function handleDeliveryCompleted(delivery) {
    // Afficher notification
    console.log(`Livraison ${delivery.id} terminée!`);

    // Déclencher événement personnalisé
    window.dispatchEvent(new CustomEvent('deliveryCompleted', {
        detail: { deliveryId: delivery.id }
    }));
}

/**
 * Met à jour la progression d'une livraison
 */
function updateDeliveryProgress(delivery) {
    const marker = window.deliveryMarkers?.get(delivery.id);
    if (marker) {
        // Mettre à jour la position sur la carte
        updateDeliveryPosition(marker, delivery);
    }
}

/**
 * Met à jour la position d'une livraison sur la carte
 */
function updateDeliveryPosition(marker, delivery) {
    // À implémenter avec Leaflet
}

// Stocker les markers de livraison
window.deliveryMarkers = new Map();