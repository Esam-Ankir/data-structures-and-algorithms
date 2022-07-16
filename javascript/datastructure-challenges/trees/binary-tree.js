'use strict';
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  //root - left - right
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      // if left go left
      if (node.left) traverse(node.left);
      // if right go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  // left - root - right
  inOrder() {
    let result = [];
    let traverse = (node) => {
      // if left go left
      if (node.left) traverse(node.left);
      result.push(node.value);
      // if right go right
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  //left - right - root
  postOrder() {
    let result = [];
    let traverse = (node) => {
      // if left go left
      if (node.left) traverse(node.left);
      // if right go right
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  //level order
  breadthFirst() {
    let queue = [];
    let result = [];
    let node = this.root;
    queue.push(node);

    while (queue.length) {
      node = queue.shift();

      result.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
  findMax() {
    let max = 0;
    let traverse = (node) => {
      if (node.value > max) max = node.value;
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return max;
  }


}
module.exports = BinaryTree;
