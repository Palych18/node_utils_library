import { splitStrTwoSymbol } from './splitStrTwoSymbol.js';

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

describe('splitStrTwoSymbol:', () => {
  it('Unit test 1', () => {
    const { strArg, expected } = dataForTest.test1;
    expect(splitStrTwoSymbol(strArg)).toEqual(expected);
  });

  it('Unit test 2', () => {
    const { strArg, expected } = dataForTest.test2;
    expect(splitStrTwoSymbol(strArg)).toEqual(expected);
  });
});
