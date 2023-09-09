document.addEventListener('DOMContentLoaded', function() {
    
    const currentDate = new Date();
   
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfWeekElement.textContent = `Current Day: ${currentDayOfWeek}`;
    

});
function updateClock() {
    const clockElement = document.getElementById('clock');
    const currentdate = new Date();
    const timeString = currentdate.toLocaleTimeString() + '.' + currentdate.getMilliseconds().toString().padStart(3, '0'); 
    clockElement.textContent = timeString; // Update the content of the clock element
}


updateClock();
setInterval(updateClock, 100);

