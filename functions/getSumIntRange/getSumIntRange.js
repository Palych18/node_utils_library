/**
 * @function getSumIntRange
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

export const getSumIntRange = (a, b) => {
  let sumIntRange = 0;
  const /** @type {number[]} */ arrIntRange = [];

  if (a < b) for (let i = a; i <= b; ++i) arrIntRange.push(i);
  if (a > b) for (let i = b; i <= a; ++i) arrIntRange.push(i);
  if (a === b) sumIntRange = a;

  for (let i = 0; i < arrIntRange.length; ++i) {
    sumIntRange += arrIntRange[i];
  }
  return sumIntRange;
};
