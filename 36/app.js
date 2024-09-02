const navItem = document.querySelectorAll(".navItem");

let isMobileOpened = false;

navItem.forEach((singleNavItem) => {
  singleNavItem.addEventListener("mouseenter", (e) => {
    let currentLink = e.target.children[0];
    currentLink.style.color = "hsl(0, 0%, 8%)";
  });
  singleNavItem.addEventListener("mouseleave", (e) => {
    let currentLink = e.target.children[0];
    currentLink.style.color = "hsl(0, 0%, 41%)";
  });
  singleNavItem.addEventListener("click", (e) => {
    let clickedLink = e.target;
    let dropdownToShow = e.currentTarget.children[1];
    clickedLink.classList.toggle("addTaggedLinkColor");
    if (dropdownToShow) {
      dropdownToShow.classList.toggle("showDropdown");
    }
    let currentArrow = e.currentTarget.children[0].children[0];
    let arrowStan = currentArrow.dataset.stan;
    if (arrowStan === "closed") {
      currentArrow.dataset.stan = "opened";
      currentArrow.src = "images/icon-arrow-up.svg";
    } else {
      currentArrow.dataset.stan = "closed";
      currentArrow.src = "images/icon-arrow-down.svg";
    }
  });
});

const mobileNavIcon = document.querySelector(".mobile-navIcon");
const mobileMenu = document.querySelector(".mobile-menu");
const mask = document.querySelector(".mask");
mobileNavIcon.addEventListener("click", () => {
  if (!isMobileOpened) {
    mobileMenu.classList.remove("slide-out");
    mobileMenu.classList.add("slide-in");
    mask.style.display = "block";
    mobileNavIcon.src = "images/icon-close-menu.svg";
    mobileMenu.classList.add("show");
    isMobileOpened = true;
  } else {
    mobileMenu.classList.remove("slide-in");
    mobileMenu.classList.add("slide-out");
    mask.style.display = "none";
    mobileNavIcon.src = "images/icon-menu.svg";
    isMobileOpened = false;
    setTimeout(remover, 500);
  }

  // function to delay taking off mobile menu's to get into animation close
  function remover() {
    mobileMenu.classList.remove("show");
  }
});

// resize event to collapse mobile nav while screen is resized manually
window.addEventListener("resize", (e) => {
  width = e.target.outerWidth;
  if (width > 1200) {
    mobileMenu.classList.remove("show");
    isMobileOpened = false;
    mobileNavIcon.src = "images/icon-menu.svg";
    mask.style.display = "none";
  }
});
