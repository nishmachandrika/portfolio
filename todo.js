let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Save to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task (CREATE)
function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value;

  if (text === "") return;

  tasks.push({ text: text, completed: false });
  input.value = "";

  saveTasks();
  displayTasks();
}

// Display tasks (READ)
function displayTasks(filter = "all") {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {

    if (filter === "active" && task.completed) return;
    if (filter === "completed" && !task.completed) return;

    let li = document.createElement("li");

    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    // Toggle complete (UPDATE)
    li.onclick = () => toggleTask(index);

    // Delete button
    let delBtn = document.createElement("button");
    delBtn.textContent = "X";

    delBtn.onclick = (e) => {
      e.stopPropagation(); // prevent toggle
      deleteTask(index);
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

// Toggle complete
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  displayTasks();
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  displayTasks();
}

// Filter
function filterTasks(type) {
  displayTasks(type);
}

// Load tasks when page opens
displayTasks();