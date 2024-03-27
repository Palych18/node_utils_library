/**
 * @function numbersFibonacci
 * @param {number} num
 * @returns {string}
 */

export const numbersFibonacci = (num) => {
  const arrFibonacci = [0, 1];
  if (num === 0) return 'Ноль вводить нельзя!';
  if (num === 1) return arrFibonacci[0].toString();

  for (let i = 2; i < num; ++i) {
    arrFibonacci.push(arrFibonacci[i - 2] + arrFibonacci[i - 1]);
  };

  return arrFibonacci.join(' ');
};
