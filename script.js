// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskButton.addEventListener("click", addTask);

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new task item
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");
  editButton.addEventListener("click", () => editTask(li, span));

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", () => taskList.removeChild(li));

  li.appendChild(span);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  taskInput.value = "";
}

// Function to edit a task
function editTask(li, span) {
  const input = document.createElement("input");
  input.type = "text";
  input.value = span.textContent;

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.classList.add("save");
  saveButton.addEventListener("click", () => saveTask(li, input, span));

  li.replaceChild(input, span);
  li.replaceChild(saveButton, li.querySelector(".edit"));
}

// Function to save an edited task
function saveTask(li, input, span) {
  if (input.value.trim() === "") {
    alert("Task cannot be empty!");
    return;
  }

  span.textContent = input.value;
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("edit");
  editButton.addEventListener("click", () => editTask(li, span));

  li.replaceChild(span, input);
  li.replaceChild(editButton, li.querySelector(".save"));
}

// Handle pressing Enter key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTaskButton.click();
  }
});
