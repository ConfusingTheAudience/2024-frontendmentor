const form = document.querySelector(".form");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const errorMessage = document.querySelectorAll(".error");

const labelDay = document.querySelector(".dayLabel");
const labelMonth = document.querySelector(".monthLabel");
const labelYear = document.querySelector(".yearLabel");

const resultInfo = document.querySelectorAll(".resultInfo");
const resultHideInfo = document.querySelectorAll(".resultHideInfo");

form.addEventListener("submit", (e) => {
  // get current Date
  const date = new Date();
  let currentDay = date.getDate();
  let currentMonth = date.getMonth() + 1; // month is 0 based - januray 0
  let currentYear = date.getFullYear();

  // get inputs value date
  let inputDayValue = inputDay.value;
  let inputMonthValue = inputMonth.value;
  let inputYearValue = inputYear.value;

  e.preventDefault();
  isDayCorrect(inputDayValue);
  isMonthCorrect(inputMonthValue);
  isYearCorrect(inputYearValue);
  if (
    inputDay.style.borderColor === "green" &&
    inputMonth.style.borderColor === "green" &&
    inputYear.style.borderColor === "green"
  ) {
    substractAge(
      currentYear,
      inputYearValue,
      currentMonth,
      inputMonthValue,
      currentDay,
      inputDayValue
    );
  }
});

const isDayCorrect = (inputDayValue) => {
  // day errors
  if (inputDayValue === "" || inputDayValue > 31) {
    inputDay.style.border = "1px solid hsl(0, 100%, 67%)";
    labelDay.style.color = "hsl(0, 100%, 67%)";
    errorMessage[0].style.display = "block";
    return false;
  } else {
    labelDay.style.color = "hsl(0, 1%, 44%)";
    inputDay.style.borderColor = "green";
    errorMessage[0].style.display = "none";
    return true;
  }
};

const isMonthCorrect = (inputMonthValue) => {
  // month errors
  if (inputMonthValue === "" || inputMonthValue > 12) {
    inputMonth.style.border = "1px solid hsl(0, 100%, 67%)";
    labelMonth.style.color = "hsl(0, 100%, 67%)";
    errorMessage[1].style.display = "block";
    return false;
  } else {
    labelMonth.style.color = "hsl(0, 1%, 44%)";
    inputMonth.style.borderColor = "green";
    errorMessage[1].style.display = "none";
    return true;
  }
};

const isYearCorrect = (inputYearValue) => {
  // year errors
  if (inputYearValue === "" || inputYearValue > year) {
    inputYear.style.border = "1px solid hsl(0, 100%, 67%)";
    labelYear.style.color = "hsl(0, 100%, 67%)";
    errorMessage[2].style.display = "block";
    return false;
  } else {
    labelYear.style.color = "hsl(0, 1%, 44%)";
    inputYear.style.borderColor = "green";
    errorMessage[2].style.display = "none";
    return true;
  }
};

const substractAge = (
  currentYear,
  inputYearValue,
  currentMonth,
  inputMonthValue,
  currentDay,
  inputDayValue
) => {
  let newYear = Math.abs(currentYear - inputYearValue);

  let newMonth = 0;
  if (currentMonth >= inputMonthValue) {
    newMonth = currentMonth - inputMonthValue;
  } else {
    newYear--;
    newMonth = 12 + currentMonth - inputMonthValue;
  }

  let newDay = 0;
  if (currentDay >= inputDayValue) {
    newDay = currentDay - inputDayValue;
  } else {
    newMonth--;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    if (newMonth < currentMonth) {
      newDay++;
    }
  }

  resultHideInfo.forEach((result) => {
    result.style.display = "none";
  });

  resultInfo[0].innerHTML = newYear;
  resultInfo[1].innerHTML = newMonth;
  resultInfo[2].innerHTML = newDay;
};
