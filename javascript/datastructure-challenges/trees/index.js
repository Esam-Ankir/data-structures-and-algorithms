'use strict';
const BinaryTree = require('./binary-tree');
// const BinarySearchTree = require('./binarySearchTree');
// const isSameFilesNumber = require('./isSameFilesNumber');
const Node = require('./node');
const isSymmetric = require('./mock_interview/easy/isSymmetric.js');
const isSameTree = require('./mock_interview/easy/isSameTree');
const mergeTrees = require('./mock_interview/easy/mergeTrees');
const invertTree = require('./mock_interview/easy/invertTree');
const maxDepth = require('./mock_interview/easy/maxDepth');
const minDepth = require('./mock_interview/easy/minDepth');
const hasPathSum = require('./mock_interview/easy/hasPathSum');
const sumNumbers = require('./mock_interview/medium/sumNumbers');
const isBST = require('./mock_interview/medium/isBST');
const levelOrderBottom = require('./mock_interview/easy/not_easy/levelOrderBottom');
const isBalanced = require('./mock_interview/easy/not_easy/isBalanced');

// let syTree = null;
// let one = new Node(1);
// let two = new Node(2);
// let two2 = new Node(2);
// let three = new Node(3);
// let three3 = new Node(3);
// let four = new Node(4);
// let four4 = new Node(4);
// let five5 = new Node(5);
// let sex6 = new Node(6);
// one.right=two;
// one.left=two2;
// two.left=three;
// two.right=four;
// two2.left=four4;
// two2.right=three3;
// three3.right=five5;
// five5.right=sex6;
// syTree = new BinaryTree(one);
// console.log(isSymmetric(one));
// console.log((one));
// console.log(invertTree(one));
// console.log(maxDepth(one));
// console.log(minDepth(one));

// let oneF = new Node(1);
// let oneS = new Node(1);
// let twoF = new Node(2);
// let twoS = new Node(2);
// let threeF = new Node(3);
// let threeS = new Node(3);
// oneF.right=twoF;
// oneF.left=threeF;
// oneS.left=twoS;
// oneS.right=threeS;
// console.log(isSameTree(oneF,oneS));
// console.log(mergeTrees(oneF,oneS));


////binary tree////////////////////////////////////////////////////////////////////////
// console.log('==================binary tree==================');

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

// console.log("max=", tree.findMax());

let preOrder = tree.preOrder();
console.log('pre order: ', preOrder);
//pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5

let inOrder = tree.inOrder();
console.log('in order: ', inOrder);
//pre order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5

let postOrder = tree.postOrder();
console.log('post order: ', postOrder);
// //pre order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1

console.log('breadthFirst: ', tree.breadthFirst());
// expected[ 1, 2, 3, 6, 4, 5, 7, 8, 9]

console.log('levelOrderBottom: ', levelOrderBottom(one));
// expected[8, 9, 7, 6, 4, 5, 2, 3, 1]

console.log('maxDepth is = ', maxDepth(one));
console.log('minDepth is = ', minDepth(one));

console.log('hasPathSum ? ', hasPathSum(one,8));
console.log('hasPathSum ? ', hasPathSum(one,25));
console.log('hasPathSum ? ', hasPathSum(one,1));

console.log('sumNumbers is = ', sumNumbers(one));

console.log('isBalanced ? ', isBalanced(one));

// console.log('oddSum= ', tree.oddSum());

///////////////////////////////
// let tree = null;

// let two = new Node(2);
// let two2 = new Node(2);
// let seven = new Node(7);
// let five = new Node(5);
// let five5 = new Node(5);
// let six = new Node(6);
// let eleven = new Node(11);
// let nine = new Node(9);
// let fifteen = new Node(15);

// two.left = seven;
// two.right = five;
// seven.left = two2;
// seven.right = six;
// six.left = five5;
// six.right = eleven;
// five.right = nine;
// nine.left = fifteen;

// tree = new BinaryTree(two);
// console.log("max=",tree.findMax());
// console.log('breadthFirst: ',tree.breadthFirst());
// console.log('fizzBuzz: ',tree.fizzBuzz());


////binary search tree///////////////////////////////////////////////////////////////
// console.log('==================binary search tree==================');

// let ten = new Node(10);
// let five = new Node(5);
// let two = new Node(2);
// let seven = new Node(7);
// let fivteen = new Node(15);
// let twelve = new Node(12);
// let seventeen = new Node(17);

// ten.left = five;
// ten.right = fivteen;
// five.left = two;
// five.right = seven;
// fivteen.left = twelve;
// fivteen.right = seventeen;

// let tree2 = null;

// tree2 = new BinarySearchTree(ten);

// tree2.add(18);
// tree2.add(4);
// console.log(tree2.contains(1));
// console.log(tree2.contains(4));
// console.log(tree2.contains(7));
// console.log('pre order: ', tree2.preOrder());

// console.log("max=", tree2.findMax());

// const newTree = new BinarySearchTree();
// newTree.add(10);
// newTree.add(11);
// newTree.add(12);
// let tree3 = null;
// let tree4 = null;

// let folder1 = new Node("folder1");
// let folder2 = new Node("folder2");
// let folder3 = new Node("folder3");
// let file1 = new Node("file.css");
// let file2 = new Node("file.js");

// folder1.left = folder2;
// folder1.right = folder3;
// folder2.right = file1;
// folder3.right = file2;

// let folder4 = new Node("folder4");
// let folder5 = new Node("folder5");
// let folder6 = new Node("folder6");
// let file3 = new Node("file.py");
// let file4 = new Node("file.java");

// folder4.left = folder5;
// folder4.right = folder6;
// folder5.right = file3;
// folder6.right = file4;
// tree3 = new BinaryTree(folder1);
// tree4 = new BinaryTree(folder4);
// console.log("isSameFilesNumber:", isSameFilesNumber(tree3, tree4));



let a20 = new Node(20);
let a10 = new Node(10);
let a6 = new Node(6);
let a3 = new Node(3);
let a8 = new Node(8);
let a18 = new Node(18);
let a12 = new Node(12);
let a19 = new Node(19);
let a30 = new Node(30);
let a25 = new Node(25);
let a22 = new Node(22);
let a27 = new Node(27);
let a35 = new Node(35);
let a32 = new Node(32);
let a37 = new Node(37);


a20.left = a10;
a20.right = a30;

a10.left = a6;
a10.right=a18;

a30.left = a25;
a30.right = a35;

a6.left = a3;
a6.right = a8;

a18.left=a12;
a18.right=a19;

a25.left = a22;
a25.right = a27;

a35.left = a32;
a35.right = a37;

console.log('isBST ? ', isBST(a20));
