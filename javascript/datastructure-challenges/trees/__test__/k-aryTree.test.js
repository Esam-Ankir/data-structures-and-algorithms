'use strict';
const {KAryTree, Node} = require('../k-aryTree');

let tree = null;

describe('k-ary Tree', () => {
  beforeAll(() => {
    tree = new KAryTree(30);

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

  });

  test('fizzBuzz', () => {
    expect(tree.fizzBuzz()).toEqual( {"root": {"child": [{"child": [{"child": [], "parent": null, "value": 4}, {"child": [], "parent": null, "value": "Fizz"}], "parent": null, "value": "Fizz"}, {"child": [], "parent": null, "value": 2}, {"child": [], "parent": null, "value": "Buzz"}], "parent": null, "value": "FizzBuzz"}});
  });

});
