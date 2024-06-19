"use strict";

const tasks = [];

const addBtn = document.querySelector(".add-task");

addBtn.addEventListener("click", function () {
  const title = document.querySelector(".title-input").value;
  const description = document.querySelector(".description").value;
  const expDate = document.querySelector("#expDate").value;
  // Check values
  if (!title) {
    alert("Please provide a task title");
    return;
  }
  const expireDate = expDate.replace("T", " ");

  tasks.push({
    title,
    description,
    expireDate,
  });
  // Create Delete Buttons and add them to the task list
  const deleteDiv = document.createElement("div");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("btn-secondary");
  deleteBtn.classList.add("delete-btn");
  const updateBtn = document.createElement("button");
  updateBtn.textContent = "Update";
  updateBtn.classList.add("btn-secondary");
  updateBtn.classList.add("update-btn");

  deleteDiv.append(deleteBtn);
  deleteDiv.append(updateBtn);

  // Create elements and add the to the DOM Tree

  const div = document.createElement("div");
  const titleElement = document.createElement("h1");
  titleElement.textContent = title;
  titleElement.classList.add("task-title");
  const descirptionElement = document.createElement("p");
  descirptionElement.textContent = description;
  descirptionElement.classList.add("task-description");
  const expirationDateElement = document.createElement("p");
  expirationDateElement.textContent = expireDate;
  expirationDateElement.classList.add("task-expiration-date");
  div.classList.add("task");
  div.append(titleElement);
  div.append(descirptionElement);
  div.append(expirationDateElement);
  div.append(deleteDiv);
  const taskList = document.querySelector(".task-list");
  taskList.append(div);

  document.querySelector(".title-input").textContent = "";
  document.querySelector(".description").textContent = "";

  // Imprementing Delete Button functionality

  const buttons = document.querySelectorAll(".btn-secondary");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      if (e.target.classList.contains("delete-btn")) {
        e.target.parentNode.parentNode.remove();
      }
    });
  });
});
