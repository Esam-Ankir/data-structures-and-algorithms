'use strict';
const Node = require('./node');
const BinaryTree = require('./binary-tree');

class BinarySearchTree extends BinaryTree {
  add(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    }
    let curr = this.root;
    while (curr) {
      if (value < curr.value) {
        if (curr.left === null) {
          curr.left = newNode;
          break;
        }
        curr = curr.left;
      } else {
        if (curr.right === null) {
          curr.right = newNode;
          break;
        }
        curr = curr.right;
      }
    }
  }
  contains(value) {
    let curr = this.root;
    if (!curr) return false;
    while (curr) {
      if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
module.exports = BinarySearchTree;
