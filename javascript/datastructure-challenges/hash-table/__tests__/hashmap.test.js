'use strict';
const Hashmap = require('../hashmap');
const Node = require('../node');
const BinaryTree = require('../binary-tree');
const treeIntersection = require('../treeIntersection/tree-intersection');
describe('Hash Table Tests', () => {

  test('Test1: Setting a key/value to your hashtable results in the value being in the data structure', () => {
    const newMap = new Hashmap(1);
    newMap.set('esam', 'student esam');
    expect(newMap.contains('esam')).toBe(true);
  });
  test('Test2: Retrieving based on a key returns the value stored', () => {
    const newMap = new Hashmap(1);
    newMap.set('esam', 'student esam');
    expect(newMap.get('esam')).toBe('student esam');
  });
  test('Test3: Successfully returns null for a key that does not exist in the hashtable', () => {
    const newMap = new Hashmap(1);
    newMap.set('esam', 'student esam');
    expect(newMap.get('esa')).toBe(null);
  });
  test('Test4: Successfully returns a list of all unique keys that exist in the hashtable', () => {
    const newMap = new Hashmap(10);
    newMap.set('esam', 'student esam');
    newMap.set('ahmad', 'student ahmad');
    newMap.set('laith', 'student laith');
    newMap.set('shihab', 'student shihab');
    newMap.set('mohamad', 'student mohamad');
    newMap.set('samah', 'student samah');
    expect(newMap.keys()).toEqual([['laith'], ['ahmad'], ['mohamad'], ['shihab'], ['esam'], ['samah']]);
  });

  test('Test5: Successfully handle a collision within the hashtable', () => {
    const newMap = new Hashmap(1);
    newMap.set('esam', 'student esam');
    newMap.set('samah', 'student samah');
    expect(newMap.table).toEqual( [{"head": {"next": {"next": null, "value": {"samah": "student samah"}}, "value": {"esam": "student esam"}}, "length": 2, "tail": {"next": null, "value": {"samah": "student samah"}}}]);
  });
  test('Test6: Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const newMap = new Hashmap(1);
    newMap.set('esam', 'student esam');
    newMap.set('samah', 'student samah');
    expect(newMap.get('esam')).toEqual('student esam');
  });
  test('Test7: Successfully return first repeated word', () => {
    let string1 = 'Once upon a time, there was a brave princess who...';
    expect(Hashmap.repeatedWord(string1)).toEqual('a');
  });
  test('Test8: Successfully return first repeated word when not same case (lower and upper)', () => {
    let string1 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(Hashmap.repeatedWord(string1)).toEqual('it');
  });
  test('Test9: Successfully return first repeated word when there is a symbol with the repeated letter ', () => {
    let string1 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(Hashmap.repeatedWord(string1)).toEqual('summer');
  });
  test('Test10: Successfully return first repeated word when there are more than one repeated word ', () => {
    let string1 = 'Ravi had been saying that he had been there';
    expect(Hashmap.repeatedWord(string1)).toEqual('had');
  });
  test('Test11: Successfully return common values in 2 binary trees ', () => {
    let tree1 = null;
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    one.left = two;
    one.right = three;
    two.left = four;
    three.left = five;

    let tree2 = null;
    let six = new Node(6);
    let two2 = new Node(2);
    let three3 = new Node(3);
    let seven = new Node(7);
    let ten = new Node(10);
    six.left = two2;
    six.right = three3;
    two2.left = seven;
    three3.left = ten;

    tree1 = new BinaryTree(one);
    tree2 = new BinaryTree(six);
    expect(treeIntersection(tree1, tree2)).toEqual([2, 3]);
  });
});




