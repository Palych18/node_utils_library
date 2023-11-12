import {maxNumber} from './maxNumber.js';

describe ('maxNumber:', () => {
  it('Unit test 1', () => { expect(maxNumber(['5', 5])).toEqual(undefined); });
  it('Unit test 2', () => { expect(maxNumber([5.5, 5])).toEqual(undefined); });
  it('Unit test 3', () => { expect(maxNumber([5, true])).toEqual(undefined); });
  it('Unit test 4', () => { expect(maxNumber([15, 5, -4, -234, 0, 156])).toEqual(156); }); 
  it('Unit test 4', () => { expect(maxNumber([5, -5, 54, 100])).toEqual(100); }); 
});
