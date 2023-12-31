let timerInterval;

// Function to update the current time based on the selected country's timezone
function updateTime() {
    var selectedCountry = document.getElementById("country").value;
    var currentTime = new Date().toLocaleString("en-US", { timeZone: selectedCountry });
    document.getElementById("current-time").innerHTML = "Current Time: " + currentTime;
}

// Function to start a countdown timer
function startTimer() {
    var minutes = document.getElementById("minutes").value;
    if (minutes > 0) {
        var seconds = minutes * 60;
        updateTimerDisplay(seconds);
        timerInterval = setInterval(function () {
            if (seconds > 0) {
                seconds--;
                updateTimerDisplay(seconds);
            } else {
                clearInterval(timerInterval);
                alert("Timer expired!");
            }
        }, 1000);
    } else {
        alert("Please enter a valid duration for the timer.");
    }
}

// Function to update the timer display with minutes and seconds
function updateTimerDisplay(seconds) {
    var minutesDisplay = Math.floor(seconds / 60);
    var secondsDisplay = seconds % 60;
    document.getElementById("timer-display").innerHTML = pad(minutesDisplay) + ":" + pad(secondsDisplay);
}

// Function to pad single-digit values with a leading zero
function pad(value) {
    return value < 10 ? "0" + value : value;
}

// Function to set an alarm for the current time plus one minute
function setAlarm() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes() + 1; // The alarm will ring in one minute
    alert("Alarm set for: " + hours + ":" + minutes);
}
