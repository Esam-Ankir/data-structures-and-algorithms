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
  // (not been solved) Should a given key already exist, replace its value from the value argument given to this method.
  set(key, value) {
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
        if (this.table[i].head.next) {
          keysArr.push(Object.keys(this.table[i].head.next.value));
        }
      }
    }
    return keysArr;
  }
  // Write a function called repeated word that finds the first word to occur more than once in a string
  // Arguments: string
  // Return: string
  static repeatedWord(string) {
    let lowerCase = string.toLowerCase().replace(/[^\w\s]/g, '');
    let token = lowerCase.split(" ");
    let newHash = new Hashmap(token.length);
    console.log(token.length);
    for (let i = 0; i < token.length; i++) {
      if (newHash.contains(token[i]) && newHash.get(token[i]) === 1) {
        newHash.set(token[i], newHash.get(token[i]) + 1);
        // output = token[i];
        console.log(token[i]);
        return token[i];
      } else {
        newHash.set(token[i], 1);
      }
    }
  }
}
let string1 = "Once upon a time, there was a brave princess who...";
let string2 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
let string3 = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
let string4 = "Ravi had been saying that he had been there";

Hashmap.repeatedWord(string1);
Hashmap.repeatedWord(string2);
Hashmap.repeatedWord(string3);
Hashmap.repeatedWord(string4);


// const myhashmap = new Hashmap(10);
// myhashmap.set('esam', 'student esam');

// "Once upon a time, there was a brave princess who..."
// =>"a"
// "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York..."
// "summer"


// const myhashmap = new Hashmap(10);
// myhashmap.set('esam', 'student esam');
// myhashmap.set('ahmad', 'student ahmad');
// myhashmap.set('mohamad', 'student mohamad');
// myhashmap.set('samah', 'student samah');
// myhashmap.set('laith', 'student laith');
// myhashmap.set('shihab', 'student shihab');
// myhashmap.set('shihab', 'student shihab');


// console.log(myhashmap);

// console.log(myhashmap.table[8]);
// console.log(myhashmap.table[8].head.next);

// myhashmap.table.forEach((ll) => {
//   console.log(ll.values());
// });

// console.log(myhashmap.get('esam'));
// console.log(myhashmap.get('samah'));

// console.log(myhashmap.contains('esam'));
// console.log(myhashmap.contains('sam'));

// console.log(myhashmap.keys());



