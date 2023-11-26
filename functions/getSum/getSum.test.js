import { getSum } from './getSum.js';

describe('getSum:', () => {
  it('Unit test 1', () => {
    expect(getSum('5', 5)).toEqual(undefined);
  });

  it('Unit test 2', () => {
    expect(getSum(5, true)).toEqual(undefined);
  });

  it('Unit test 3', () => {
    expect(getSum(-5, 5)).toEqual(undefined);
  });

  it('Unit test 4', () => {
    expect(getSum(5, -5)).toEqual(undefined);
  });

  it('Unit test 5', () => {
    expect(getSum(5, 0)).toEqual(undefined);
  });

  it('Unit test 6', () => {
    expect(getSum(5, 5)).toEqual(10);
  });
});
