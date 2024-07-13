/**
 * @function getFactorial
 * @param {number} arg
 * @returns {number}
 */

const getFactorial = (arg) => {
  let res = 1;
  if (arg === 0) return res;
  for (let i = 1; i <= arg; ++i) res *= i;

  return res;
};
