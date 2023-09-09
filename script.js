document.addEventListener('DOMContentLoaded', function() {
    // Get the current date and time
    const currentDate = new Date();
    
    // Get the day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    
    // Display the current day of the week
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfWeekElement.textContent = `Current Day: ${currentDayOfWeek}`;
function updateUTCTime() {
    const timeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentDate = new Date();
    const hours = currentDate.getUTCHours().toString().padStart(2, '0');
    const minutes = currentDate.getUTCMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getUTCSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getUTCMilliseconds().toString().padStart(3, '0');

    const timeString = `${hours}${minutes}${seconds}${milliseconds}`;
    timeElement.textContent = timeString;
}

// Update the UTC time immediately and then every millisecond (1 millisecond)
updateUTCTime();
setInterval(updateUTCTime, 1);
