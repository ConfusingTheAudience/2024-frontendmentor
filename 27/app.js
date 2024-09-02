// inputV = name, lastname, password
const inputsToCheck = document.querySelectorAll(".inputV");
const errorIcons = document.querySelectorAll(".error-icon");
const errorMessage = document.querySelectorAll(".error-message");
const btn = document.querySelector(".rightSide-btn");

btn.addEventListener("click", () => {
  inputsToCheck.forEach((input) => {
    validation(input.value, input);
  });
  checkForComplete();
});

function validation(value, input) {
  // NAME, LASTNAME, PASSWORD
  if (value === "" || value === " ") {
    switch (input.name) {
      case "name":
        input.classList.remove("good");
        errorIcons[0].style.display = "block";
        errorMessage[0].style.display = "block";
        input.classList.add("wrong");
        break;
      case "lastname":
        input.classList.remove("good");
        errorIcons[1].style.display = "block";
        errorMessage[1].style.display = "block";
        input.classList.add("wrong");
        break;
      case "pass":
        input.classList.remove("good");
        errorIcons[3].style.display = "block";
        errorMessage[3].style.display = "block";
        input.classList.add("wrong");
        break;
    }
  } else {
    const amountOfErrors = errorIcons.length;
    for (let i = 0; i < amountOfErrors; i++) {
      errorIcons[i].style.display = "none";
      errorMessage[i].style.display = "none";
    }
    input.classList.remove("wrong");
    input.classList.add("good");
  }

  // FOR EMAIL
  const regx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const emailV = document.querySelector(".emailV");
  const emailIconV = document.querySelector(".error-iconEmail");
  const emailMessageV = document.querySelector(".error-messageEmail");
  if (emailV.value.match(regx)) {
    emailV.classList.remove("wrong");
    emailV.classList.add("good");
  } else {
    emailV.classList.remove("good");
    emailIconV.style.display = "block";
    emailMessageV.style.display = "block";
    emailV.classList.add("wrong");
  }
}

function checkForComplete() {
  const inputsAll = document.querySelectorAll(".inputs");
  if (
    inputsAll[0].classList.contains("good") &&
    inputsAll[1].classList.contains("good") &&
    inputsAll[2].classList.contains("good") &&
    inputsAll[3].classList.contains("good")
  ) {
    alert("Sended!");
  }
}
