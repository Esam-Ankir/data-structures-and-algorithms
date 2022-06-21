/* eslint-disable no-undef */
'use strict';
const LinkedList = require('./linkedlist');



function zipLists(list1, list2) {

  let node1 = list1.head;
  let node2 = list2.head;
  let outList = new LinkedList();
  while (node1 || node2) {
    if (node1) {
      outList.append(node1.value);
      node1 = node1.next;
    }
    if (node2) {
      outList.append(node2.value);
      node2 = node2.next;
    }
  }
  return outList;
}

module.exports = zipLists;
