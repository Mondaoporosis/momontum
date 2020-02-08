const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title");

function getTime() {
  const date = new Date();
  const hrs = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();
  clockTitle.innerText = `${hrs > 9 ? hrs : "0" + hrs}:${
    mins > 9 ? mins : "0" + mins
  }:${secs > 9 ? secs : "0" + secs}`;
}

function init() {
  setInterval(getTime, 1000);
}
init();
