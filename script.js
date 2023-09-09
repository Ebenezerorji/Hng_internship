function updateUTCTime() {
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentDate = new Date();
    const hours = currentDate.getUTCHours().toString().padStart(2, '0');
    const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getUTCMilliseconds().toString().padStart(3, '0');

    const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    timeElement.textContent = timeString;
}

// Update the UTC time immediately and then every millisecond (1 millisecond)
updateUTCTime();
setInterval(updateUTCTime, 1);
