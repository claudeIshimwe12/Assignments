"use strict";

const tasks = [];

const addBtn = document.querySelector(".add-task");

addBtn.addEventListener("click", function () {
  const title = document.querySelector(".title-input").value;
  const description = document.querySelector(".description").value;
  const expDate = document.querySelector("#expDate").value;
  const expireDate = expDate.replace("T", " ");
  tasks.push({
    title,
    description,
    expireDate,
  });

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

  document.querySelector(".task-list").append(div);
  console.log(tasks);
});

// tasks.forEach((task) => {
//   const div = document.createElement("div");
//   const title = document.createElement("h1");
//   title.textContent = task.title;
//   const descirption = document.createElement("p");
//   descirption.textContent = task.description;
//   const expirationDate = document.createElement("p");
//   expirationDate.textContent = task.expDate;

//   div.append(title);
//   div.append(descirption);
//   div.append(expirationDate);
//   // console.log(div);
//   document.querySelector(".task-list").append(div);
// });
