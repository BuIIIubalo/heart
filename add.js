var vInterval;
function infiniteVibrate(duration, interval) {
    vInterval = setInterval(function() {
        vibrate(duration);
    }, interval);
}