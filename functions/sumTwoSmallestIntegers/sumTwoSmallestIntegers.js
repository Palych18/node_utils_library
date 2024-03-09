/**
 * @function sumTwoSmallestIntegers
 * @param {number[]} array
 * @returns {number}
 */

export const sumTwoSmallestIntegers = (array) => {
  array.sort((a, b) => a - b);

  return array[0] + array[1];
};
