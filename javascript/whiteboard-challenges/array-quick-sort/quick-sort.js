// ALGORITHM QuickSort(arr, left, right)
//     if left < right
//         // Partition the array by setting the position of the pivot value
//         DEFINE position <-- Partition(arr, left, right)
//         // Sort the left
//         QuickSort(arr, left, position - 1)
//         // Sort the right
//         QuickSort(arr, position + 1, right)

// ALGORITHM Partition(arr, left, right)
//     // set a pivot value as a point of reference
//     DEFINE pivot <-- arr[right]
//     // create a variable to track the largest index of numbers lower than the defined pivot
//     DEFINE low <-- left - 1
//     for i <- left to right do
//         if arr[i] <= pivot
//             low++
//             Swap(arr, i, low)
//      // place the value of the pivot location in the middle.
//      // all numbers smaller than the pivot are on the left, larger on the right.
//      Swap(arr, right, low + 1)
//     // return the pivot index point
//      return low + 1

// ALGORITHM Swap(arr, i, low)
//     DEFINE temp;
//     temp <-- arr[i]
//     arr[i] <-- arr[low]
//     arr[low] <-- temp

function quickSort(arr, left, right) {
  if (left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
}
function partition(arr, left, right) {
  let pivot = arr[right];
  let low = (left - 1);
  for (let i = left; i <= right - 1; i++) {
    if (arr[i] < pivot) {
      low++;
      swap(arr, low, i);
    }
  }
  swap(arr, low + 1, right);
  return (low + 1);
}
function swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}


let arr = [10, 7, 8, 9, 1, 5];
console.log('array 0 before sorting = ', arr);
quickSort(arr, 0, arr.length - 1);
console.log('array 0 after sorting = ', arr);
console.log('====================================');

let arr1 = [8, 4, 23, 42, 16, 15];
console.log('array 1 before sorting = ', arr1);
quickSort(arr1, 0, arr1.length - 1);
console.log('array 1 after sorting = ', arr1);
console.log('====================================');

let arr2 = [20, 18, 12, 8, 5, -2];// Reverse-sorted
console.log('array 2 before sorting = ', arr2);
quickSort(arr2, 0, arr2.length - 1);
console.log('array 2 after sorting = ', arr2);
console.log('====================================');

let arr3 = [5, 12, 7, 5, 5, 7];// Few uniques
console.log('array 3 before sorting = ', arr3);
quickSort(arr3, 0, arr3.length - 1);
console.log('array 3 after sorting = ', arr3);
console.log('====================================');

let arr4 = [2, 3, 5, 7, 13, 11]; // Nearly-sorted
console.log('array 4 before sorting = ', arr4);
quickSort(arr4, 0, arr4.length - 1);
console.log('array 4 after sorting = ', arr4);

module.exports = quickSort;

