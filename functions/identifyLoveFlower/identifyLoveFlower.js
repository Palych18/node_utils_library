/**
 * @function identifyLoveFlower
 * @param {number} flower1
 * @param {number} flower2
 * @returns {boolean | undefined}
 */

export const identifyLoveFlower = (flower1, flower2) => {
  const isValidFlower1 = typeof flower1 === 'number' &&
    flower1 > 0 &&
    Number.isInteger(flower1);

  const isValidFlower2 = typeof flower2 === 'number' &&
    flower2 > 0 &&
    Number.isInteger(flower2);

  if (!isValidFlower1 || !isValidFlower2) return;

  return (flower1 + flower2) % 2 === 1;
};
