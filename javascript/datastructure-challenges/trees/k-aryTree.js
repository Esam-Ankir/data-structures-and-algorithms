'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.child = [];
  }
}
class KAryTree {
  constructor(value) {
    var node = new Node(value);
    this.root = node;
  }
  fizzBuzz() {
    let traverse = (node) => {
      let newValue;
      if (node.value % 15 === 0) {
        newValue = 'FizzBuzz';
      } else if (node.value % 3 === 0) {
        newValue = 'Fizz';
      } else if (node.value % 5 === 0) {
        newValue = 'Buzz';
      } else {
        newValue = node.value;
      }
      let newNode = new Node(newValue);
      if (node.child.length) {
        for (let i = 0; i < node.child.length; i++) {
          newNode.child[i] = traverse(node.child[i]);
        }
      }
      return newNode;
    };
    let newTree = new KAryTree();
    newTree.root = traverse(this.root);

    console.log(newTree.root);
    console.log(this.root);
    return newTree;
  }
}

module.exports = {
  Node,
  KAryTree
};


// creating 3-ary tree
var tree = new KAryTree(30);

tree.root.child.push(new Node(3));
tree.root.child[0].parent = tree;

tree.root.child.push(new Node(2));
tree.root.child[1].parent = tree;

tree.root.child.push(new Node(5));
tree.root.child[2].parent = tree;

tree.root.child[0].child.push(new Node(4));
tree.root.child[0].child[0].parent = tree.root.child[0];

tree.root.child[0].child.push(new Node(6));
tree.root.child[0].child[1].parent = tree.root.child[0];

tree.fizzBuzz();


