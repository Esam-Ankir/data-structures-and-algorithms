'use strict';
const LinkedList = require('./lib/linkedlist');

const list = new LinkedList();



list.insert(8);
list.insert(7);
list.insert(6);
list.insert(5);
list.insert(4);
list.insert(3);
list.insert(2);
list.insert(1);  //this is the head


console.log(list.toString());

console.log(7,list.includes(7));
console.log(9,list.includes(9));
console.log(0,list.includes(0));
console.log(1,list.includes(1));



