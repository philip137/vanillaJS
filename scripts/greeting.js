const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greetings = document.querySelector(".js-greetings");

const USER_LS = "userName",
      SHOWING_CN = "showing";

function handleSubmit(event) {
    event.preventDefault();
    const currentUserName = input.value;
    localStorage.setItem(USER_LS, currentUserName);
    paintGreetings(currentUserName);
    
}
function askName() {
    form.classList.add(SHOWING_CN)
    form.addEventListener("submit", handleSubmit)
}


function paintGreetings(text){
    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello ${text}`;
}

function getUserName() {
    const userName = localStorage.getItem(USER_LS);
    if (userName === null) {
        askName();
    } else {
        paintGreetings(userName);
    }
}
function init() {
    getUserName();
}
init();