const month = document.querySelector(".date h1");
const fullDate = document.querySelector(".date p");
const Days = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;


const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

month.innerText = months[monthInx];
fullDate.innerText = new Date().toDateString();

let dayss = "";

for (let i = firstDay; i > 0; i--) {
  dayss += `<div class="empty"></div>`;
}
for (let i = 1; i <= lastDay; i++) {
  if (i === new Date().getDate()) {
    dayss += `<div class="today">${i}</div>`;
  } else {
    dayss += `<div>${i}</div>`;
  }
}

Days.innerHTML = dayss;