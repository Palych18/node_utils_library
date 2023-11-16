import { toCamelCase } from './toCamelCase.js';

const dataForTest = {
  test1: {
    strSeparator: 'the-stealth-warrior',
    expected: 'theStealthWarrior',
  },
  test2: {
    strSeparator: 'The_Stealth-Warrior',
    expected: 'TheStealthWarrior',
  },
  test3: {
    strSeparator: 'The_Stealth_Warrior',
    expected: 'TheStealthWarrior',
  },

};

describe('toCamelCase:', () => {
  it('Unit test 1', () => {
    const { strSeparator, expected } = dataForTest.test1;
    expect(toCamelCase(strSeparator)).toEqual(expected);
  });

  it('Unit test 2', () => {
    const { strSeparator, expected } = dataForTest.test2;
    expect(toCamelCase(strSeparator)).toEqual(expected);
  });

  it('Unit test 3', () => {
    const { strSeparator, expected } = dataForTest.test3;
    expect(toCamelCase(strSeparator)).toEqual(expected);
  });
});
