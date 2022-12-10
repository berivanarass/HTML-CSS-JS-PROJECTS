const starsEl = document.querySelectorAll(".fa-star"); //defines the stars
const emojisEl = document.querySelectorAll(".far"); //defines the emojis
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"]; //Defines emoji colors by index number.

updateRating(0); //Based on index 0 when first opened. (angry face with 1 star)

//adds click event to the stars
starsEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
    updateRating(index);
  });
});

//paints the star as gold as 1 more than the index number of the clicked star.
function updateRating(index) {
  starsEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });

  //shows the appropriate emoji based on the selected number of stars.
  emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 50}px)`;
    emojiEl.style.color = colorsArray[index]; //calls and uses 'colorsArray' according to its index number.
  });
}