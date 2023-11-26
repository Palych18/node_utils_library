import { convertStrToArr } from './convertStrToArr.js';

const dataForTest = {
  test1: {
    strValue: 'Robin Singh',
    expectArr: [ 'Robin', 'Singh' ],
  },
  test2: {
    strValue: 'I love arrays they are my favorite',
    expectArr: [ 'I', 'love', 'arrays', 'they', 'are', 'my', 'favorite' ],
  },
};

describe('convertStrToArr:', () => {

  it('Unit test 1', () => {
    const { strValue, expectArr } = dataForTest.test1;
    const str = convertStrToArr(strValue);
    expect(str).toEqual(expectArr);
  });

  it('Unit test 2', () => {
    const { strValue, expectArr } = dataForTest.test2;
    const str = convertStrToArr(strValue);
    expect(str).toEqual(expectArr);
  });
});
