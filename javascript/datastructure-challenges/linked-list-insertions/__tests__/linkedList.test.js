/* eslint-disable new-cap */
'use strict';
const LinkedList = require('../lib/linkedlistInsertions');

describe('Linked List Test', () => {
  /////for linked list insertion
  test('Test01:Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.insert('3');
    list.insert('2');
    list.insert('1');
    list.append('5');
    expect(list.toString()).toBe('{1} --> {2} --> {3} --> {5} --> NULL');
  });
  test('Test02:Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.insert('3');
    list.insert('2');
    list.insert('1');
    list.append('5');
    list.append('6');
    expect(list.toString()).toBe('{1} --> {2} --> {3} --> {5} --> {6} --> NULL');

  });
  test('Test03:Can successfully insert a node before a node located in the middle of a linked list', () => {
    let list = new LinkedList();
    list.insert('3');
    list.insert('2');
    list.insert('1');
    list.insertBefore('2', '0');
    expect(list.toString()).toBe('{1} --> {0} --> {2} --> {3} --> NULL');
  });
  test('Test04:Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.insert('3');
    list.insert('2');
    list.insert('1');
    list.insertBefore('1', '0');
    expect(list.toString()).toBe('{0} --> {1} --> {2} --> {3} --> NULL');
  });
  test('Test05:Can successfully insert after a node in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert('3');
    list.insert('2');
    list.insert('1');
    list.insertAfter('2', '0');
    expect(list.toString()).toBe('{1} --> {2} --> {0} --> {3} --> NULL');
  });
  test('Test06:Can successfully insert a node after the last node of the linked list', () => {
    let list = new LinkedList();
    list.insert('3');
    list.insert('2');
    list.insert('1');
    list.insertAfter('3', '0');
    expect(list.toString()).toBe('{1} --> {2} --> {3} --> {0} --> NULL');
  });
  /////for kthFromEnd
  test('Test07:Where k is greater than the length of the linked list', () => {
    let list = new LinkedList();
    list.insert('3');
    list.insert('2');
    list.insert('1');
    expect(list.kthFromEnd(6)).toBe('Exception');
  });
  test('Test08:Where k and the length of the list are the same', () => {
    let list = new LinkedList();
    list.insert('0');
    list.insert('1');
    list.insert('2');
    expect(list.kthFromEnd(2)).toBe('2');
  });
  test('Test09:Where k is not a positive integer', () => {
    let list = new LinkedList();
    list.insert('3');
    list.insert('2');
    list.insert('1');
    expect(list.kthFromEnd(-1)).toBe('Exception');
  });
  test('Test10:Where the linked list is of a size 1', () => {
    let list = new LinkedList();
    list.insert('0');
    expect(list.kthFromEnd(0)).toBe('0');
  });
  test('Test11:Where k is not at the end, but somewhere in the middle of the linked list', () => {
    let list = new LinkedList();
    list.insert('3');
    list.insert('2');
    list.insert('1');
    expect(list.kthFromEnd(1)).toBe('2');
  });
});
