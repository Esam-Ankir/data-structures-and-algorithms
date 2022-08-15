'use strict';
const quickSort = require('../quick-sort');

describe('quick Sort Tests', () => {
  test('Test1:Randomly-sorted:', () => {
    let arr = [10, 7, 8, 9, 1, 5];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toStrictEqual([1, 5, 7, 8, 9, 10]);
  });
  test('Test2:Reverse-sorted:', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toStrictEqual([ -2, 5, 8, 12, 18, 20 ]);
  });
  test('Test3:Few uniques:', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toStrictEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
  test('Test4:Nearly-sorted:', () => {
    let arr = [2, 3, 5, 7, 13, 11];
    quickSort(arr, 0, arr.length - 1);
    expect(arr).toStrictEqual([ 2, 3, 5, 7, 11, 13 ]);
  });
});

