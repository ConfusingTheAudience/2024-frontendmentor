const togglePlace = document.querySelectorAll(".faq-carousel");

togglePlace.forEach((faqCarousel) => {
  faqCarousel.addEventListener("click", (e) => {
    
    // target paragraph
    const faqText = e.currentTarget.nextElementSibling;
    faqText.classList.toggle("closed");

    // target img
    const iconChanger = e.currentTarget.children[1];

    // change the img source
    if (faqText.classList.length > 0) {
      iconChanger.src = "images/icon-plus.svg";
    } else {
      iconChanger.src = "images/icon-minus.svg";
    }
  });
});
