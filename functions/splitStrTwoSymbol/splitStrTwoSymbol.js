/**
 * @function splitStrTwoSymbol
 * @param {string} text
 * @returns {string[]}
 */

export const splitStrTwoSymbol = (text) => {

  const pair = [];
  let i = 0;

  while (i < text.length) {
    if (i + 1 < text.length) {
      pair.push(text.slice(i, i + 2));
    } else {
      pair.push(text[i] + '_');
    }

    i += 2;
  }

  return pair;
};
