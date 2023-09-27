function updateClock(clockId, timeZone) {
    const clock = document.getElementById(clockId);
    const options = { timeZone, hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const currentTime = new Date().toLocaleTimeString('en-US', options);
    clock.textContent = `${timeZone}: ${currentTime}`;
}

function updateWorldClocks() {
    // Update clocks for different time zones
    updateClock('clock1', 'America/New_York');
    updateClock('clock2', 'Europe/London');
    // Add more clock updates as needed
}

// Update clocks every second
setInterval(updateWorldClocks, 1000);

// Initial update
updateWorldClocks();
