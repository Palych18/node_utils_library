import { getMaxNumber } from './getMaxNumber.js';

describe('getMaxNumber:', () => {
  it('Unit test 1', () => {
    const maxNum = getMaxNumber(['5', 5]);
    expect(maxNum).toEqual(-1);
  });

  it('Unit test 2', () => {
    const maxNum = getMaxNumber([5.5, 5]);
    expect(maxNum).toEqual(-1);
  });

  it('Unit test 3', () => {
    const maxNum = getMaxNumber([5, true]);
    expect(maxNum).toEqual(-1);
  });

  it('Unit test 4', () => {
    const maxNum = getMaxNumber([15, 5, -4, -234, 0, 156]);
    expect(maxNum).toEqual(156);
  });

  it('Unit test 4', () => {
    const maxNum = getMaxNumber([5, -5, 54, 100]);
    expect(maxNum).toEqual(100);
  });
});
