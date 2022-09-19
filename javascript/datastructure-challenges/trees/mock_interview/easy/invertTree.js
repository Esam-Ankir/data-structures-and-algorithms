function invertTree(root) {
  if (root) {

    let l = root.left;
    root.left = root.right;
    root.right = l;

    invertTree(root.left);
    invertTree(root.right);
  }
  return root;
}

module.exports = invertTree;
// Time complexity : O(n).
// Space complexity : O(n).
