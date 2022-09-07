// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

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

    //ADD TODO TO LOCAL STORAGE
    saveLocalTodos(todoInput.value);

    //Check MARK button
    const completedButton = document.createElement("button");
    completedButton.classList.add("completed-btn");
    completedButton.innerHTML = "<img src='https://www.svgrepo.com/show/162251/check-mark-black-outline.svg'>";
    todoDiv.appendChild(completedButton);

    //Check EDIT button
    const editButton = document.createElement("button");
    editButton.classList.add("edit-btn");
    editButton.innerHTML = "<img src='https://www.svgrepo.com/show/32615/edit.svg'>"
    todoDiv.appendChild(editButton);

    //Check TRASH button
    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-btn");
    trashButton.innerHTML = "<img src='https://www.svgrepo.com/show/151290/close.svg'>";
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

    //Clear Todo INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        removeLocalTodos(todos);
        todo.addEventListener("transitionend", function () {
            todo.remove();
        })
    }

    //CHECK MARK
    if (item.classList[0] === "completed-btn") {
        const newTodo = item.parentElement;
        newTodo.classList.toggle("completed");
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;

        }
    })
}

function saveLocalTodos(todo) {
    //CHECK---HEY Do I already have thing in there?
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    //CHECK---HEY Do I already have thing in there?
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.forEach(function (todo) {
        //Todo DIV
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //Create LI
        const newTodo = document.createElement("li");
        newTodo.classList.add("todo-item");
        newTodo.innerText = todo;
        todoDiv.appendChild(newTodo);

        //Check MARK button
        const completedButton = document.createElement("button");
        completedButton.classList.add("completed-btn");
        completedButton.innerHTML = "<img src='https://www.svgrepo.com/show/162251/check-mark-black-outline.svg'>";
        todoDiv.appendChild(completedButton);

        //Check EDIT button
        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.innerHTML = "<img src='https://www.svgrepo.com/show/32615/edit.svg'>"
        todoDiv.appendChild(editButton);

        //Check TRASH button
        const trashButton = document.createElement("button");
        trashButton.classList.add("trash-btn");
        trashButton.innerHTML = "<img src='https://www.svgrepo.com/show/151290/close.svg'>";
        todoDiv.appendChild(trashButton);

        //APPEND TO LIST
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos() {
    //CHECK---HEY Do I already have thing in there?
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}