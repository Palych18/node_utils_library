/**
 * @function getMinNumber
 * @param {number[]} numbers
 * @returns {number | undefined}
 */

export const getMinNumber = (numbers) => {
  /** @type {(num: number) => boolean} */
  const callbackForNum = (num) => Number.isInteger(num);
  const isNumber = numbers.every(callbackForNum);

  if (!isNumber) return -1;

  return Math.min(...numbers);
};
