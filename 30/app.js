const form = document.querySelector(".form");
const inputEmail = document.querySelector('input[type="email"]');
const errorMessage = document.querySelector(".error");

const card = document.querySelector(".card");
const modal = document.querySelector(".modal");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

function formValidation() {
  const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const inputValue = inputEmail.value;
  if (inputValue.match(regx) || inputValue === " ") {
    inputEmail.style.border = "1px solid hsl(0, 0%, 59%)";
    errorMessage.style.display = "none";
    inputEmail.value = "";

    card.style.display = "none";
    modal.style.display = "flex";
    const emailAddress = document.querySelector(".modal p span");
    emailAddress.textContent = inputValue;

    const modalBtn = document.querySelector(".modal .btn");
    modalBtn.addEventListener("click", () => {
      card.style.display = "flex";
      modal.style.display = "none";
    });
  } else {
    inputEmail.style.border = "1px solid hsl(354, 100%, 66%)";
    inputEmail.style.color = "hsl(4, 100%, 67%)";
    inputEmail.style.background = "hsl(4, 100%, 97%)";
    errorMessage.style.display = "block";
  }
}
