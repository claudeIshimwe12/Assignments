"use strict";

// 1) Create a JavaScript Date Object to represent the current time

const currentTime = new Date();
console.log(currentTime);

const currentHour = currentTime.getHours();
const currentMinute = currentTime.getMinutes();
const currentSecond = currentTime.getSeconds();

console.log(
  `${
    currentHour < 10 ? `0${currentHour}` : currentHour
  }:${currentMinute}:${currentSecond}`
);

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// 2) Object-Oriented Clock

function Clock(time = new Date()) {
  this.fullDate = time.toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  this.hour = new Date(time).getHours();
  this.minute = new Date(time).getMinutes();
  this.seconds = new Date(time).getSeconds();
  this.day = new Date(time).getDay();

  this.getFormattedTime = function () {
    return `${currentHour < 10 ? `0${currentHour}` : currentHour}:${
      currentMinute < 10 ? `0${currentMinute}` : currentMinute
    }:${currentSecond < 10 ? `0${currentSecond}` : currentSecond}`;
  };
  this.get12HourTime = function () {
    return this.hour > 12 ? `0${this.hour - 12} PM` : `${this.hour} AM`;
  };
}

const today = new Clock();
const indepenceDay = new Clock("July 1962");
console.log(today);

// 3) Time Formating

console.log(today.getFormattedTime());
console.log(today.get12HourTime());

// 4) Dynamically Display Time

function displayClock(format = 24) {
  const display = document.querySelector(".clock");
  const time = new Date();
  let hour = new Date().getHours();
  let HH;
  if (hour == 0) {
    HH = "00";
  } else if (format === 12 && hour > 12) {
    hour = hour - 12;
    HH = hour < 10 ? `0${hour}` : hour;
  } else {
    HH = `0${hour}`;
  }
  const MM =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const SS =
    time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
  const dateFormat = HH > 12 ? (format == 24 ? "PM" : "AM") : "AM";
  display.textContent = HH + ":" + MM + ":" + SS + " " + dateFormat;
}
const def = setInterval(() => {
  displayClock(24);
}, 1000);

const formatBtn = document.getElementById("format-options");
formatBtn.addEventListener("change", function () {
  if (formatBtn.value == 24) {
    location.reload();
  }
  document.body.style.backgroundColor = "var(--dark-green)";
  document.querySelector(".wrapper").style.backgroundColor =
    "var(--light-green)";
  document.querySelector(".clock").style.color = "black";
  document.getElementById("format-options").style.backgroundColor =
    "var(--light-green)";
  clearInterval(def);
  setInterval(() => {
    displayClock(12);
  }, 1000);
});

// 6) Alarm Feature

const alarmButton = document.querySelector(".alarm");
const alarmDisplay = document.querySelector(".alarm-display");

const alarmsArray = [];
alarmButton.addEventListener("click", function () {
  const input = prompt("Please Add in alarm set off time", "00:00:00 AM");
  alarmsArray.push(input);
  const h1 = document.createElement("h1");
  h1.textContent = input;
  alarmDisplay.appendChild(h1);
});
