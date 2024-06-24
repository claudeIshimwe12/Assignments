"use strict";

// In this lab, you'll build the JavaScript Hero, harnessing the power of objects to level up
// your front-end development skills. Objects are the building blocks of complex
// applications, allowing you to represent everything from characters in a game to user
// profiles in a web app. You'll tackle a series of challenges that progressively increase in
// difficulty, solidifying your understanding of key concepts.
// Challenges:
// 1. Object Creation Basics:
// • Task: Create an object representing a superhero with properties like name,
// secretIdentity, powers (an array), and weakness.
// 2. Methods and Functionality:
// • Task: Add methods to the superhero object:
// o usePower(powerName): Logs a message about the hero using a
// specific power.
// o revealIdentity(): Logs the hero’s secret identity
// 3. Object Constructors:
// • Task: Create a Superhero constructor function to streamline the creation of
// multiple superheroes.
// 4. Prototypal Inheritance:
// • Task: Extend the functionality of your superheroes using prototypal inheritance.
// 5. Object Iteration and Transformation:
// • Task: Use forEach, map, or filter to manipulate an array of superheroes and
// supervillains.
// 6. Advanced Challenge (Optional):
// • Task: Design an interactive superhero battle simulator.

const superHero = {
  name: "Spider Man",
  secretIdentity: "Peter Parker",
  powers: [
    "Shooting webs",
    "Extra strength",
    "Improved reflexes",
    "Speed",
    "Flexibility",
  ],
  weeknesses: ["Family issues", "Secret Identity"],
  usePower() {
    console.log(
      `${this.name} swooped in ${this.powers[0]} with ${this.powers[4]} and ${this.powers[2]} and saved the little girl who was stuck in the train tracks`
    );
  },
  revealIdentity() {
    console.log(`${this.name} in real life is named ${this.secretIdentity}`);
  },
};

superHero.usePower();
superHero.revealIdentity();
// Constructor Function

// function SuperHero(name, secretIdentity, powers, weaknesses) {
//   this.name = name;
//   this.secretIdentity = secretIdentity;
//   this.powers = powers;
//   this.weaknesses = weaknesses;
//   this.usePower = function () {
//     console.log(
//       `${this.name} has the power of ${this.powers[0]} and ${this.powers[1]}`
//     );
//   };
// }

// Classes
class SuperHero {
  constructor(name, secretIdentity, powers, weaknesses) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weaknesses = weaknesses;
    this.usePower = function () {
      console.log(
        `${this.name} has the power of ${this.powers[0]} and ${this.powers[1]}`
      );
    };
  }
}

const hero2 = new SuperHero(
  "Deadpool",
  "Gosling",
  [
    "Healing",
    "Fighting",
    "Funny",
    "Saving People",
    "Bringing villains to justice",
  ],
  ["Goofy", "Immature"]
);

hero2.usePower();
hero2.__proto__.age = 20;
console.log("Proto", hero2.__proto__);

// 5) Object iteration

const hero1 = new SuperHero(
  "Super man",
  "Clark Kent",
  ["Laser eyes", "Flying", "Made of Steel"],
  ["cyrptonium"]
);
const hero4 = new SuperHero(
  "Bat man",
  "Bruce Wayne",
  ["Money", "Gadgets", "Fighting"],
  ["Mortal", "Can't fly", "Flawed Body"]
);
const hero3 = new SuperHero(
  "Wolveline",
  "Logan",
  ["Healing", "Titanium Skeleton", "Sharp craws"],
  ["Drunkard"]
);

const heroes = [hero1, hero2, hero3, hero4];

class SuperVillain extends SuperHero {
  constructor(name, secretIdentity, powers, weaknesses) {
    super(name, secretIdentity, powers, weaknesses);
    this.usePower = function () {
      let listOfPowers = this.powers[0];
      for (let i = 1; i < this.powers.length; i++) {
        listOfPowers += ", " + this.powers[i];
      }
      console.log(`${this.name} has the power of ${listOfPowers}.`);
    };
  }
}

const villain1 = new SuperVillain(
  "Joker",
  "Arthur Fleck",
  ["Psychopacy", "Manipulation", "Deceit"],
  ["Crazy"]
);

const villain2 = new SuperVillain(
  "Ajax",
  "Franci Freeman",
  ["Military Strategies", "Shooting", "Ruthless"],
  ["No super power"]
);
const villain3 = new SuperVillain(
  "Wolveline Clone",
  "Clone",
  ["Healing", "Titanium Skeleton", "Sharp craws"],
  ["Drunkard"]
);
const villain4 = new SuperVillain(
  "General Zod",
  "General Zod",
  ["Laser eyes", "Flying", "Made of Steel"],
  ["cyrptonium"]
);

const villains = [villain1, villain2, villain3, villain4];
villain1.usePower();
console.log(villains);
