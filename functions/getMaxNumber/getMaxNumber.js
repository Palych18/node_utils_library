/**
 * @function getMaxNumber
 * @param {number[]} numbers
 * @returns {number}
 */

export const getMaxNumber = (numbers) => {
  /** @type {(num: number) => boolean} */
  const callbackForNum = (num) => Number.isInteger(num);
  const isNumber = numbers.every(callbackForNum);

  if (!isNumber) return -1;

  return Math.max(...numbers);
};
