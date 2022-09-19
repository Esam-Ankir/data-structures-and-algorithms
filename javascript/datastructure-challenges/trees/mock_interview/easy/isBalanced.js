var isBalanced = function(root) {
  return helper(root, 0) >= 0;
};

var helper = function (root, depth) {
  if (!root) return depth;
  var left = helper(root.left, depth + 1);
  var right = helper(root.right, depth + 1);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
  return Math.max(left, right);
};
//or:
// const ckeckHeight = node => {
//   if (node === null) return 0;
//   const left = ckeckHeight(node.left);
//   const right = ckeckHeight(node.right);
//   if (left === false ||right === false ||Math.abs(left - right) > 1) {
//     return false;
//   }
//   return Math.max(left, right) + 1;
// };

// const isBalanced = root => {
//   if (root === null) return true;
//   return ckeckHeight(root) !== false;
// };

module.exports = isBalanced;

// Time complexity : O(n).
// Space complexity : O(n).
