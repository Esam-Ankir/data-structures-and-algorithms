/* eslint-disable quotes */
"use strict";
const Queue = require("./Queue");

class AnimalShelter {
  constructor() {
    this.animal = new Queue();
  }
  enqueue(animal) {
    if (animal === "cat" || animal === "dog") {
      this.animal.enqueue(animal);
    } else console.log("This shelter is for cats and dogs only");
  }

  dequeue(pref) {
    if (pref === "cat" || pref === "dog") {
      this.animal.dequeue();
    } else {
      console.log("dequeue should have an argument");
      return null;
    }
  }
}

module.exports = AnimalShelter;
