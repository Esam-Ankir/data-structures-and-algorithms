'use strict';
const Stack = require('./Stack');
class pseudoQueue {

  constructor() {
    this.input = new Stack();
    this.output = new Stack();
  }

  enqueue(value) {

    this.input.push(value);
    return this.input.peek();

  }

  dequeue() {

    if (!this.output.top) {
      if (this.input.top) {
        let dequeuedValue = this.input.pop();
        this.output.push(dequeuedValue);
      } else return 'Cant dequeue : Both stacks are empty';
    }
    return this.output.pop();

  }


}
module.exports = pseudoQueue;
