'use strict';

const PseudoQueue = require('./lib/PseudoQueue');

const PQ = new PseudoQueue();

PQ.enqueue(7);
PQ.enqueue(2);
PQ.enqueue(1);

console.log(PQ);

console.log('dequeue', PQ.dequeue());

console.log(PQ);

console.log('dequeue', PQ.dequeue());
console.log('dequeue', PQ.dequeue());


