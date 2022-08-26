/* eslint-disable no-unused-vars */
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
  // append(value) {
  //   const node = new Node(value);
  //   if (!this.head) {
  //     this.head = node;
  //     return;
  //   }
  //   let current = this.head;
  //   while (current.next) {
  //     current = current.next;
  //   }
  //   current.next = node;
  // }
  // // returning the all the values  from the linkedList

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
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
  reverse(LL) {
    let prev = null;
    let next = null;
    let curr = LL.head;
    let reversedLL = new LinkedList();
    if (curr || curr.next) {
      while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }
      reversedLL.head = prev;
      return reversedLL;
    }
    reversedLL = LL;
    return reversedLL;
  }
}

module.exports = LinkedList;

