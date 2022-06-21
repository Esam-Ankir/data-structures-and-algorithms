/* eslint-disable quotes */
/* eslint-disable new-cap */
'use strict';
const LinkedList = require('../lib/linkedlist');
const zipLists = require('../lib/zipLists');


describe('zipLists Test', () => {

  test('Test01:can zip two different lists with the same length', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.insert('3');
    list1.insert('2');
    list1.insert('1');
    list2.insert('4');
    list2.insert('5');
    list2.insert('6');
    expect(zipLists(list1, list2).toString()).toBe('{1} --> {6} --> {2} --> {5} --> {3} --> {4} --> NULL');
  });
  test('Test02:can zip two different lists with different lengths', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    // list1.insert('4');
    list1.insert('3');
    list1.insert('2');
    list1.insert('1');
    list2.insert('4');
    list2.insert('4');
    list2.insert('5');
    list2.insert('6');
    expect(zipLists(list1, list2).toString()).toBe('{1} --> {6} --> {2} --> {5} --> {3} --> {4} --> {4} --> NULL');
  });
  test('Test03:can zip two lists one is empty list', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    list1.insert('3');
    list1.insert('2');
    list1.insert('1');
    expect(zipLists(list1, list2).toString()).toBe('{1} --> {2} --> {3} --> NULL');
  });
  test('Test04:can zip two empty lists', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();
    expect(zipLists(list1, list2).toString()).toBe('');
  });
});
