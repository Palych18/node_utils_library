/**
 * @function getCountOfVowels
 * @param {string} str
 * @returns {number}
 */

export const getCountOfVowels = (str) => {
  if (!str) return 0;
  const lowerStr = str.toLowerCase();
  const vowels = 'aeiou';
  let vowelCount = 0;

  for (const letter of lowerStr) {
    if (vowels.includes(letter)) ++vowelCount;
  }

  return vowelCount;
};
