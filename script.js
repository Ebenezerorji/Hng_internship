document.addEventListener('DOMContentLoaded', function() {
    
    const currentDate = new Date();
   
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfWeekElement.textContent = `Current Day: ${currentDayOfWeek}`;
});


function updateClock() {
    const clockElement = document.getElementById('clock');
    const currentDate = new Date();
    const hours = currentDate.getHours().toString().padStart(2, '0'); // Get hours in 24-hour format
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    const milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');
    
    const timeString = `${hours}${minutes}${seconds}${milliseconds}`;
    clockElement.textContent = timeString;
}

// Update the clock immediately and then every millisecond (1 millisecond)
updateClock();
setInterval(updateClock, 1);


