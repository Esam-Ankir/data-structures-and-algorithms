
class Node {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}


function isSorted(head) {
  if (head === null) return "LL is empty";
  if (head.next === null) return true;// extra
  if (head.next !== null) {
    return (head.value <= head.next.value && isSorted(head.next));
  }
  else return true;
}

//false
// let head = newNode(7);
// head.next = newNode(5);
// head.next.next = newNode(4);
// head.next.next.next = newNode(3);
//true
let head = newNode(0);
head.next = newNode(1);
head.next.next = newNode(5);
head.next.next.next = newNode(99);
head.next.next.next.next = newNode(100);

if (isSorted(head) === true) console.log("true");
else console.log("false");

function newNode(value) {
  let temp = new Node(value);
  temp.next = null;
  // temp.value = value;
  return temp;
}
