/**
 * @function minNumber
 * @param {number[]} numbers
 * @returns {number | undefined} 
 */

export const minNumber = (numbers) => {
  if(!numbers.every(numbers => Number.isInteger(numbers))) return undefined;

  const minNumber = Math.min(...numbers);
  
  return minNumber;
}
