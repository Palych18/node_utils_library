import { minNumber } from './minNumber.js';

describe('minNumber:', () => {
  it('Unit test 1', () => { expect(minNumber(['5', 5])).toEqual(undefined); });
  it('Unit test 2', () => { expect(minNumber([5.5, 5])).toEqual(undefined); });
  it('Unit test 3', () => { expect(minNumber([5, true])).toEqual(undefined); });
  it('Unit test 4', () => { expect(minNumber([15, 5, -4, -234, 0, 156])).toEqual(-234); });
  it('Unit test 5', () => { expect(minNumber([5, -5, 54, 100])).toEqual(-5); });
});
