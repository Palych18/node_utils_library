import { numbersFibonacci } from './numbersFibonacci';

const dataForTests = {
  test1: {
    number: 0,
    expected: 'Ноль вводить нельзя!',
  },
  test2: {
    number: 1,
    expected: '0',
  },
  test3: {
    number: 5,
    expected: '0 1 1 2 3',
  },
  test4: {
    number: 10,
    expected: '0 1 1 2 3 5 8 13 21 34',
  },
};

describe('numbersFibonacci', () => {
  it('Unit test 1', () => {
    const { number, expected } = dataForTests.test1;
    expect(numbersFibonacci(number)).toEqual(expected);
  });
  it('Unit test 1', () => {
    const { number, expected } = dataForTests.test2;
    expect(numbersFibonacci(1)).toEqual('0');
  });
  it('Unit test 1', () => {
    const { number, expected } = dataForTests.test3;
    expect(numbersFibonacci(5)).toEqual('0 1 1 2 3');
  });
  it('Unit test 1', () => {
    const { number, expected } = dataForTests.test4;
    expect(numbersFibonacci(10)).toEqual('0 1 1 2 3 5 8 13 21 34');
  });
});
