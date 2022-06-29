/* eslint-disable quotes */
'use strict';

const AnimalShelter = require("./lib/AnimalShelter");
let newQueue = new AnimalShelter();

console.log('====================================');
newQueue.enqueue(1);
console.log(newQueue);
console.log('====================================');

newQueue.enqueue("cat");
newQueue.enqueue("cat");
newQueue.enqueue("cat");
newQueue.enqueue("dog");
newQueue.enqueue("dog");
newQueue.enqueue("dog");
newQueue.dequeue("cat");
newQueue.dequeue("dog");
console.log(newQueue);
console.log('====================================');

newQueue.dequeue();
console.log('====================================');


