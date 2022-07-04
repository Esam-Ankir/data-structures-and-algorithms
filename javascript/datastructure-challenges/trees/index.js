'use strict';
const BinaryTree = require('./binary-tree');
const BinarySearchTree = require('./binarySearchTree');
const Node = require('./node');

////binary search tree///////////////////////////////////////////////////////////////
let ten = new Node(10);
let five = new Node(5);
let two = new Node(2);
let seven = new Node(7);
let fivteen = new Node(15);
let twelve = new Node(12);
let seventeen = new Node(17);

ten.left = five;
ten.right = fivteen;
five.left = two;
five.right = seven;
fivteen.left = twelve;
fivteen.right = seventeen;

let tree2 = null;

tree2 = new BinarySearchTree(ten);

// let preOrder = tree2.preOrder();
// console.log('pre order: ', preOrder);
tree2.add(18);
tree2.add(4);
console.log(tree2.contains(1));
console.log(tree2.contains(4));
console.log(tree2.contains(7));
console.log(tree2.root);

const newTree = new BinarySearchTree();
newTree.add(10);
newTree.add(11);
newTree.add(12);

////binary tree////////////////////////////////////////////////////////////////////////
let tree = null;

let one = new Node(1);
let two2 = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five5 = new Node(5);
let six = new Node(6);
let seven7 = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two2;
one.right = three;
two2.left = six;
six.right = seven7;
seven7.left = eight;
seven7.right = nine;
three.left = four;
three.right = five5;

tree = new BinaryTree(one);

let preOrder = tree.preOrder();
console.log('pre order: ', preOrder);
//pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5

let inOrder = tree.inOrder();
console.log('in order: ', inOrder);
//pre order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5


let postOrder = tree.postOrder();
console.log('post order: ', postOrder);
//pre order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1

