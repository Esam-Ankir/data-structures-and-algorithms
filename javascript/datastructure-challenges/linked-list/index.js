/* eslint-disable no-unreachable */
/* eslint-disable quotes */
'use strict';
const LinkedList = require('./lib/linkedlist');

//input 2 LL's
const list1 = new LinkedList();
const list2 = new LinkedList();
list1.insert(2);
list1.insert(3);
list1.insert(1);
//{1} -> {3} -> {2} -> null

list2.insert(4);
list2.insert(9);
list2.insert(5);
//{5} -> {9} -> {4} -> null

//output LL
const outList = new LinkedList();
//output: {1} -> {5} -> {3} -> {9} -> {2} -> {4} -> null
console.log("outList from zip list1 & list2:", outList.zipLists(list1, list2).toString());

const list = new LinkedList();

list.insert(3);
list.insert(2);
list.insert(1);
list.append(100);
list.insertBefore(2, 70);
list.insertAfter(2, 700);

console.log("list:", list.toString());
console.log("list.kthFromEnd(0):", list.kthFromEnd(0));
console.log("list.kthFromEnd(1):", list.kthFromEnd(1));
console.log("list.kthFromEnd(2):", list.kthFromEnd(2));
console.log("list.kthFromEnd(3):", list.kthFromEnd(3));
console.log("list.kthFromEnd(4):", list.kthFromEnd(4));
console.log("list.kthFromEnd(5):", list.kthFromEnd(5));
console.log("list.kthFromEnd(6):", list.kthFromEnd(6));
console.log("list.includes(7):", list.includes(7));
console.log("list.includes(1):", list.includes(1));

//for reverse
const LL = new LinkedList();
// let reversedLL = new LinkedList();
LL.insert(7);
LL.insert(2);
LL.insert(3);
LL.insert(1);
// console.log("reversedLL:",reversedLL.reverse(LL).toString());
console.log('====================================');
console.log("LL:", LL.toString());
console.log("reversedLL:", LL.reverse().toString());

//LL: {1} -> {3} -> {2} -> {7} -> null
//reversedLL: {7} --> {2} --> {3} --> {1} --> NULL

//for isPalindrome://///////////////////////////
// const inputLL = new LinkedList();
// // let revLL = new LinkedList();
// const l = new LinkedList();
// const l2 = new LinkedList();
// inputLL.insert(7);
// inputLL.insert(2);
// inputLL.insert(2);
// inputLL.insert(8);
//inputLL: {7} --> {2} --> {2} --> {7} --> NULL
// console.log("inputLL: ",inputLL.toString());
// console.log("revLL: ",revLL.toString());
// console.log("isPalindrome: ",l.isPalindrome());

console.log('====================================');
console.log('practice');
console.log('====================================');










