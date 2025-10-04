// Data semua task
let todos = [];

// =============================
// 1. Tambah Task
// =============================
function addTask(task) {
  todos.push(task);
  renderTodos(todos);
}

// =============================
// 2. Hapus Task
// =============================
function deleteTask(id) {
  todos = todos.filter(t => t.id !== id);
  renderTodos(todos);
}

// =============================
// 3. Tandai Selesai (Checklist)
// =============================
function markAsDone(id) {
  const task = todos.find(t => t.id === id);
  if (task) {
    task.done = true;
  }
  renderTodos(todos);
}

// =============================
// 4. Edit Task
// =============================
function editTask(id, newTitle) {
  const task = todos.find(t => t.id === id);
  if (task) {
    task.title = newTitle;
  }
  renderTodos(todos);
}

// =============================
// 5. Render ke HTML
// =============================
function renderTodos(list) {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  
  list.forEach(todo => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span style="${todo.done ? 'text-decoration: line-through;' : ''}">
        ${todo.title}
      </span>
      <button onclick="markAsDone(${todo.id})">✅</button>
      <button onclick="editTask(${todo.id}, prompt('Edit task:', '${todo.title}'))">✏️</button>
      <button onclick="deleteTask(${todo.id})">🗑️</button>
    `;
    todoList.appendChild(li);
  });
}

// =============================
// 6. Event Listener Form Input
// =============================
document.getElementById("todo-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("todo-input");
  const newTask = {
    id: Date.now(),
    title: input.value,
    done: false
  };
  addTask(newTask);
  input.value = "";
});
