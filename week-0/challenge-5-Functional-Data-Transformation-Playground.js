"use strict";

// 1.A)  capitalize(str): Capitalizes the first letter of a string.

function capitalize(str) {
  return str.at(0).toUpperCase().concat(str.slice(1));
}
console.log(capitalize("uninteruptible"));

// 1.B) reverse(str): Reverses a string.

function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("Javascript"));

// 1.C) isPalindrome(str): Checks if a string is a palindrome (reads the same
//backward as forward).

function isPalindrome(str) {
  return str.toLowerCase().split("").reverse().join("") === str;
}

console.log(isPalindrome("noon"));

// 1.D) wordCount(str): Counts the number of words in a string.

function wordCount(str) {
  return str.split(" ").length;
}

console.log(
  wordCount("There was a time I could have done this in a very hard way, LOL")
);

// 2.A) double(arr): Doubles every number in an array.

function double(arr) {
  return arr.map((element) => element * 2);
}

console.log(double([1, 2, 3]));

// 2.B) sum(arr): Calculates the sum of all numbers in an array.

function sum(arr) {
  return arr.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4, 6]));

// 2.C) average(arr): Calculates the average of all numbers in an array.

function average(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

console.log(average([2, 3, 1]));

// 3.A) fullName(person): Returns the full name of a person object (given
//properties firstName and lastName).

function fullName(person) {
  return `${person.firstName} ${person.lastName}`;
}

const student = {
  firstName: "Walter",
  lastName: "White",
};

console.log(fullName(student));

// 3.B) isAdult(person): Checks if a person is 18 or older (given property age).

function isAdult(person) {
  return person
    ? person.age
      ? person.age >= 18
        ? "Is old enough to drink"
        : "Is too young to drink"
      : "No age provided :)"
    : "No person provided ";
}

const user1 = {
  name: "Jane",
  //age: 22,
};
console.log(isAdult(user1));

// 3.C) filterByAge(people, minAge): Filters an array of person objects to keep
//only those at least minAge years old.

function filterByAge(people, minAge) {
  return people.filter((person) => person.age >= minAge);
}

const people = [
  {
    name: "Joe",
    age: 20,
  },
  {
    name: "Jane",
    age: 22,
  },
  {
    name: "Michael",
    age: 19,
  },
  {
    name: "Tristan",
    age: 24,
  },
  {
    name: "Emma",
    age: 15,
  },
];

console.log(filterByAge(people, 22));

// 4.A) Use the compose(...fns) function (you can find implementations online) to
// combine your functions in interesting ways. For example, create a function to
// reverse and capitalize a string, or to double all the even numbers in an array.

const compose = (data) => reverse(capitalize(data));

console.log(compose("expendable"));
