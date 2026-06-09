/**
 * Gestionnaire de timers de livraison
 * - Calcule le temps côté client
 * - Ne fait de requête que si la popup est ouverte
 */

class DeliveryTimerManager {
    constructor() {
        this.timers = new Map();
        this.init();
    }

    init() {
        console.log('DeliveryTimerManager initialisé');
        // Vérifier les popups toutes les 500ms
        setInterval(() => this.checkForPopups(), 500);
    }

    checkForPopups() {
        // Chercher tous les timers dans le DOM
        const timerElements = document.querySelectorAll('[id^="delivery-timer-"]');

        timerElements.forEach(timerEl => {
            const buildingId = timerEl.id.replace('delivery-timer-', '');

            if (!this.timers.has(buildingId)) {
                console.log('Timer détecté pour building:', buildingId);
                this.initTimer(buildingId);
            }
        });
    }

    initTimer(buildingId) {
        const timerEl = document.getElementById(`delivery-timer-${buildingId}`);
        if (!timerEl) return;

        const remaining = parseInt(timerEl.dataset.timeRemaining || '0');
        console.log(`Timer building ${buildingId}: ${remaining}s`);

        this.timers.set(buildingId, {
            remaining: remaining,
            startTime: Date.now(),
            intervalId: null
        });

        this.startTimer(buildingId);
    }

    startTimer(buildingId) {
        const timer = this.timers.get(buildingId);
        if (!timer || timer.intervalId) return;

        timer.intervalId = setInterval(() => {
            this.updateTimerDisplay(buildingId);
        }, 1000);
    }

    stopTimer(buildingId) {
        const timer = this.timers.get(buildingId);
        if (timer?.intervalId) {
            clearInterval(timer.intervalId);
            delete timer.intervalId;
        }
    }

    updateTimerDisplay(buildingId) {
        const timer = this.timers.get(buildingId);
        const timerEl = document.getElementById(`delivery-timer-${buildingId}`);
        if (!timer || !timerEl) return;

        const elapsed = Math.floor((Date.now() - timer.startTime) / 1000);
        let remaining = timer.remaining - elapsed;

        if (remaining <= 0) {
            timerEl.innerHTML = '<p class="delivery-timer">🚚 Livraison terminée</p>';
            this.stopTimer(buildingId);
            this.timers.delete(buildingId);
            this.refreshPopupContent(buildingId);
        } else {
            timerEl.innerHTML = this.renderTimerHtml(remaining);
        }
    }

    async refreshPopupContent(buildingId) {
        try {
            const response = await fetch(`/api/buildings/${buildingId}/popup-content`);
            if (response.ok) {
                const html = await response.text();
                // Trouver le conteneur de popup
                const popupContainer = document.querySelector('.building-popup');
                if (popupContainer) {
                    // Extraire le contenu du template
                    const temp = document.createElement('div');
                    temp.innerHTML = html;
                    const newContent = temp.querySelector('.building-popup') || temp.firstChild;
                    popupContainer.innerHTML = '';
                    popupContainer.appendChild(newContent.cloneNode(true));
                }
            }
        } catch (e) {
            console.warn('Failed to refresh popup:', e);
        }
    }

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
}

// Attendre que le DOM soit prêt
document.addEventListener('DOMContentLoaded', () => {
    // Attendre que HTMX soit chargé
    const checkHtmx = () => {
        if (typeof htmx !== 'undefined') {
            console.log('HTMX chargé, création du DeliveryTimerManager');
            window.deliveryTimerManager = new DeliveryTimerManager();
        } else {
            setTimeout(checkHtmx, 50);
        }
    };
    checkHtmx();
});