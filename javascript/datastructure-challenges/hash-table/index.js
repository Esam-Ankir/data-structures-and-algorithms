const Hashmap = require('./hashmap');
const Node = require('./node');

const BinaryTree = require('./binary-tree');
const treeIntersection = require('./treeIntersection/tree-intersection');

const myhashmap = new Hashmap(10);
myhashmap.set('esam', 'student esam');
myhashmap.set('ahmad', 'student ahmad');
myhashmap.set('mohamad', 'student mohamad');
myhashmap.set('samah', 'student samah');
myhashmap.set('laith', 'student laith');
myhashmap.set('shihab', 'student shihab');

console.log(myhashmap);

console.log(myhashmap.table[8]);
console.log(myhashmap.table[8].head.next);

myhashmap.table.forEach((ll) => {
  console.log(ll.values());
});

console.log(myhashmap.get('esam'));
console.log(myhashmap.get('samah'));

console.log(myhashmap.contains('esam'));
console.log(myhashmap.contains('sam'));

console.log(myhashmap.keys());

///repeatedWord
let string1 = 'Once upon a time, there was a brave princess who...';
let string2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
let string3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
let string4 = 'Ravi had been saying that he had been there';

Hashmap.repeatedWord(string1);
Hashmap.repeatedWord(string2);
Hashmap.repeatedWord(string3);
Hashmap.repeatedWord(string4);
///treeIntersection
let tree1 = null;
let tree2 = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree1 = new BinaryTree(one);
tree2 = new BinaryTree(seven);
console.log(treeIntersection(tree1, tree2));


