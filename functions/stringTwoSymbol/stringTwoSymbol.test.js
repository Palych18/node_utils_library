import { stringTwoSymbol } from './stringTwoSymbol.js';

const dataForTest = {
  test1: {
    strArg: 'abc',
    expected: [ 'ab', 'c_' ],
  },
  test2: {
    strArg: 'abcdef',
    expected: [ 'ab', 'cd', 'ef' ],
  },
};

describe('stringTwoSymbol:', () => {
  it('Unit test 1', () => {
    const { strArg, expected } = dataForTest.test1;
    expect(stringTwoSymbol(strArg)).toEqual(expected);
  });

  it('Unit test 2', () => {
    const { strArg, expected } = dataForTest.test2;
    expect(stringTwoSymbol(strArg)).toEqual(expected);
  });
});
