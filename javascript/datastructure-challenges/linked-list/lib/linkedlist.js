/* eslint-disable quotes */
/* eslint-disable no-unreachable */
/* eslint-disable new-cap */
'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      return this;
    }
  }
  includes(value) {
    let doesExist = false;
    let curr = this.head;
    while (curr) {
      // console.log(value, curr.value);
      if (curr.value === value) {
        doesExist = true;
      }
      curr = curr.next;
    }
    return doesExist;
  }
  toString() {
    let str = '';
    let curr = this.head;
    while (curr) {
      str += `{${curr.value}} --> `;
      if (curr.next === null) {
        str += 'NULL';
      }
      curr = curr.next;
    }
    return str;
  }
  append(newValue) {
    let newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    let curr = this.head;
    let prev = null;
    while (curr) {
      if (curr.value === value) {
        if (prev === null) {
          this.head = newNode;
          newNode.next = curr;
        } else {
          prev.next = newNode;
          newNode.next = curr;
        }
        this.length++;
        return;
      }
      prev = curr;
      curr = curr.next;
    }
  }
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        newNode.next = curr.next;
        curr.next = newNode;
        this.length++;
        return;
      }
      curr = curr.next;
    }
  }
  kthFromEnd(k) {
    let length = 0;
    let count = 1;
    let node = this.head;
    let curr = this.head;
    while (node) {
      length++;
      node = node.next;
    }
    while (curr) {
      if (k === length - count) {
        return (curr.value);
      }
      count++;
      curr = curr.next;
    }
    return "Exception";
  }
  zipLists(list1, list2) {

    let node1 = list1.head;
    let node2 = list2.head;
    let outList = new LinkedList();

    while (node1) {
      if(node1) {
        outList.append(node1.value);
        node1 = node1.next;
      }
      if(node2) {
        outList.append(node2.value);
        node2 = node2.next;
      }
    }
    return outList;
  }
}

module.exports = LinkedList;

