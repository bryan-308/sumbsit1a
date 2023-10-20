function calculateTimeUntil(targetDay, targetHour, targetMinute) {
    const currentDate = new Date();
    let daysUntilTarget = (targetDay - currentDate.getDay() + 7) % 7;
    const targetDate = new Date(currentDate);
    if (daysUntilTarget === 0 && currentDate.getHours() > targetHour) {
        daysUntilTarget = 7;
    }
    targetDate.setDate(currentDate.getDate() + daysUntilTarget);
    targetDate.setHours(targetHour, targetMinute, 0, 0);
    return targetDate - currentDate;
}

function updateSchedules() {
    const schedule = [
        { day: 1, hour: 10, minute: 0 },    // Monday 10:00 AM
        { day: 1, hour: 13, minute: 0 },    // Monday 1:00 PM
        { day: 2, hour: 7, minute: 30 },    // Tuesday 7:30 AM
        { day: 2, hour: 10, minute: 0 },    // Tuesday 10:00 PM
        { day: 2, hour: 13, minute: 0 },    // Tuesday 1:00 PM
        { day: 3, hour: 8, minute: 0 },     // Wednesday 8:00 AM
        { day: 3, hour: 11, minute: 0 },    // Wednesday 11:00 AM
        { day: 3, hour: 13, minute: 0 },    // Wednesday 1:00 PM
        { day: 4, hour: 8, minute: 0 },     // Thursday 8:00 AM
        { day: 4, hour: 13, minute: 0 },    // Thursday 1:00 PM
        { day: 5, hour: 7, minute: 30 },    // Friday 7:30 AM
        { day: 5, hour: 13, minute: 0 },    // Friday 1:00 PM
        { day: 6, hour: 8, minute: 0 }      // Saturday 8:00 AM
    ];

    for (let i = 0; i < schedule.length; i++) {
        const { day, hour, minute } = schedule[i];
        const eventTime = calculateTimeUntil(day, hour, minute);
        if (eventTime >= 0) {
            const days = Math.floor(eventTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((eventTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((eventTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((eventTime % (1000 * 60)) / 1000);
            let daysText = days === 1 ? "Day" : "Days"; // Singular or plural "day"
            let hoursText = hours === 1 ? "Hour" : "Hours"; // Singular or plural "hour"
            let minutesText = minutes === 1 ? "Minute" : "Minutes"; // Singular or plural "minute"
            let secondsText = seconds === 1 ? "Second" : "Seconds"; // Singular or plural "second"
            if (days === 0) {
                daysText = "Day";
            }
            if (hours === 0) {
                hoursText = "Hour";
            }
            if (minutes === 0) {
                minutesText = "Minute";
            }
            if (seconds === 0) {
                secondsText = "Second";
            }
            const scheduleDiv = document.getElementById(`schedule${i + 1}`);
            scheduleDiv.innerHTML = `${days} ${daysText} ${hours} ${hoursText} ${minutes} ${minutesText} ${seconds} ${secondsText}`;
        } 
    }
}

setInterval(updateSchedules, 1000);
updateSchedules();

function getDayName(day) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[day];
}
