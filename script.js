document.addEventListener('DOMContentLoaded', function() {
    
    const currentDate = new Date();
   
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    dayOfWeekElement.textContent = `Current Day: ${currentDayOfWeek}`;
    
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    utcTimeElement.textContent = `Current UTC Time: ${currentDate.toISOString()}`;
});
