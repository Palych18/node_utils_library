/**
 * @function checkPinCode
 * @param {string} code
 * @returns {boolean}
 */

export const checkPinCode = (code) => {
  const PIN_LEN_SM = 4;
  const PIN_LEN_LG = 6;
  const isNum = /^\d+$/.test(code);

  const isPinLen =
    code.length === PIN_LEN_SM ||
    code.length === PIN_LEN_LG;

  return isNum && isPinLen;
};
