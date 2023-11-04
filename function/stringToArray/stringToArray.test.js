import { stringToArray } from './stringToArray.js';

const dataForTest = {
  test1: {
    values: 'Robin Singh',
    expectValue: [ 'Robin', 'Singh' ],
  },
  test2: {
    values: 'I love arrays they are my favorite',
    expectValue: [ 'I', 'love', 'arrays', 'they', 'are', 'my', 'favorite' ],
  },
};

describe('stringToArray:', () => {

  it('Unit test 1', () => {
    const { values, expectValue } = dataForTest.test1;
    expect(stringToArray(values)).toEqual(expectValue);
  });

  it('Unit test 2', () => {
    const { values, expectValue } = dataForTest.test2;
    expect(stringToArray(values)).toEqual(expectValue);
  });
});
