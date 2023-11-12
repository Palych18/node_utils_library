import { romanNumDecoder } from './romanNumDecoder.js';

const dataForTest = {
  test1: {
    romanNum: 'MCMXC',
    expected: 1990,
  },
  test2: {
    romanNum: 'MMVIII',
    expected: 2008,
  },
  test3: {
    romanNum: 'MDCLXVI',
    expected: 1666,
  },
};

describe('romanNumDecoder:', () => {
  it('Unit test 1', () => {
    const { romanNum, expected } = dataForTest.test1;
    expect(romanNumDecoder(romanNum)).toEqual(expected);
  });

  it('Unit test 2', () => {
    const { romanNum, expected } = dataForTest.test2;
    expect(romanNumDecoder(romanNum)).toEqual(expected);
  });

  it('Unit test 3', () => {
    const { romanNum, expected } = dataForTest.test3;
    expect(romanNumDecoder(romanNum)).toEqual(expected);
  });
});
