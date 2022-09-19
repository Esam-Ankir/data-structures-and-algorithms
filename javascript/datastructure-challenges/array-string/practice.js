/* eslint-disable no-unused-vars */
// let string = "my name is esam";
// let arr = string.split(" ");
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   // let inArr = arr[i].split("");
//   for (let j = arr[i].length - 1; j >= 0; j--) {
//     // console.log(arr[j]);
//   }
// }
///////////////////////////////////////////////////////////////////////////
function repeated(array) {

  let mostRep = null;
  let result = [];
  let finalResult = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        result.push(j);
        mostRep = array[j];
      }
    }
  }
  finalResult.push(result[0]);
  finalResult.push(result[1]);
  return `second and third repeated indexes are: [${finalResult}],mostRep is: ${mostRep}`;
}
//input [1, 3, 3, 4, 3, 3, 5]
//output [2, 4] , 3

// console.log('====================================');
// console.log(repeated([1, 3, 3, 4, 3, 3, 5]));
// console.log(repeated([3, 5, 3, 4, 1, 5, 5]));
// console.log('====================================');
///////////////////////////////////////////////////////////////////////////
// function getMostFrequent(arr){

// }
// function getMostFrequent(arr) {
//   const x = arr.reduce((acc, val) => {
//     acc[val] = (acc[val] || 0) + 1;
//     return acc;
//   }, {});
//   return Object.keys(x).reduce((a, b) => x[a] > x[b] ? a : b);
// }
// console.log(getMostFrequent([3, 5, 3, 4, 1, 5, 5]));

///////////////////////////////////////////////////////////////////////////
//'- given an array, return an array for the elements that doesn't have greater elements in the right side of them.. EX: [2,8,5,4] => [8,5,4]
function noGreaterInRight(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        arr.shift();
      }
    }
  }
  console.log(arr);
  return arr;
}
// noGreaterInRight([8, 9, 7, 6, 4, 2, 1]); //[9,7,6,4,2,1]
// noGreaterInRight([2, 8, 5, 4]); //[8,5,4]
///////////////////////////////////////////////////////////////////////////
function isSameChar(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  let isSame = [];
  // if (arr1.length === arr2.length) { //add it when no repetition accepted
  arr1.forEach(element => {
    isSame.push(arr2.includes(element));
  });
  if (isSame.includes(false)) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
  // } else {
  //   console.log(false);
  //   return false;
  // }

}
// isSameChar("esam", "same");
// isSameChar("esam", "samee");
// isSameChar("esam", "sama");
///////////////////////////////////////////////////////////////////////////
//[1,2,3,5,6]
//missing number is: 4
function missingNum(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      console.log(`missing number is ${arr[i] + 1}`);
    }
  }
}
// missingNum([1, 2, 3, 5, 6]);
missingNum([-1, 0, 1, 4, 6]);

//////////////////////////////////////////////////////////////////////////
function nextUniqueYear(string) {
  let yearNum = +string + 1;//number
  let yearStr = yearNum.toString();//string
  // console.log(new Set(yearStr));
  if (new Set(yearStr).size === yearStr.length) {
    console.log(yearStr);
  } else {
    nextUniqueYear(yearStr);
  }
}
nextUniqueYear("1987");
// nextUniqueYear("2013");
//////////////////////////////////////////////////////////////////////////
// "hello"found
// OUTPUT  YES,NO
//includes

//aaadddaad who repeated more
//think of object because key is unique
//value of key is counter
//use In method in object
//or by reduce
let x, y;
((2400/y) / 2) ^ 2 + y ^ 2 === 50 ^ 2;

console.log("xxxxxxxxxxxxxxxxxxxxxxxx",y);

