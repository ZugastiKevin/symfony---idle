---
name: event-stream-delivery-system
description: Système d'écouteurs basé sur des événements pour les livraisons de ressources
metadata:
  type: project
---

# Système d'événements pour les livraisons de ressources

## Architecture

### Backend (Symfony)

1. **ResourceDeliveryEvent** (`src/Event/ResourceDeliveryEvent.php`)
   - Événement déclenché pour les changements de statut de livraison
   - Types: `delivery.started`, `delivery.completed`, `delivery.progress`

2. **EventStreamService** (`src/Service/EventStreamService.php`)
   - Service central qui écoute les événements et stocke les données en mémoire
   - Fournit une API pour récupérer les événements non lus

3. **ResourceDeliveryEventListener** (`src/EventListener/ResourceDeliveryEventListener.php`)
   - Écoute les changements de statut de ResourceDelivery
   - Émet les événements appropriés

4. **ResourceTransportService** (modifié)
   - Émet les événements quand les livraisons démarrent, progressent ou se terminent

5. **EventStreamController** (`src/Controller/Api/EventStreamController.php`)
   - `/api/events` - Récupère les événements non lus
   - `/api/deliveries/state` - Récupère l'état complet des livraisons

### Frontend (JavaScript)

1. **building.js** (modifié)
   - `initEventStream()` - Initialise le polling des événements
   - `closeEventStream()` - Ferme le polling
   - `fetchEvents()` - Polling toutes les 5 secondes
   - Gestionnaires d'événements: `handleDeliveryStarted`, `handleDeliveryCompleted`, `handleDeliveryProgress`

## Flux de données

```
[ResourceDelivery] --(Doctrine Event)--> [ResourceDeliveryEventListener]
                                                    |
                                                    v
                                        [EventStreamService.emitEvent()]
                                                    |
                                                    v
                                    [stockage en mémoire: latestEvents[playerId]]
                                                    |
                                                    v
                            [Frontend polling /api/events?since=timestamp]
                                                    |
                                                    v
                                        [handleEvent() dans building.js]
                                                    |
                                                    v
                                    [updateDeliveryTimerDisplay()]
```

## Configuration

- Le polling est effectué toutes les 5 secondes
- Les événements sont stockés en mémoire (à améliorer avec Redis pour la production)
- Chaque événement contient: type, deliveryId, resource, quantity, buildingId, progress, status

## À améliorer

- Utiliser Redis pour stocker les événements (persistance)
- Implémenter SSE avec ReactPHP pour une vraie communication unidirectionnelle serveur->client
- Ajouter un système de reconnexion automatique avec backoff