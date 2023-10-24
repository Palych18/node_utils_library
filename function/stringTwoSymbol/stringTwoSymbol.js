/**
 * @function stringTwoSymbol
 * @param {string}
 * @returns {string}
 */

export const stringTwoSymbol = (text) => {

  const pair = [];
  let i = 0;

  while (i < text.length) {
    if (i + 1 < text.length) {
      pair.push(text.slice(i, i + 2));
    }
    else {
      pair.push(text[i] + '_');
    }

    i += 2;
  }

  return pair;
};
