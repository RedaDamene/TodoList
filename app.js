const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addItem);
todoList.addEventListener("click", deleteItem);

function addItem(event) {
    event.preventDefault();

    // Ajouter la todo Div 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Ajouter un li 
    let newTodo = document.createElement("li");
    newTodo.innerHTML = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Button Check
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Button Delete
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteItem(e) {
    const item = e.target;
    // supprimer
    if (item.classList[0] === "trash-btn") {
        item.parentElement.classList.add("fall");
        item.parentElement.addEventListener("transitionend", () => {
            item.parentElement.remove();
        })
    }

    // cocher
    if (item.classList[0] === "complete-btn") {
        item.parentElement.classList.toggle("completed");
    }
}