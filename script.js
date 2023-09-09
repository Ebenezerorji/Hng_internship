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
    const timeString = currentDate.toLocaleTimeString(); 
    clockElement.textContent = timeString; // Update the content of the clock element
}


updateClock();
setInterval(updateClock, 1000);

