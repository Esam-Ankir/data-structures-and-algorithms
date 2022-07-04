'use strict';
const BinarySearchTree = require('../binarySearchTree');
const Node = require('../node');

let tree2 = null;
describe('Binary Search Tree', () => {
  beforeAll(() => {
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

    tree2 = new BinarySearchTree(ten);
  });

  test('test1:Can successfully instantiate an empty tree', () => {
    const newTree = new BinarySearchTree();
    expect(newTree.root).toBeNull();
  });
  test('test2:Can successfully instantiate a tree with a single root node', () => {
    const newTree = new BinarySearchTree(new Node(10));
    expect(newTree.root.value).toEqual(10);
  });
  test('test3:For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    const newTree = new BinarySearchTree(new Node(2));
    newTree.add(1);
    newTree.add(3);
    expect(newTree.root.left.value).toEqual(1);
    expect(newTree.root.right.value).toEqual(3);
  });
  test('test4:Can successfully return a collection from a preorder traversal', () => {
    let expectedOutput = [ 10, 5, 2, 7, 15, 12, 17];
    let preOrder = tree2.preOrder();
    expect(preOrder).toEqual(expectedOutput);
  });
  test('test5:Can successfully return a collection from an inorder traversal', () => {
    let expectedOutput = [2, 5, 7, 10, 12, 15, 17];
    let inOrder = tree2.inOrder();
    expect(inOrder).toEqual(expectedOutput);
  });
  test('test6:Can successfully return a collection from a postorder traversal', () => {
    let expectedOutput = [2, 7, 5, 12, 17, 15, 10];
    let postOrder = tree2.postOrder();
    expect(postOrder).toEqual(expectedOutput);
  });
  test('test7:Returns true	false for the contains method, given an existing or non-existing node value', () => {
    expect(tree2.contains(7)).toBe(true);
    expect(tree2.contains(13)).toBe(false);
  });

});
