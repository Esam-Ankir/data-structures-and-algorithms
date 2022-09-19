

function sumNumbers(root, before = 0) {

  if (!root) return before;
  before = before * 10 + root.value;

  if (!root.left) return sumNumbers(root.right, before);
  if (!root.right) return sumNumbers(root.left, before);

  return sumNumbers(root.left, before) + sumNumbers(root.right, before);
}



module.exports = sumNumbers;
// Time complexity : O(n).
// Space complexity : O(1).
