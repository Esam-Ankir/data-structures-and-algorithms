
function isSymmetric(root) {
  if (!root) return true;
  return helper(root.left, root.right);
}
function helper(l, r) {
  if ((!l && r) || (l && !r) || (l && r && l.value !== r.value)) {
    return false;
  } else if (l && r) {
    return helper(l.left, r.right) && helper(l.right, r.left);
  } else {
    return true;
  }
}
module.exports = isSymmetric;
// Time complexity : O(n).
// Space complexity : O(1).

