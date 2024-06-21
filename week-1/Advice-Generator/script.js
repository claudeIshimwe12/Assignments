"use strict";

const adviceId = document.querySelector(".advice-id");
const adviceContainer = document.querySelector(".advice");
const line = document.querySelector(".line");
const buttons = document.querySelector(".btn ");
function fetcAndShowAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceId.textContent = `# Advice ${data.slip.id}`;
      adviceContainer.textContent = `"${data.slip.advice}"`;
      line.classList.remove("hidden");
      buttons.classList.remove("hidden");
    })
    .catch((err) => {
      adviceContainer.textContent = "Oops!, Something Went Wrong";
      console.log("Something went wrong", err.message);
    });
}
fetcAndShowAdvice();
buttons.addEventListener("click", fetcAndShowAdvice);
