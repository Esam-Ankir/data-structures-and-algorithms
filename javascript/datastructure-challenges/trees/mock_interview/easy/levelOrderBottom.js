'use strict';
var levelOrderBottom = function (root) {
  var res = [];
  helper(root, 0, res);
  return res.reverse();
};

var helper = function (root, level, res) {
  if (!root) return;
  if (!res[level]) res[level] = [];

  res[level].push(root.value);

  helper(root.left, level + 1, res);
  helper(root.right, level + 1, res);
};

module.exports = levelOrderBottom;
// Time complexity : O(n).
// Space complexity : O(n).
