// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {

    //Prevent form from submitting
    event.preventDefault();

    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);

    //Check MARK button
    const completedButton = document.createElement("button");
    completedButton.classList.add("completed-btn");
    completedButton.innerHTML = "✔";
    todoDiv.appendChild(completedButton);

    //Check EDIT button
    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.innerHTML = "🖉"
    todoDiv.appendChild(editButton);

    //Check TRASH button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = "X";
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

    //Clear Todo INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //DELETE TODO
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }

    //CHECK MARK
    if(item.classList[0] === "completed-btn") {
        const newTodo = item.parentElement;
        newTodo.classList.toggle("completed");
    }
}