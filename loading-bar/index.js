const counter = document.querySelector(".counter");

const bar = document.querySelector(".loading-bar-front");

let index = 0;

updateNumber();

function updateNumber() {
  counter.innerText = index + "%";
  bar.style.width = index + "%";
  index++;
  if (index < 101) {
    setTimeout(updateNumber, 20);
  }
}