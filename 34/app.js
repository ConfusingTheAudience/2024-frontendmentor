const form = document.querySelector(".form");
const rightSide = document.querySelector(".right-side");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal .btn");

// name real-time adder
const nameInput = document.querySelector("#name");
const cardOwner = document.querySelector("#card-owner");
nameInput.addEventListener("keyup", (e) => {
  cardOwner.textContent = "";
  let currentValue = e.target.value;
  cardOwner.textContent = currentValue;
});

// card number real-time adder
const cardNumberInput = document.querySelector("#cardNumber");
const cardNumber = document.querySelector("#card-numbers");
cardNumberInput.addEventListener("keyup", (e) => {
  cardNumber.textContent = "";
  let currentValue = e.target.value;
  // to prevent error of null
  if (currentValue.length > 1) {
    let newCurrentValue = currentValue.match(/.{1,4}/g);
    newCurrentValue = newCurrentValue.join(" ");
    cardNumber.textContent = newCurrentValue;
  } else {
    return;
  }
});

// expireDate real-time adder
const expDateFirstInput = document.querySelector("#expDateFirst");
const cardDate1 = document.querySelector("#card-date1");
expDateFirstInput.addEventListener("keyup", (e) => {
  cardDate1.textContent = "";
  let currentValue = e.target.value;
  cardDate1.textContent = currentValue;
});

const expDateSecondInput = document.querySelector("#expDateSec");
const cardDate2 = document.querySelector("#card-date2");
expDateSecondInput.addEventListener("keyup", (e) => {
  cardDate2.textContent = "";
  let currentValue = e.target.value;
  cardDate2.textContent = currentValue;
});

// cvc real-time adder
const cvcInput = document.querySelector("#cvcCode");
const cvc = document.querySelector("#cvc");
cvcInput.addEventListener("keyup", (e) => {
  cvc.textContent = "";
  let currentValue = e.target.value;
  cvc.textContent = currentValue;
});

// validation errors
const errorForName = document.querySelector("#errorForName");
const errorNumber = document.querySelector("#errorNumber");
const errorExpDate = document.querySelector("#errorExpDate");
const errorCvc = document.querySelector("#errorCvc");

function nameCheck() {
  const regex = "[0-9]";
  if (
    nameInput.value === "" ||
    nameInput.value === " " ||
    nameInput.value.match(regex)
  ) {
    errorForName.style.display = "block";
    nameInput.style.border = "1px solid var(--error-color)";
    return false;
  } else {
    errorForName.style.display = "none";
    nameInput.style.border = "1px solid green";
    return true;
  }
}
function cardNumberCheck() {
  const regex = "[^0-9]";
  if (
    cardNumberInput.value === "" ||
    cardNumberInput.value === " " ||
    cardNumberInput.value.match(regex) ||
    cardNumberInput.value.length !== 16
  ) {
    errorNumber.style.display = "block";
    cardNumberInput.style.border = "1px solid var(--error-color)";
    return false;
  } else {
    errorNumber.style.display = "none";
    cardNumberInput.style.border = "1px solid green";
    return true;
  }
}
function expDateCheck() {
  if (
    expDateFirstInput.value === "" ||
    expDateFirstInput.value === " " ||
    expDateSecondInput.value === "" ||
    expDateSecondInput.value === " " ||
    expDateFirstInput.value.length !== 2 ||
    expDateSecondInput.value.length !== 2
  ) {
    errorExpDate.style.display = "block";
    expDateFirstInput.style.border = "1px solid var(--error-color)";
    expDateSecondInput.style.border = "1px solid var(--error-color)";
    return false;
  } else {
    errorExpDate.style.display = "none";
    expDateFirstInput.style.border = "1px solid green";
    expDateSecondInput.style.border = "1px solid green";
    return true;
  }
}
function cvcCheck() {
  if (
    cvcInput.value === "" ||
    cvcInput.value === " " ||
    cvcInput.value.length !== 3
  ) {
    errorCvc.style.display = "block";
    cvcInput.style.border = "1px solid var(--error-color)";
    return false;
  } else {
    errorCvc.style.display = "none";
    cvcInput.style.border = "1px solid green";
    return true;
  }
}

// form submit and modal button action
form.addEventListener("submit", (e) => {
  e.preventDefault();
  nameCheck();
  cardNumberCheck();
  expDateCheck();
  cvcCheck();
  if (nameCheck() && cardNumberCheck() && expDateCheck() && cvcCheck()) {
    checkValidation();
  }
});

modalBtn.addEventListener("click", () => {
  rightSide.classList.remove("hide");
  modal.classList.add("hide");
  clearAll();
});

function checkValidation() {
  rightSide.classList.add("hide");
  modal.classList.remove("hide");
}
function clearAll() {
  cardOwner.textContent = "Jane Appleseed";
  cardNumber.textContent = "0000 0000 0000 0000";
  cardDate1.textContent = "00";
  cardDate2.textContent = "00";
  cvc.textContent = "000";

  // need to get it once again because of state changed
  const formForClear = document.querySelector(".form");
  formForClear.reset();

  nameInput.style.border = "1px solid var(--text-color)";
  cardNumberInput.style.border = "1px solid var(--text-color)";
  expDateFirstInput.style.border = "1px solid var(--text-color)";
  expDateSecondInput.style.border = "1px solid var(--text-color)";
  cvcInput.style.border = "1px solid var(--text-color)";
}
