const btn = document.querySelector(".person-share");
const img = document.querySelector(".img");
const pattern = document.querySelector(".addPatern");

btn.addEventListener("mouseenter", () => {
  img.src = "images/icon-share2.svg";
});

btn.addEventListener("mouseleave", () => {
  img.src = "images/icon-share.svg";
});

btn.addEventListener("click", () => {
  pattern.classList.toggle("show");
});
