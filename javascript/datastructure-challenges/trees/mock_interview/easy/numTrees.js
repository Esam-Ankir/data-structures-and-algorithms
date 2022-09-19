// var numTrees = function (n) {
//   var dp = [1, 1];
//   for (i = 2; i <= n; i++) {
//     dp[i] = 0;
//     for (j = 1; j <= i; j++) {
//       dp[i] += dp[i - j] * dp[j - 1];
//     }
//   }
//   return dp[n];
// };

var numTrees = function (n) {
  return fact(2 * n) / (fact(n + 1) * fact(n));
};
function fact(n) {
  if (n === 0) {
    return 1;
  }
  else {
    return n * fact(n - 1);
  }
}
module.exports = numTrees;
//Catalan Numbers
// (1, 2, 5, 14, 42, 132, 429, 1430, 4862, 16796, 58786, 208012, 742900, 2674440, 9694845,...), named after Eug�ne Charles Catalan
console.log(numTrees(1));
console.log(numTrees(2));
console.log(numTrees(3));
console.log(numTrees(4));
console.log(numTrees(5));
console.log(numTrees(6));
console.log(numTrees(7));
console.log(numTrees(8));
console.log(numTrees(9));
console.log(numTrees(10));
