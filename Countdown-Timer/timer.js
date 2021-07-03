const dayCount = document.getElementById("day");
const hourCount = document.getElementById("hour");
const minCount = document.getElementById("min");
const secCount = document.getElementById("sec");

const target = "1 Jan 2022";

function countdown() {

    const targetDate = new Date(target);
    const currentDate = new Date();

    var diff = (targetDate - currentDate) / 1000;

    // to find no of days
    var days = Math.floor(diff / 3600 / 24);

    // to find no of hours left along with days
    var hours = Math.floor(diff / 3600) % 24;

    // to find no of minutes left along with days and  hours
    var minutes = Math.floor(diff / 60) % 60;

    // to find no of seconds left along with days , hours and minutes
    var seconds = Math.floor(diff) % 60;

    console.log(days, hours, minutes, seconds);

    dayCount.innerHTML = days;
    hourCount.innerHTML = lastMoment(hours);
    minCount.innerHTML = lastMoment(minutes);
    secCount.innerHTML = lastMoment(seconds);

}

// function to handle last few moments from the target date
function lastMoment(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);

