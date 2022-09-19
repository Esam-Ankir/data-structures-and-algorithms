
function uniqueCharacters(str) {

  // If at any time we encounter 2
  // same characters, return false
  for (let i = 0; i < str.length; i++)
    for (let j = i + 1; j < str.length; j++)
      if (str[i] === str[j])
        return false;

  // If no duplicate characters
  // encountered, return true
  return true;
}
module.exports = uniqueCharacters;

uniqueCharacters("string");

// function uniqueCharacters(str)
// {
//     let chArray = str.split('');

//     // Using sorting
//     chArray.sort();

//     for (let i = 0; i < chArray.length - 1; i++)
//     {

//         // if the adjacent elements are not
//         // equal, move to next element
//         if (chArray[i] != chArray[i + 1])
//             continue;

//         // if at any time, 2 adjacent elements
//         // become equal, return false
//         else
//             return false;
//     }

//     return true;
// }
