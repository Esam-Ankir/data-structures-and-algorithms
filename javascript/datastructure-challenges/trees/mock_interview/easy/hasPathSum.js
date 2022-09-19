
function hasPathSum(root, sum) {
  if (!root) return false;
  if (root.value === sum && !root.left && !root.right)
    return true;
  return hasPathSum((root.left), (sum - root.value)) || hasPathSum((root.right), (sum - root.value));
}
module.exports = hasPathSum;

// Time complexity : O(n).
// Space complexity : O(1).
