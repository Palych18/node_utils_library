import { stringTwoSymbol } from './stringTwoSymbol.js';

describe('stringTwoSymbol:', () => {
  it('Unit test 1', () => { expect(stringTwoSymbol('abc')).toEqual(["ab", "c_"]); });
  it('Unit test 2', () => { expect(stringTwoSymbol('abcdef')).toEqual(['ab', 'cd', 'ef']); });
});
