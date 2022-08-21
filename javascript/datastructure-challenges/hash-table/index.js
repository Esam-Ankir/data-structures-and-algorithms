class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  // returning the all the values  from the linkedList
  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  //   hash
  // Arguments: key
  // Returns: Index in the collection for that key
  hash(key) {
    const asciicodeSum = key.split("").reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0);
    const multiPrime = asciicodeSum * 599;
    const theIndex = multiPrime % this.size;
    // console.log(theIndex);
    return theIndex;
  }
  //   set
  // Arguments: key, value
  // Returns: nothing
  // This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  // Should a given key already exist, replace its value from the value argument given to this method.
  set(key, value) {
    // if (key) {

    // }
    const hashKey = this.hash(key);
    if (!this.table[hashKey]) {
      this.table[hashKey] = new LinkedList();
    }
    this.table[hashKey].append({ [key]: value });
  }
  // get
  //   Arguments: key
  // Returns: Value associated with that key in the table
  get(key) {
    let hash = this.hash(key);
    let current = this.table[hash].head;
    while (current) {
      if (this.table[hash].head) {
        if (Object.keys(current.value)[0] === key) {
          return current.value[key];
        }
        current = current.next;
      }
    }
    return null;
  }
  // contains
  // Arguments: key
  // Returns: Boolean, indicating if the key exists in the table already.
  contains(key) {
    let hashKey = this.hash(key);
    if (this.table[hashKey]) {
      return true;
    }
    return false;
  }
  // keys
  // Returns: Collection of keys

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        keysArr.push(Object.keys(this.table[i].head.value));
      }
    }
    return keysArr;
  }

  // keys() {
  //   let keys = [];
  //   for (let i = 0; i < this.table.length; i++) {
  //     if (this.table[i]) {
  //       // console.log(this.table[7]);
  //       for (let j = 0; j < this.table.length; j++) {
  //         if (!keys.includes(this.table[i][j])) {
  //           console.log(this.table[7]);
  //           keys.push(this.table[i][j]);
  //         }
  //       }
  //     }
  //   }
  //   return keys;
  // }


}

const myhashmap = new Hashmap(10);
myhashmap.set('esam', 'student esam');
myhashmap.set('ahmad', 'student ahmad');
myhashmap.set('mohamad', 'student mohamad');
myhashmap.set('samah', 'student samah');
myhashmap.set('laith', 'student laith');
myhashmap.set('shihab', 'student shihab');
myhashmap.set('shihab', 'student shihab');


// console.log(myhashmap);

// console.log(myhashmap.table[8]);
// console.log(myhashmap.table[8].head.next);

// myhashmap.table.forEach((ll) => {
//   console.log(ll.values());
// });

// console.log(myhashmap.get('esam'));
// console.log(myhashmap.get('samah'));

// console.log(myhashmap.contains ('esam'));
// console.log(myhashmap.contains ('sam'));

console.log(myhashmap.keys());



