/**
 * @function toCamelCase
 * @param {string} str
 * @returns {string}
 */

export const toCamelCase = (str) => {
  if (!str) return '';
  const words = str.split(/[-_]/);
  let result = `${words[0]}`;

  for (const word of words.slice(1)) {
    const capitalizeWord = `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
    result += capitalizeWord;
  }

  return result;
};
