const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOLIST_LS = "toDoList";


function paintToDo(text){
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteButton);
    toDoList.appendChild(li);

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";

}

function loadToDoList() {
    let todos = localStorage.getItem(TODOLIST_LS);
    if (todos !== null) {

    }
}

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleSubmit);
}

init()