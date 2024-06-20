"use strict";

// Task 1)

const person = {
  name: "Joe",
  age: 20,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I\'m ${this.age} years old`
    );
  },
  order(meal, drink) {
    console.log(`${this.name} ordered ${meal} and ${drink}`);
  },
};
// When you use the method on person object you can call it like this
person.greet();

// Using call method on person simply means specifying the value of this in that method.
person.greet.call(person);

// Using apply works the same but when you have arguments to be passed in that method you can pass them as an array

person.order.apply(person, ["French Fries", "Lemonade"]);

// The bind method

const placeOrder = person.order.bind(person);

placeOrder("Rice and Meat balls", "Whyskey");

const button = document.getElementById("btn");
// function handleClick() {
//   console.log(this.id, " ID");
//   console.log(this.textContent, " Text Content");
// }
const handleClick = () => {
  console.log(this.id, " ID");
  console.log(this.textContent, " Text Content");
};
button.addEventListener("click", handleClick);

// Private Data with Closures and this

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log(count);
    },
    getCount() {
      console.log(count);
    },
  };
}

const count = createCounter();
count.increment();
count.increment();
count.getCount();

function createTimer(duration, elementId) {
  const element = document.getElementById(`${elementId}`);

  const intervalId = setInterval(function () {
    element.textContent = duration;
    duration--;
    if (duration == -1) {
      console.log("The time is over");
      clearInterval(intervalId);
    }
  }, 6000);
}

createTimer(2, "timer-output");
