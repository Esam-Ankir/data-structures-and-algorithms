'use strict';
const Node = require('./node');

class Linkedlist {
  constructor() {
    this.head = null;
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
      if (curr.next===null) {
        str += 'NULL';
      }
      curr = curr.next;
    }
    return str;

  }
  // append(value) {
  //   const newNode = new Node(value);

  //   if (!this.head) {
  //     this.head = newNode;
  //     return this;
  //   }
  //   else {

  //     let currentNode = this.head;
  //     while (currentNode.next) {
  //       currentNode = currentNode.next;
  //     }
  //     currentNode.next = newNode;
  //     return this;
  //   }
  // }
}

module.exports = Linkedlist;
