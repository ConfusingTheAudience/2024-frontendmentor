btnOpen = document.querySelector("#btn-open");
btnClose = document.querySelector("#btn-close");
mobileNav = document.querySelector("#mobile-nav");
mask = document.querySelector("#mask");
body = document.querySelector("body");

btnOpen.addEventListener("click", () => {
  btnOpen.classList.add("hidden");
  btnClose.classList.remove("hidden");
  mobileNav.classList.remove("hidden");

  mask.classList.add("block");
  mask.classList.remove("hidden");
  mask.classList.add("w-full");
  mask.classList.add("h-fulls");
  mask.classList.add("absolute");
  mask.classList.add("bg-blurBg");
  body.classList.add("overflow-hidden");
  body.classList.remove("overflow-visible");
});
btnClose.addEventListener("click", () => {
  btnClose.classList.add("hidden");
  btnOpen.classList.remove("hidden");
  mobileNav.classList.add("hidden");
  body.classList.add("overflow-visible");
  body.classList.remove("overflow-hidden");
  mask.classList.add("hidden");
  mask.classList.remove("block");
});

// liveserver
// responsive
// 1440px
// 375px
