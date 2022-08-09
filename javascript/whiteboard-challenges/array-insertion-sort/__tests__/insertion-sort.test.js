'use strict';
const insertionSort = require('../Insertion-Sort');

describe('Insertion Sort Tests', () => {

  test('Test1:Randomly-sorted:', () => {
    // let insertionSort = new sort();
    expect(insertionSort([8, 4, 23, 42, 16, 15])).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });
  test('Test1:Reverse-sorted:', () => {
    // let insertionSort = new sort();
    expect(insertionSort([20, 18, 12, 8, 5, -2])).toStrictEqual([-2, 5, 8, 12, 18, 20]);
  });
  test('Test1:Few uniques:', () => {
    // let insertionSort = new sort();
    expect(insertionSort([5, 12, 7, 5, 5, 7])).toStrictEqual([5, 5, 5, 7, 7, 12]);
  });
  test('Test1:Nearly-sorted:', () => {
    // let insertionSort = new sort();
    expect(insertionSort([2, 3, 5, 7, 13, 11])).toStrictEqual([2, 3, 5, 7, 11, 13]);
  });
  // Reverse-sorted: [20,18,12,8,5,-2]
  // Few uniques: [5,12,7,5,5,7]
  // Nearly-sorted: [2,3,5,7,13,11]
  // console.log(insertionSort([8, 4, 23, 42, 16, 15]));
  // console.log(insertionSort([20, 18, 12, 8, 5, -2]));
  // console.log(insertionSort([5, 12, 7, 5, 5, 7]));
  // console.log(insertionSort([2, 3, 5, 7, 13, 11]));
});
