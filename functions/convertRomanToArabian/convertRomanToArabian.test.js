import { convertRomanToArabian } from './convertRomanToArabian.js';

const dataForTest = {
  test1: {
    romanNum: 'MCMXC',
    expectedNum: 1990,
  },
  test2: {
    romanNum: 'MMVIII',
    expectedNum: 2008,
  },
  test3: {
    romanNum: 'MDCLXVI',
    expectedNum: 1666,
  },
};

describe('convertRomanToArabian:', () => {
  it('Unit test 1', () => {
    const { romanNum, expectedNum } = dataForTest.test1;
    const arabianNum = convertRomanToArabian(romanNum);
    expect(arabianNum).toEqual(expectedNum);
  });

  it('Unit test 2', () => {
    const { romanNum, expectedNum } = dataForTest.test2;
    expect(convertRomanToArabian(romanNum)).toEqual(expectedNum);
  });

  it('Unit test 3', () => {
    const { romanNum, expectedNum } = dataForTest.test3;
    expect(convertRomanToArabian(romanNum)).toEqual(expectedNum);
  });
});
