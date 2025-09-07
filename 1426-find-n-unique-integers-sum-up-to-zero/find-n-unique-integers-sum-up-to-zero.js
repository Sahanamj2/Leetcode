/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
//     const res = [];
//   for (let i = 1; i <= Math.floor(n / 2); i++) {
//     res.push(i, -i);
//   }
//   if (n % 2 === 1) res.push(0);
//   return res;
  if (n === 1) return [0];
  const res = [];
  let sum = 0;
  for (let i = 1; i < n; i++) {
    res.push(i);
    sum += i;
  }
  res.push(-sum); // unique and ensures total sum = 0
  return res;
};