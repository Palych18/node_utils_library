/**
 * @function romanNumDecoder
 * @param {string} romanNum
 * @returns {number}
 */

export const romanNumDecoder = (romanNum) => {
  const /** @type {{ [key: string]: number }} */ romanNumDecimal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let decimalNum = 0;

  for (let i = 0; i < romanNum.length; i++) {
    if (i < romanNum.length - 1 &&
       romanNumDecimal[ romanNum[ i ] ] <
       romanNumDecimal[ romanNum[ i + 1 ] ]
    ) {
      decimalNum -= romanNumDecimal[romanNum[i]];
    } else {
      decimalNum += romanNumDecimal[romanNum[i]];
    }
  };

  return decimalNum;
};
