const counter = document.querySelector("#counter");
const mark = document.querySelector("#mark");
const notification = document.querySelectorAll(".notification");
const tag = document.querySelectorAll(".tag");

mark.addEventListener("click", () => {
  counter.textContent = 0;
  notification.forEach((notif) => {
    notif.classList.remove("unread");
  });
  tag.forEach((t) => {
    t.classList.remove("unreadTag");
  });
});

notification.forEach((singleNotification) => {
  singleNotification.addEventListener("click", (e) => {
    let ifHaveBeenUnreaded = e.currentTarget.classList.contains("unread");
    let counterNumber = counter.textContent;
    if (counterNumber > 0 && ifHaveBeenUnreaded) {
      const currentNotification = e.currentTarget;
      const currentTag = e.currentTarget.children[1].children[0];
      currentNotification.classList.remove("unread");
      currentTag.classList.remove("unreadTag");
      counterNumber = counterNumber - 1;
      counter.textContent = counterNumber;
    } else {
      return;
    }
  });
});
