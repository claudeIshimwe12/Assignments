"use strict";

// Helper functions
function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function clearFormData() {
  document.querySelectorAll(".input").forEach((node) => (node.value = ""));
}

function createTaskElement(task, type) {
  const div = document.createElement("div");
  div.classList.add("task");

  const titleElement = document.createElement("h1");
  titleElement.textContent = task.title;
  titleElement.classList.add("task-title");

  const descElement = document.createElement("p");
  descElement.textContent = task.description;
  descElement.classList.add("task-description");

  const expDateElement = document.createElement("p");
  expDateElement.textContent = task.expireDate;
  expDateElement.classList.add("task-expiration-date");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("btn-secondary", "delete-btn");

  const updateBtn = document.createElement("button");
  updateBtn.textContent = "Update";
  updateBtn.classList.add("btn-secondary", "update-btn");

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.classList.add("btn-secondary", "complete-btn");

  const actionsDiv = document.createElement("div");
  actionsDiv.append(deleteBtn, updateBtn, completeBtn);
  if (type == "new") {
    div.append(titleElement, descElement, expDateElement, actionsDiv);
  } else {
    div.append(titleElement, descElement, expDateElement);
  }

  // Add functionality
  deleteBtn.addEventListener("click", () => handleDelete(task.title));
  completeBtn.addEventListener("click", () => handleComplete(task.title));

  return div;
}

// Add a new task
function addTask() {
  const title = document.querySelector(".title-input").value;
  const description = document.querySelector(".description").value;
  const expDate = document.querySelector("#expDate").value;

  if (!title) {
    alert("Please provide a task title");
    return;
  }

  const task = {
    title,
    description,
    expireDate: expDate.replace("T", " "),
  };

  const tasks = getLocalStorage("toDoChores");
  tasks.push(task);
  setLocalStorage("toDoChores", tasks);

  document.querySelector(".task-list").append(createTaskElement(task, "new"));
  clearFormData();
}

// Load tasks on page load
function loadTasks() {
  const toDoTasks = getLocalStorage("toDoChores");
  const doneTasks = getLocalStorage("doneChores");

  toDoTasks.forEach((task) => {
    document.querySelector(".task-list").append(createTaskElement(task, "new"));
  });

  doneTasks.forEach((task) => {
    document.querySelector(".complete-wrapper").append(createTaskElement(task));
  });
}

// Handle task deletion
function handleDelete(taskTitle) {
  const tasks = getLocalStorage("toDoChores");
  const updatedTasks = tasks.filter((task) => task.title !== taskTitle);
  setLocalStorage("toDoChores", updatedTasks);
  location.reload();
}

// Handle task completion
function handleComplete(taskTitle) {
  const tasks = getLocalStorage("toDoChores");
  const taskToComplete = tasks.find((task) => task.title === taskTitle);

  setLocalStorage(
    "toDoChores",
    tasks.filter((task) => task.title !== taskTitle)
  );

  const completedTasks = getLocalStorage("doneChores");
  completedTasks.push(taskToComplete);
  setLocalStorage("doneChores", completedTasks);
  location.reload();
}

// Initialize
document.querySelector(".add-task").addEventListener("click", addTask);
window.addEventListener("load", loadTasks);
