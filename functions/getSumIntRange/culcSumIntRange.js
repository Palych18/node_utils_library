/**
 * @function culcSumIntRange
 * @param {number} startNum
 * @param {number} endNum
 * @returns {number}
 */

export const culcSumIntRange = (startNum, endNum) => {
  let sum = 0;
  const /** @type {number[]} */ range = [];

  if (startNum < endNum) {
    for (let i = startNum; i <= endNum; ++i) range.push(i);
  }

  if (startNum > endNum) {
    for (let i = endNum; i <= startNum; ++i) range.push(i);
  }

  if (startNum === endNum) sum = startNum;

  for (let i = 0; i < range.length; ++i) sum += range[i];

  return sum;
};
