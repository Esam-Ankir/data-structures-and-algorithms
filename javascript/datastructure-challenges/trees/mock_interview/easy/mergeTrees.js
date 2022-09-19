const Node = require('../../node');

function mergeTrees (t1, t2) {
  if (!t1 && !t2) return null;
  let root = new Node((t1 ? t1.value : 0) + (t2 ? t2.value : 0));
  root.left = mergeTrees((t1 ? t1.left : null), (t2 ? t2.left : null));
  root.right = mergeTrees((t1 ? t1.right : null), (t2 ? t2.right : null));
  return root;

}
module.exports = mergeTrees;
// Time complexity : O(n).
// Space complexity : O(n).
