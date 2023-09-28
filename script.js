function updateClock(timeZone, elementId) {
    const options = { timeZone, hour12: false };
    const now = new Date().toLocaleTimeString("en-US", options);

    document.getElementById(elementId).textContent = now;
}

function updateWorldClock() {
    updateClock("America/New_York", "new-york-time");
    updateClock("Europe/London", "london-time");
    updateClock("Asia/Tokyo", "tokyo-time");
}


setInterval(updateWorldClock, 1000);


updateWorldClock();

console.log("Script loaded");
