/**
 * @function findDivisors
 * @param {number} int
 * @returns {number[] | string}
 */

export const findDivisors = (int) => {
  const arrDivisors = [];

  for (let i = 2; i < int; ++i) {
    if (int % i === 0) arrDivisors.push(i);
  }

  if (arrDivisors.length === 0) return `${int} is prime`;

  return arrDivisors;
};
