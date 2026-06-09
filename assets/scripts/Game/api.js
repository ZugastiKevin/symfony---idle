export function buildRequest(lat, lng, typeId) {
    return fetch('/api/build', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lat: lat, lng: lng, type_id: typeId })
    });
}

export function getBuildings() {
    return fetch('/api/map-data')
        .then(res => res.json());
}

export function getBuildingCosts(buildingTypeId) {
    return fetch(`/api/building-types/${buildingTypeId}/costs`)
        .then(res => res.json());
}

export function upgradeBuilding(buildingId) {
    return fetch(`/api/building/${buildingId}/upgrade`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
}

export function getUpgradeInfo(buildingId) {
    return fetch(`/api/building/${buildingId}/upgrade-info`);
}