import { getMinNumber } from './getMinNumber.js';

describe('getMinNumber:', () => {
  it('Unit test 1', () => {
    const minNum = getMinNumber(['5', 5]);
    expect(minNum).toEqual(-1);
  });
  it('Unit test 2', () => {
    const minNum = getMinNumber([5.5, 5]);
    expect(minNum).toEqual(-1);
  });

  it('Unit test 3', () => {
    const minNum = getMinNumber([5, true]);
    expect(minNum).toEqual(-1);
  });

  it('Unit test 4', () => {
    const minNum = getMinNumber([15, 5, -4, -234, 0, 156]);
    expect(minNum).toEqual(-234);
  });

  it('Unit test 5', () => {
    const minNum = getMinNumber([5, -5, 54, 100]);
    expect(minNum).toEqual(-5);
  });
});
