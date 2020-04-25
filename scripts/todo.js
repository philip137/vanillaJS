const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOLIST_LS = "toDoList";
const todoStroage = [];

function saveToDoStorage() {
    localStorage.setItem(TODOLIST_LS, JSON.stringify(todoStroage));
}

function paintToDo(text, id=""){
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "❌";
    deleteButton.className = "delBtn"
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(deleteButton);
    li.appendChild(span);
    
    if (id === "") id = new Date().getTime();
    li.id = id;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: id
    }
    todoStroage.push(toDoObj);
    saveToDoStorage();
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
        const parsedToDos = JSON.parse(todos);
        parsedToDos.forEach(function(toDo){paintToDo(toDo.text, toDo.id);})
    }
}

function init() {
    loadToDoList();
    toDoForm.addEventListener("submit", handleSubmit);
}

init()