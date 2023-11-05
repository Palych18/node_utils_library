/**
 * @function keepUpHoop
 * @param {number} num
 * @returns {string}
 */

export const keepUpHoop = (num) => {
  let mass = '';
  if (typeof num !== 'number') mass = 'Enter a number';
  if (num >= 10) mass = 'Great, now on to tricks';
  if (num < 10) mass = 'Keep going until you get it right';
  return mass;
};
