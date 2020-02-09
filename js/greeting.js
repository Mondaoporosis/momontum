const usernameForm = document.querySelector(".js-usernameForm"),
  input = usernameForm.querySelector("input"),
  greeting = document.querySelector(".js-greetingsText"),
  nameChangeBtn = document.querySelector(".js-changeName");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  usernameForm.classList.add(SHOWING_CN);
  input.value = "";
  usernameForm.addEventListener("submit", handleSubmit);
}

function changeName() {
  greeting.classList.remove(SHOWING_CN);
  nameChangeBtn.classList.remove(SHOWING_CN);

  localStorage.removeItem(USER_LS);
  loadName();
}

function paintGreeting(text) {
  usernameForm.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  nameChangeBtn.classList.add(SHOWING_CN);
  nameChangeBtn.addEventListener("click", changeName);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
