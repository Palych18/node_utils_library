/**
 * @function calcSpins
 * @param {string[]} directions
 * @returns {number}
 */

export const calcSpins = (directions) => {
  const rightCount = directions.filter((direction) => direction === 'right').length;
  const leftCount = directions.filter((direction) => direction === 'left').length;
  const oneDirSpinDiff = Math.abs(rightCount - leftCount);
  return Math.floor(oneDirSpinDiff / 4);
};
