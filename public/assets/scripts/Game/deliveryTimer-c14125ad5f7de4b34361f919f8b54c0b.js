/**
 * Gestionnaire de timers de livraison
 * - Calcule le temps côté client
 * - Ne fait de requête que si la popup est ouverte
 */

class DeliveryTimerManager {
    constructor() {
        this.timers = new Map();
        this.popupOpen = false;
        this.currentBuildingId = null;
        this.initialized = false;
    }

    /**
     * Initialisation
     */
    init() {
        if (this.initialized) return;
        this.initialized = true;

        console.log('DeliveryTimerManager initialisé');

        // Vérifier périodiquement les popups Leaflet
        setInterval(() => {
            this.checkForPopups();
        }, 300);

        // Synchroniser avec la visibilité de la page
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.pauseAllTimers();
            } else if (this.popupOpen && this.currentBuildingId) {
                this.resumeTimer();
            }
        });
    }

    /**
     * Vérifie les popups Leaflet pour trouver les timers
     */
    checkForPopups() {
        // Les popups Leaflet sont dans .leaflet-popup-pane
        const popupPane = document.querySelector('.leaflet-popup-pane');
        if (!popupPane) return;

        const timerEl = popupPane.querySelector('[id^="delivery-timer-"]');
        if (timerEl) {
            const buildingId = timerEl.id.replace('delivery-timer-', '');
            if (!this.timers.has(buildingId)) {
                console.log('Timer détecté pour building:', buildingId);
                this.initTimer(buildingId);
            }
        }
    }

    /**
     * Initialise le timer pour un bâtiment
     */
    initTimer(buildingId) {
        this.stopTimer(buildingId);

        const timerEl = document.getElementById(`delivery-timer-${buildingId}`);
        if (!timerEl) return;

        const remaining = parseInt(timerEl.dataset.timeRemaining || '0');
        console.log(`Initialisation timer pour building ${buildingId}: ${remaining}s`);

        this.timers.set(buildingId, {
            remaining: remaining,
            startTime: Date.now(),
            intervalId: null
        });

        this.startTimer(buildingId);
    }

    /**
     * Démarre le timer
     */
    startTimer(buildingId) {
        const timer = this.timers.get(buildingId);
        if (!timer || timer.intervalId) return;

        timer.intervalId = setInterval(() => {
            this.updateTimerDisplay(buildingId);
        }, 1000);
    }

    /**
     * Arrête le timer
     */
    stopTimer(buildingId) {
        const timer = this.timers.get(buildingId);
        if (timer?.intervalId) {
            clearInterval(timer.intervalId);
            delete timer.intervalId;
        }
    }

    /**
     * Met à jour l'affichage du timer
     */
    updateTimerDisplay(buildingId) {
        const timer = this.timers.get(buildingId);
        const timerEl = document.getElementById(`delivery-timer-${buildingId}`);
        if (!timer || !timerEl) return;

        // Calculer le temps restant en décrémentant
        const elapsed = Math.floor((Date.now() - timer.startTime) / 1000);
        let remaining = timer.remaining - elapsed;

        if (remaining <= 0) {
            // Livraison terminée - rafraîchir le contenu
            timerEl.innerHTML = '<p class="delivery-timer">🚚 Livraison terminée</p>';
            this.stopTimer(buildingId);
            this.timers.delete(buildingId);

            // Déclencher une actualisation des données
            this.refreshPopupContent(buildingId);
        } else {
            timerEl.innerHTML = this.renderTimerHtml(remaining);
        }
    }

    /**
     * Rafraîchit le contenu de la popup
     */
    async refreshPopupContent(buildingId) {
        try {
            const response = await fetch(`/api/buildings/${buildingId}/popup-content`);
            if (response.ok) {
                const html = await response.text();
                const container = document.querySelector('.building-popup');
                if (container) {
                    container.outerHTML = html;
                }
            }
        } catch (e) {
            console.warn('Failed to refresh popup:', e);
        }
    }

    /**
     * Formate le HTML du timer
     */
    renderTimerHtml(seconds) {
        if (seconds <= 0) {
            return '<p class="delivery-timer">🚚 Livraison terminée</p>';
        }

        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        const formatted = hours > 0
            ? `${hours}h ${minutes}min ${secs}s`
            : `${minutes}min ${secs}s`;

        return `<p class="delivery-timer">🚚 Prochain convoi: <strong>${formatted}</strong></p>`;
    }

    /**
     * Pause tous les timers
     */
    pauseAllTimers() {
        for (const buildingId of this.timers.keys()) {
            this.stopTimer(buildingId);
        }
    }

    /**
     * Reprend le timer actif
     */
    resumeTimer() {
        if (this.currentBuildingId) {
            this.startTimer(this.currentBuildingId);
        }
    }
}

/**
 * Initialisation du manager
 * Attend que HTMX soit chargé
 */
function initDeliveryTimerManager() {
    if (typeof htmx === 'undefined') {
        // HTMX pas encore chargé, réessayer plus tard
        setTimeout(initDeliveryTimerManager, 100);
        return;
    }
    console.log('HTMX chargé, initialisation du DeliveryTimerManager');
    window.deliveryTimerManager = new DeliveryTimerManager();
}

// Démarrer l'initialisation
initDeliveryTimerManager();