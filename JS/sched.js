// Function to calculate time until a specific day and time
//function calculateTimeUntil(targetDay, targetHour, targetMinute) {
//    const currentDate = new Date();
//    let daysUntilTarget = (targetDay - currentDate.getDay() + 7) % 7; // Calculate days until target day
//    if (daysUntilTarget === 0 && currentDate.getHours() > targetHour) {
//        daysUntilTarget = 7; // If the target day has already passed this week, set it to next week
//    }
//    const targetDate = new Date(currentDate);
//    targetDate.setDate(currentDate.getDate() + daysUntilTarget);
//    targetDate.setHours(targetHour, targetMinute, 0, 0); // Set target time
//
//    return targetDate - currentDate;
//}

function calculateTimeUntil(targetDay, targetHour, targetMinute) {
  const currentDate = new Date();
  let daysUntilTarget = (targetDay - currentDate.getDay() + 7) % 7;
  const targetDate = new Date(currentDate);
  
  // Check if the target day has already passed this week
  if (daysUntilTarget === 0 && currentDate.getHours() > targetHour) {
    // Add 7 days to move to the next week
    daysUntilTarget = 7;
  }
  
  targetDate.setDate(currentDate.getDate() + daysUntilTarget);
  targetDate.setHours(targetHour, targetMinute, 0, 0);

  return targetDate - currentDate;
}

function updateSchedules() {
    // Customize your schedule here (day, hour, minute)
    const schedule = [
        { day: 1, hour: 9, minute: 0 },   // Monday 9:00 AM
        { day: 1, hour: 14, minute: 30 }, // Monday 2:30 PM
        { day: 2, hour: 9, minute: 0 },   // Tuesday 9:00 AM
        { day: 2, hour: 14, minute: 30 }, // Tuesday 2:30 PM
        { day: 2, hour: 17, minute: 0 },  // Tuesday 5:00 PM
        { day: 3, hour: 10, minute: 0 },  // Wednesday 10:00 AM
        { day: 3, hour: 14, minute: 30 }, // Wednesday 2:30 PM
        { day: 3, hour: 17, minute: 0 },  // Wednesday 5:00 PM
        { day: 4, hour: 11, minute: 0 },  // Thursday 11:00 AM
        { day: 4, hour: 16, minute: 30 }, // Thursday 4:30 PM
        { day: 5, hour: 8, minute: 0 },   // Friday 8:00 AM
        { day: 5, hour: 13, minute: 30 }, // Friday 1:30 PM
        { day: 6, hour: 13, minute: 0 }   // Saturday 1:00 PM
    ];

    for (let i = 0; i < schedule.length; i++) {
        const { day, hour, minute } = schedule[i];
        const eventTime = calculateTimeUntil(day, hour, minute);

        if (eventTime >= 0) {
            const days = Math.floor(eventTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((eventTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((eventTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((eventTime % (1000 * 60)) / 1000);

            let daysText = days === 1 ? "day" : "days"; // Singular or plural "day"
            let hoursText = hours === 1 ? "hour" : "hours"; // Singular or plural "hour"
            let minutesText = minutes === 1 ? "minute" : "minutes"; // Singular or plural "minute"
            let secondsText = seconds === 1 ? "second" : "seconds"; // Singular or plural "second"

            if (days === 0) {
                daysText = "day";
            }
            if (hours === 0) {
                hoursText = "hour";
            }
            if (minutes === 0) {
                minutesText = "minute";
            }
            if (seconds === 0) {
                secondsText = "second";
            }

            const scheduleDiv = document.getElementById(`schedule${i + 1}`);
            scheduleDiv.innerHTML = `${days} ${daysText} ${hours} ${hoursText} ${minutes} ${minutesText} ${seconds} ${secondsText}`;
        } else {
      // Countdown has reached zero, display event happening message
      const scheduleDiv = document.getElementById(`schedule${i + 1}`);
      scheduleDiv.innerHTML = `Late ka na ata`;
        }
    }
}

// Update the schedules every second
setInterval(updateSchedules, 1000);

// Initial update
updateSchedules();

// Function to get the day name
function getDayName(day) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[day];
}
