// for desktop
const input = document.querySelector(".form-input");
const btn = document.querySelector(".arrow");
const erorrIcon = document.querySelector(".arrow-error");
const erorrMessage = document.querySelector(".error-message");

btn.addEventListener("click", () => {
  formValidation();
});

function formValidation() {
  const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (input.value.match(regx)) {
    input.classList.remove("error-input");
    input.classList.add("valid-input");
    erorrIcon.style.display = "none";
    erorrMessage.style.display = "none";
  } else {
    input.classList.add("error-input");
    input.classList.remove("valid-input");
    erorrIcon.style.display = "block";
    erorrMessage.style.display = "block";
  }
}

// for mobile
const inputForMobile = document.querySelector(".MobileForm-input");
const btnForMobile = document.querySelector(".cardMobileArrow");
const erorrIconForMobile = document.querySelector(".cardMobileArrow-error");
const erorrMessageForMobile = document.querySelector(
  ".cardMobileArrowError-message"
);

btnForMobile.addEventListener("click", () => {
  formValidationForMobile();
});

function formValidationForMobile() {
  const regxForMobile = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (inputForMobile.value.match(regxForMobile)) {
    inputForMobile.classList.remove("error-input");
    inputForMobile.classList.add("valid-input");
    erorrIconForMobile.style.display = "none";
    erorrMessageForMobile.style.display = "none";
  } else {
    inputForMobile.classList.add("error-input");
    inputForMobile.classList.remove("valid-input");
    erorrIconForMobile.style.display = "block";
    erorrMessageForMobile.style.display = "block";
  }
}
