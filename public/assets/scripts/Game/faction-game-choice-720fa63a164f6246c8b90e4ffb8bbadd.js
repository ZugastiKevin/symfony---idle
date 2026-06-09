/**
 * Gestion de la sélection visuelle des games et factions
 */

function initSelection() {

    // Gérer la sélection des games
    document.querySelectorAll('.game-card').forEach(card => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio) {
            radio.addEventListener('change', function () {
                document.querySelectorAll('.game-card').forEach(c => c.classList.remove('selected'));
                if (this.checked) {
                    card.classList.add('selected');
                }
            });
        }
    });

    // Gérer la sélection des factions
    document.querySelectorAll('.faction-card').forEach(card => {
        const radio = card.querySelector('input[type="radio"]');
        if (radio) {
            radio.addEventListener('change', function () {
                document.querySelectorAll('.faction-card').forEach(c => c.classList.remove('selected'));
                if (this.checked) {
                    card.classList.add('selected');
                }
            });
        }
    });

    // Au chargement, sélectionner la carte déjà cochée (si elle existe)
    document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
        const card = radio.closest('.game-card, .faction-card');
        if (card) {
            card.classList.add('selected');
        }
    });
}

// Attendre que le DOM soit prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSelection);
} else {
    initSelection();
}