/**
 * @function loveFlower
 * @param {number} flower_1
 * @param {number} flower_2
 * @returns {boolean | undefined}
 */

export const loveFlower = (flower_1, flower_2) => {
  const isValidFlower1 = typeof flower_1 === 'number' &&
    flower_1 > 0 &&
    Number.isInteger(flower_1);

  const isValidFlower2 = typeof flower_2 === 'number' &&
    flower_2 > 0 &&
    Number.isInteger(flower_2);
    
  if (!isValidFlower1 || !isValidFlower2) return;

  return (flower_1 + flower_2) % 2 === 1;
};
