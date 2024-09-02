fetch("data.json")
  .then((response) => response.json())
  .then((json) =>
    json.forEach((element) => {
      addActivities(element);
    })
  );

function addActivities(data) {
  console.log(data);
  console.log(data.day);
  console.log(data.amount);
  const cardContainer = document.querySelector(".card-dataContainer");
  const singleDataPoint = document.createElement("div");
  singleDataPoint.classList.add("card-singleData");
  singleDataPoint.innerHTML = `
      <div class="dataPole" style="height:${data.amount * 3}px;"></div>
      <div class="dataInfo">$${data.amount}</div>
      <div class="dataName">${data.day}</div>
  `;
  cardContainer.appendChild(singleDataPoint);

  addEffects();
}

function addEffects() {
  const alldataPole = document.querySelectorAll(".dataPole");
  alldataPole.forEach((pole) => {
    let isClickedSecondTime = false;
    pole.addEventListener("click", (e) => {
      const dataInfo = e.target.offsetParent.children[1];
      if (isClickedSecondTime) {
        dataInfo.style.display = "none";
        e.currentTarget.style.backgroundColor = "hsl(10, 79%, 65%)";
        isClickedSecondTime = false;
      } else {
        e.currentTarget.style.backgroundColor = "hsl(186, 34%, 60%)";
        dataInfo.style.display = "block";
        isClickedSecondTime = true;
      }
    });
    pole.addEventListener("mouseover", (e) => {
      if (isClickedSecondTime) {
        return;
      } else {
        pole.style.cursor = "pointer";
        pole.style.backgroundColor = "hsl(10, 79%, 75%)";
        const dataInfo = e.target.offsetParent.children[1];
        dataInfo.style.display = "block";
      }
    });
    pole.addEventListener("mouseleave", (e) => {
      if (isClickedSecondTime) {
        return;
      } else {
        pole.style.backgroundColor = "hsl(10, 79%, 65%)";
        const dataInfo = e.target.offsetParent.children[1];
        dataInfo.style.display = "none";
      }
    });
  });
}
