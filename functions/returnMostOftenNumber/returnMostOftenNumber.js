/**
 * @function returnMostOftenNumber
 * @param {number[]} numArray
 * @returns {number}
 */

export const returnMostOftenNumber = (numArray) => {
  /** @type {any} */
  const countObj = {};

  numArray.forEach((num) => {
    countObj[num] = (countObj[num] || 0) + 1;
  });

  /** @type {any} */
  let frequentNum = null;
  let maxCount = 0;

  Object.keys(countObj).forEach((key) => {
    if (countObj[ key ] > maxCount || (countObj[ key ] === maxCount && parseInt(key) > frequentNum)) {
      frequentNum = parseInt(key);
      maxCount = countObj[ key ];
    }
  });

  return frequentNum;
};
