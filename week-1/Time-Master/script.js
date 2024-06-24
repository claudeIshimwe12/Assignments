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
  } else if (hour.length == 1) {
    HH = `0${hour}`;
  } else {
    HH = hour;
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

let alarm;
const overLay = document.querySelector(".overlay");
const alarmSetButton = document.querySelector(".set-alarm");
const alarmInput = document.getElementById("alarm");
const alarmContainer = document.querySelector(".container");

overLay.addEventListener("click", function () {
  this.classList.toggle("hidden");
  alarmContainer.classList.toggle("hidden");
});
alarmButton.addEventListener("click", function () {
  overLay.classList.toggle("hidden");
  alarmContainer.classList.toggle("hidden");
});

alarmSetButton.addEventListener("click", function () {
  if (!alarmInput.value) alert("Please specify a time for your alarm");
  if (alarmInput.value == alarm) {
    alert(
      "Oops!, Alarm already set. Please change the time for your new alarm?"
    );
    return;
  }
  alarm = alarmInput.value;
  overLay.classList.toggle("hidden");
  alarmContainer.classList.toggle("hidden");
  const h1 = document.createElement("h1");
  h1.textContent = alarmInput.value;
  alarmDisplay.appendChild(h1);
});
const alarmInterval = setInterval(function () {
  setAlarmOff();
}, 1000);

function setAlarmOff(arr) {
  const H = new Date().getHours();
  const M = new Date().getMinutes();
  const currentTime2 = `${H}:${M}`;

  if (currentTime2 === alarm) {
    alert("Time's Up Big fella !!!");
    clearInterval(alarmInterval);
  }
}
