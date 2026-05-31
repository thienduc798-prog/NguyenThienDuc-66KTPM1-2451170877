
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const itemsLeft = document.getElementById("itemsLeft");
const clearCompletedBtn = document.getElementById("clearCompleted");
const filterButtons = document.querySelectorAll(".filter-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function updateCounter() {
    const activeCount = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${activeCount} items left`;
}

function createTodoElement(todo) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    li.dataset.id = todo.id;

    const span = document.createElement("span");
    span.classList.add("todo-text");

    if (todo.completed) {
        span.classList.add("completed");
    }

    span.textContent = todo.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

function renderTodos() {
    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    updateCounter();
}

function addTodo() {
    const text = todoInput.value.trim();

    if (!text) return;

    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    saveTodos();
    renderTodos();

    todoInput.value = "";
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        addTodo();
    }
});

todoList.addEventListener("click", e => {

    const li = e.target.closest(".todo-item");

    if (!li) return;

    const id = Number(li.dataset.id);

    if (e.target.classList.contains("delete-btn")) {

        todos = todos.filter(todo => todo.id !== id);

        saveTodos();
        renderTodos();
        return;
    }

    if (e.target.classList.contains("todo-text")) {

        const todo = todos.find(t => t.id === id);

        todo.completed = !todo.completed;

        saveTodos();
        renderTodos();
    }
});

todoList.addEventListener("dblclick", e => {

    if (!e.target.classList.contains("todo-text")) return;

    const span = e.target;
    const li = span.parentElement;
    const id = Number(li.dataset.id);

    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;
    input.classList.add("edit-input");

    li.replaceChild(input, span);

    input.focus();

    input.addEventListener("keydown", event => {

        if (event.key === "Enter") {

            const todo = todos.find(t => t.id === id);

            todo.text = input.value.trim() || todo.text;

            saveTodos();
            renderTodos();
        }
    });
});

filterButtons.forEach(btn => {

    btn.addEventListener("click", () => {

        filterButtons.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        currentFilter = btn.dataset.filter;

        renderTodos();
    });
});

clearCompletedBtn.addEventListener("click", () => {

    todos = todos.filter(todo => !todo.completed);

    saveTodos();
    renderTodos();
});

renderTodos();