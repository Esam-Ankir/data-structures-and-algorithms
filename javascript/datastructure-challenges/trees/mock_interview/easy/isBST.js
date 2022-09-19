var isBST = function(root) {
  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

var helper = function (root, min, max) {
  if (!root) return true;
  if (root.value <= min || root.value >= max) return false;
  return helper(root.left, min, root.value) && helper(root.right, root.value, max);
};

module.exports = isBST;


// Time complexity : O(n).
// Space complexity : O(1).
