'use strict';
// Write a function called tree_intersection that takes two binary trees as parameters.
// Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.
const Hashmap = require('../hashmap');

function tree_intersection(tree1, tree2) {
  let intersect = [];
  let arr1 = tree1.preOrder();
  let arr2 = tree2.preOrder();

  const hashmap = new Hashmap(arr1.length + arr2.length);

  for (let i = 0; i < arr1.length; i++) {
    if (!hashmap.contains(arr1[i].toString())) {
      hashmap.set(arr1[i].toString(), arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (hashmap.contains(arr2[i].toString())) {
      intersect.push(arr2[i]);
    }
  }

  return intersect.length ? intersect : 'no intersection values between the two input trees!';
}

module.exports = tree_intersection;



