/* eslint-disable quotes */
'use strict';
const LinkedList = require('./lib/linkedlist');

const list = new LinkedList();

list.insert(3);
list.insert(2);
list.insert(1);

list.append(100);

list.insertBefore(2,70);

list.insertAfter(2,700);

console.log(list.toString());

console.log(list.kthFromEnd(0));
console.log(list.kthFromEnd(1));
console.log(list.kthFromEnd(2));
console.log(list.kthFromEnd(3));
console.log(list.kthFromEnd(4));
console.log(list.kthFromEnd(5));
console.log(list.kthFromEnd(6));

console.log(7,list.includes(7));
console.log(1,list.includes(1));









