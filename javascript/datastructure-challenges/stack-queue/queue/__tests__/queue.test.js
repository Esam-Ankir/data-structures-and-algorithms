/* eslint-disable quotes */

'use strict';
const Queue = require('../lib/Queue');

describe('Linked Queue Test', () => {

  test('Test1:Can successfully enqueue into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.front.value).toBe(1);
  });
  test('Test2:Can successfully enqueue multiple values into a queue', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(5);
    newQueue.enqueue(7);
    expect(newQueue.front.value).toBe(1);
    expect(newQueue.front.next.value).toBe(5);
    expect(newQueue.rear.value).toBe(7);
  });
  test('Test3:Can successfully dequeue out of a queue the expected value', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.dequeue();
    expect(newQueue.front).toBeNull();
  });
  test('Test4:Can successfully peek into a queue, seeing the expected value', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.peek();
    expect(newQueue.peek()).toBe(1);
  });
  test('Test5:Can successfully empty a queue after multiple dequeues', () => {
    const newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(5);
    newQueue.enqueue(7);
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.front).toBeNull();
  });
  test('Test6:Can successfully instantiate an empty queue', () => {
    const newQueue = new Queue();
    expect(newQueue instanceof Queue).toBeTruthy();
  });
  test('Test7:Calling dequeue or peek on empty queue raises exception', () => {
    const newQueue = new Queue();
    expect(newQueue.dequeue()).toBe('exception');
    expect(newQueue.peek()).toBe('exception');
  });









});
