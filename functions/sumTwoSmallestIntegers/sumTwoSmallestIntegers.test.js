import { sumTwoSmallestIntegers } from './sumTwoSmallestIntegers';

const dataTest = {
  test1: {
    array: [19, 5, 42, 2, 77],
    expected: 7,
  },
  test2: {
    array: [10, 343445353, 3453445, 3453545353453],
    expected: 3453455,
  },
};

describe('sumTwoSmallestIntegers:', () => {
  it('Unit test 1', () => {
    const { array, expected } = dataTest.test1;
    expect(sumTwoSmallestIntegers(array)).toEqual(expected);
  });
  it('Unit test 1', () => {
    const { array, expected } = dataTest.test2;
    expect(sumTwoSmallestIntegers(array)).toEqual(expected);
  });
});
