/**
 * @function spinAround
 * @param {string[]} arrRotation
 * @returns {number}
 */

export const spinAround = (arrRotation) => {
  const right = arrRotation.filter((arr) => arr === 'right').length;
  const left = arrRotation.filter((arr) => arr === 'left').length;
  const spin = Math.abs(right - left);
  return Math.floor(spin / 4);
};
