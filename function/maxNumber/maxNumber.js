/**
 * @function maxNumber
 * @param {number[]} numbers
 * @returns {number | undefined}
 */

export const maxNumber = (numbers) => {
  if(!numbers.every(numbers => Number.isInteger(numbers))) return undefined;

  const maxNumber = Math.max(...numbers);

  return maxNumber;
};
