const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const progressEl = document.querySelector(".progress-bar-front");

const stepsEl = document.querySelectorAll(".step");

let currentChecked = 1;

//when click the next button; the current check increases until come the last step.
nextEl.addEventListener("click", () => {
  currentChecked++;
  if (currentChecked > stepsEl.length) {
    currentChecked = stepsEl.length;
  }
  updateStepProgress();
});

prevEl.addEventListener("click", () => {
  currentChecked--;
  if (currentChecked < 1) {
    currentChecked = 1;
  }
  updateStepProgress();
});
//As it progresses, it increases the number of steps accordingly. Writes "start" the first step and "final" the last step.
function updateStepProgress() {
  stepsEl.forEach((stepEl, idx) => {
    if (idx < currentChecked) {
      stepEl.classList.add("checked");
      stepEl.innerHTML = `
      <i class="fas fa-check"></i>
      <small>${
        idx === 0
          ? "Start"
          : idx === stepsEl.length - 1
          ? "Final"
          : "Step " + idx
      }</small>
      `;
    } else {
      stepEl.classList.remove("checked");
      stepEl.innerHTML = `
      <i class="fas fa-times"></i>
      `;
    }
  });

  const checkedNumber = document.querySelectorAll(".checked");

  progressEl.style.width =
    ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";

  if (currentChecked === 1) {//if the current step is in first step; previous button is disabled.
    prevEl.disabled = true;
  } else if (currentChecked === stepsEl.length) {//if the current step is in last step; next button is disabled.
    nextEl.disabled = true;
  } else {
    //in the other cases, both buttons are enabled.
    prevEl.disabled = false;
    nextEl.disabled = false;
  }
}