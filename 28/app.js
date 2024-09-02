const form = document.querySelector(".form");
const inputEmail = document.querySelector('input[type="email"]');
const errorMessage = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

function formValidation() {
  const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (inputEmail.value.match(regx) || inputEmail.value === " ") {
    inputEmail.style.border = "1px solid hsl(0, 0%, 59%)";
    errorMessage.style.display = "none";
    alert("Submitted");
    inputEmail.value = "";
  } else {
    inputEmail.style.border = "1px solid hsl(354, 100%, 66%)";
    errorMessage.style.display = "block";
  }
}
