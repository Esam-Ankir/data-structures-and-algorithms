/* eslint-disable quotes */
/* eslint-disable new-cap */
'use strict';
const LinkedList = require('../lib/linkedlist');

describe('Linked List Test', () => {
  /////for testing insert,includes and toString
  test('Test1:Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toBeNull();
  });
  test('Test2:Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert("any");
    expect(list.head.value).toBe("any");
  });
  test('Test3:The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert("notHead");
    list.insert("head");
    expect(list.head.value).toBe("head");
  });
  test('Test4:Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert("1st");
    expect(list.head.value).toBe("1st");
    list.insert("2nd");
    expect(list.head.value).toBe("2nd");
  });
  test('Test5:Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert(7);
    list.insert("any");
    expect(list.includes(7)).toBe(true);
    expect(list.includes("any")).toBe(true);
  });
  test('Test6:Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert(5);
    list.insert(10);
    expect(list.includes(1)).toBe(false);
  });
  test('Test7:Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert(1);
    list.insert(2);
    expect(list.toString()).toBe('{2} --> {1} --> NULL');
  });
  /////for testing linked list insertions:append,insertBefore and insertAfter
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
  /////for testing kthFromEnd
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
