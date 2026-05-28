window.switchView = function(viewId) {
    document.querySelectorAll('.sidebar-view').forEach(v => v.style.display = 'none');
    document.getElementById(viewId).style.display = 'flex';
};