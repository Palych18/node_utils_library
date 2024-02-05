import { createPhoneNumbers } from './createPhoneNumber';

const dataForTest = {
  test1: {
    numArray: [ 5, 2, 3, 7, 5, 5, 7, 3, 9, 4 ],
    expected: '(523) 755-7394',
  },
  test2: {
    numArray: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2 ],
    expected: 'Неверный формат входных данных',
  },
  test3: {
    numArray: [ 5, '2', 3, 7, 5, 5, 12, 3, 9, 0 ],
    expected: 'Неверный формат входных данных',
  },
  test4: {
    numArray: [ 5, 2, 3, 7, 5, 5, 15, 3, 9, 0 ],
    expected: 'Неверный формат входных данных',
  },
};

describe('createPhoneNumber:', () => {
  it('Unit test 1', () => {
    const { numArray, expected } = dataForTest.test1;
    expect(createPhoneNumbers(numArray)).toEqual(expected);
  });
  it('Unit test 2', () => {
    const { numArray, expected } = dataForTest.test1;
    expect(createPhoneNumbers(numArray)).toEqual(expected);
  });
  it('Unit test 3', () => {
    const { numArray, expected } = dataForTest.test1;
    expect(createPhoneNumbers(numArray)).toEqual(expected);
  });
  it('Unit test 4', () => {
    const { numArray, expected } = dataForTest.test1;
    expect(createPhoneNumbers(numArray)).toEqual(expected);
  });
});
