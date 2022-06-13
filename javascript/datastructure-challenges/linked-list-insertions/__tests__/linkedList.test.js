/* eslint-disable new-cap */
'use strict';
const LinkedList = require('../lib/linkedlistInsertions');

describe('Linked List Test', () => {
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
});
