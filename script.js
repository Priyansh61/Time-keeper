const diwali = "19 Oct 2022"

daysEL = document.getElementById("days");
hoursEL = document.getElementById("hours");
minutesEL = document.getElementById("minutes");
secondsEL = document.getElementById("seconds");

function countdown() {
    const curr = new Date();
    const event_date = new Date(diwali);
    seconds = (event_date - curr) / 1000
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    seconds = Math.floor(seconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minutesEL.innerHTML = minutes;
    secondsEL.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);