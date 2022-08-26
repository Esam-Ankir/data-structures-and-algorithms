const LinkedList = require('./linked-list');

class Hashmap {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }
  //   hash
  // Arguments: key
  // Returns: Index in the collection for that key
  hash(key) {
    const asciicodeSum = key.split('').reduce((acc, cur) => {
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
    let token = lowerCase.split(' ');
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
module.exports = Hashmap;
