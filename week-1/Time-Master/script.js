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
  if (format === 12 && hour > 12) {
    hour = hour - 12;
    HH = hour < 10 ? `0${hour}` : hour;
  } else {
    HH = hour;
  }
  const MM =
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const SS =
    time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
  display.textContent = HH + ":" + MM + ":" + SS;
}
const def = setInterval(() => {
  displayClock(24);
}, 1000);

const formatBtn = document.getElementById("format-options");
formatBtn.addEventListener("change", function () {
  console.log("I got changed");
  console.log(formatBtn.value);
  if (formatBtn.value == 24) {
    location.reload();
  }
  clearInterval(def);
  setInterval(() => {
    displayClock(12);
  }, 1000);
});
