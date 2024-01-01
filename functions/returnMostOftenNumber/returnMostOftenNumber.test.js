import { returnMostOftenNumber } from './returnMostOftenNumber.js';

const dataForTest = {
  test1: {
    numArray: [ 12, 10, 8, 10, 7, 10, 5, 10, 15 ],
    expected: 10,
  },
  test2: {
    numArray: [ 12, 10, 8, 12, 7, 6, 4, 10, 12, 10 ],
    expected: 12,
  },
  test3: {
    numArray: [ 12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10 ],
    expected: 3,
  },
};

describe('returnMostOftenNumber:', () => {
  it('Unit test 1', () => {
    const { numArray, expected } = dataForTest.test1;
    expect(returnMostOftenNumber(numArray)).toEqual(expected);
  });

  it('Unit test 2', () => {
    const { numArray, expected } = dataForTest.test2;
    expect(returnMostOftenNumber(numArray)).toEqual(expected);
  });

  it('Unit test 3', () => {
    const { numArray, expected } = dataForTest.test3;
    expect(returnMostOftenNumber(numArray)).toEqual(expected);
  });
});
