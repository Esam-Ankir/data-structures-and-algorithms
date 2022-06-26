'use strict';

const PseudoQueue = require('../lib/PseudoQueue');

describe('PseudoQueue Test', () => {

  test('Test1:Can successfully enqueue into a queue', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    expect(newQueue.input.peek()).toBe(1);
  });

  test('Test2:Can successfully enqueue multiple values into a queue', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(5);
    newQueue.enqueue(7);
    expect(newQueue.input.peek()).toBe(7);
  });
  test('Test3:Can successfully dequeue out of a queue the expected value', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.dequeue();
    expect(newQueue.input.peek()).toBe("exception");
  });
  test('Test4:Can successfully peek into a queue, seeing the expected value', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    expect(newQueue.input.peek()).toBe(2);
  });
  test('Test5:Can successfully empty a queue after multiple dequeues', () => {
    const newQueue = new PseudoQueue();
    newQueue.enqueue(1);
    newQueue.enqueue(5);
    newQueue.enqueue(7);
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.output.pop()).toBe("exception");
  });

  test('Test6:Can successfully instantiate an empty queue', () => {
    const newQueue = new PseudoQueue();
    expect(newQueue instanceof PseudoQueue).toBeTruthy();
  });

  test('Test7:Calling dequeue or peek on empty queue raises exception', () => {
    const newQueue = new PseudoQueue();
    expect(newQueue.dequeue()).toBe("Cant dequeue : Both stacks are empty");
    // expect(newQueue.peek()).toBe('exception');
  });

});
