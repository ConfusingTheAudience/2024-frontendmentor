const cardPage = document.querySelector(".card");
const thanksPage = document.querySelector(".voted");
const btn = document.querySelector(".btn");
const starsPoints = document.querySelector(".rated");
const stars = document.querySelectorAll(".rate-circle");

stars.forEach((star) => {
  star.addEventListener("click", (e) => {
    // clear the all previous selected stars
    for (i = 0; i < stars.length; i++) {
      stars[i].classList.remove("picked");
    }
    const clickedStar = e.currentTarget;
    const amountOfStar = clickedStar.innerHTML;

    // add current selected star
    star.classList.add("picked");

    // show thanks page and change vote value
    btn.addEventListener("click", () => {
      cardPage.classList.remove("show");
      thanksPage.classList.add("show");
      starsPoints.innerHTML = amountOfStar;
    });
  });
});
