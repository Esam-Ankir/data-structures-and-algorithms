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
  //expected[ 1, 2, 3, 6, 4, 5, 7, 8, 9]
  breadthFirst() {
    let queue = [];
    let result = [];
    let node = this.root;
    console.log({ node });
    queue.push(node);
    console.log({ queue });

    while (queue.length) {
      node = queue.shift();
      console.log({ node });

      result.push(node.value);
      console.log({ result });

      if (node.left) queue.push(node.left);
      console.log({ node });

      if (node.right) queue.push(node.right);
      console.log({ node });

    }
    return result;
  }

}
module.exports = BinaryTree;
