// ALGORITHM Mergesort(arr)
//     DECLARE n <-- arr.length
//     if n > 1
//       DECLARE mid <-- n/2
//       DECLARE left <-- arr[0...mid]
//       DECLARE right <-- arr[mid...n]
//       // sort the left side
//       Mergesort(left)
//       // sort the right side
//       Mergesort(right)
//       // merge the sorted left and right sides together
//       Merge(left, right, arr)

// ALGORITHM Merge(left, right, arr)
//     DECLARE i <-- 0
//     DECLARE j <-- 0
//     DECLARE k <-- 0
//     while i < left.length && j < right.length
//         if left[i] <= right[j]
//             arr[k] <-- left[i]
//             i <-- i + 1
//         else
//             arr[k] <-- right[j]
//             j <-- j + 1
//         k <-- k + 1
//     if i = left.length
//        set remaining entries in arr to remaining values in right
//     else
//        set remaining entries in arr to remaining values in left


function mergeSort(arr) {
  let n = arr.length;
  if (n > 1) {
    let mid = n / 2;
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);
    //  sort the left side
    mergeSort(left);
    // sort the right side
    mergeSort(right);
    // merge the sorted left and right sides together
    merge(left, right, arr);
  }
  return arr;
}
function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  if (i === left.length) {
    // set remaining entries in arr to remaining values in right
    while (k < arr.length) {
      arr[k] = right[j];
      j++;
      k++;
    }
  } else {
    // set remaining entries in arr to remaining values in left
    while (k < arr.length) {
      arr[k] = left[i];
      i++;
      k++;
    }
  }
}

console.log(mergeSort([8, 4, 23, 42, 16, 15]));
console.log(mergeSort([20, 18, 12, 8, 5, -2])); // Reverse-sorted
console.log(mergeSort([5, 12, 7, 5, 5, 7])); // Few uniques
console.log(mergeSort([2, 3, 5, 7, 13, 11])); // Nearly-sorted

module.exports = mergeSort;
