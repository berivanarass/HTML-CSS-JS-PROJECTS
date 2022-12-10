//define day, hour, minute and second 
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2023 00:00:00").getTime(); //define new year time

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime(); //get current time
  const gap = newYearTime - now; //define countdown by subtracting current date from new year date

  const second = 1000; //1 second equals 1000 milliseconds
  const minute = second * 60; //1 minute equals second*60
  const hour = minute * 60; //1 hour equals minute*60
  const day = hour * 24; //1 day equals hour*24
//Let's calculate the remaining days, hours, minutes and seconds with mathematical operations and assign them to variables
  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(updateCountdown, 1000)
}