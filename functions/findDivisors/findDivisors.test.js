import { findDivisors } from './findDivisors';

const dataForTest = {
  test1: {
    integer: 12,
    expected: [2, 3, 4, 6],
  },
  test2: {
    integer: 25,
    expected: [5],
  },
  test3: {
    integer: 13,
    expected: '13 is prime',
  },
};

describe('findDivisors:', () => {
  it('Unit test1', () => {
    const { integer, expected } = dataForTest.test1;
    expect(findDivisors(integer)).toEqual(expected);
  });
  it('Unit test1', () => {
    const { integer, expected } = dataForTest.test2;
    expect(findDivisors(integer)).toEqual(expected);
  });
  it('Unit test1', () => {
    const { integer, expected } = dataForTest.test3;
    expect(findDivisors(integer)).toEqual(expected);
  });
});
