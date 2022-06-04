'use strict';
const LinkedList = require('../lib/linkedlist');

describe('Linked List', () => {

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

});
