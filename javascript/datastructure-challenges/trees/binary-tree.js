'use strict';
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  //root - left - right
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);//root first
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
      result.push(node.value);//root after left
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
      result.push(node.value);//root last
    };
    traverse(this.root);
    return result;
  }
  //level order top-bottom
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
  //for all above
  //Time complexity : O(n).
  //Space complexity : O(n).
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
  oddSum() {
    let sum = 0;
    let traverse = (node) => {
      if (typeof (node.value) === 'number') {
        if (node.value % 2 !== 0) {
          sum = sum + node.value;
        }
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
    };
    traverse(this.root);
    return sum;
  }

}
module.exports = BinaryTree;

