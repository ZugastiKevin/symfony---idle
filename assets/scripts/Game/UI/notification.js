export function showNotification(message, type = 'info') {

    const notif = document.createElement('div');
    notif.className = `notif notif-${type}`;
    notif.textContent = message;

    document.body.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}