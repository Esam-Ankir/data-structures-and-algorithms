/* eslint-disable quotes */
'use strict';
const LinkedList = require('./lib/linkedlist');

//input 2 LL's
const list1 = new LinkedList();
const list2 = new LinkedList();
//{1} -> {3} -> {2} -> null
//{5} -> {9} -> {4} -> null
list1.insert(2);
list1.insert(3);
list1.insert(1);
list2.insert(4);
list2.insert(9);
list2.insert(5);
console.log("list1:",list1.toString());
console.log("list2:",list2.toString());
//output LL
const outList = new LinkedList();
//output: {1} -> {5} -> {3} -> {9} -> {2} -> {4} -> null
console.log("outList from zip list1 & list2:",outList.zipLists(list1, list2).toString());

const list = new LinkedList();

list.insert(3);
list.insert(2);
list.insert(1);
list.append(100);
list.insertBefore(2,70);
list.insertAfter(2,700);

console.log("list:",list.toString());
console.log("list.kthFromEnd(0):",list.kthFromEnd(0));
console.log("list.kthFromEnd(1):",list.kthFromEnd(1));
console.log("list.kthFromEnd(2):",list.kthFromEnd(2));
console.log("list.kthFromEnd(3):",list.kthFromEnd(3));
console.log("list.kthFromEnd(4):",list.kthFromEnd(4));
console.log("list.kthFromEnd(5):",list.kthFromEnd(5));
console.log("list.kthFromEnd(6):",list.kthFromEnd(6));
console.log("list.includes(7):",list.includes(7));
console.log("list.includes(1):",list.includes(1));









