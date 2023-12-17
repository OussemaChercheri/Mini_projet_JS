let timerInterval;

function updateTime() {
    var selectedCountry = document.getElementById("country").value;
    var currentTime = new Date().toLocaleString("en-US", { timeZone: selectedCountry });
    document.getElementById("current-time").innerHTML = "Current Time: " + currentTime;
}

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
                alert("Minuteur expiré!");
            }
        }, 1000);
    } else {
        alert("Veuillez entrer une durée valide pour le minuteur.");
    }
}

function updateTimerDisplay(seconds) {
    var minutesDisplay = Math.floor(seconds / 60);
    var secondsDisplay = seconds % 60;
    document.getElementById("timer-display").innerHTML = pad(minutesDisplay) + ":" + pad(secondsDisplay);
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}

function setAlarm() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes() + 1; // L'alarme sonnera dans une minute
    alert("Alarme réglée pour : " + hours + ":" + minutes);
}
