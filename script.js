function updateClock(timeZone, elementId) {
    const now = new Date().toLocaleString("en-US", { timeZone });
    document.getElementById(elementId).textContent = now;
}

function updateWorldClock() {
    updateClock("America/New_York", "new-york-time");
    updateClock("Europe/London", "london-time");
    updateClock("Asia/Tokyo", "tokyo-time");
}

// Update the clock every second
setInterval(updateWorldClock, 1000);

// Initial update
updateWorldClock();
