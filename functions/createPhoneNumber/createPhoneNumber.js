/**
 * @function createPhoneNumbers
 * @param {number[]} numArray
 * @returns {string}
 */

export const createPhoneNumbers = (numArray) => {
  const isIntegerNunArray =
    numArray.every((num) =>
      Number.isInteger(num) &&
      num >= 0 &&
      num <= 9);

  if (numArray.length !== 10 || !isIntegerNunArray) {
    return 'Неверный формат входных данных';
  }

  const defCode = numArray.slice(0, 3).join('');
  const firstNum = numArray.slice(3, 6).join('');
  const secondNum = numArray.slice(6).join('');

  const phoneNumber = `(${defCode}) ${firstNum}-${secondNum}`;

  return phoneNumber;
};
