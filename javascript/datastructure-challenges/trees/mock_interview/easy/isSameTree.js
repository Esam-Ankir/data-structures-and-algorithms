function isSameTree (p, q) {
  if ((!p && q) || (p && !q) || (p && q && p.value !== q.value)) return false;
  if (p && q) return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  return true;
}
module.exports = isSameTree;
// Time complexity : O(n).
// Space complexity : O(1).
