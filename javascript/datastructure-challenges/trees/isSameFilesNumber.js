'use strict';

function isSameFilesNumber(tree1, tree2) {
  let num = 0;
  let num1 = 0;
  let traverse = (node) => {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    if (!node.right && !node.left && node.value.includes(".")) num++;
  };
  traverse(tree1.root);
  num1 = num;
  num = 0;
  traverse(tree2.root);
  console.log("num1,num2", num1, num);
  console.log({tree1});
  console.log({tree2});
  if (num1 === num) return true;
  else return false;
}
module.exports = isSameFilesNumber;
