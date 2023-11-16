import { getCountOfVowels } from './getCountOfVowels.js';

describe('getCountOfVowels:', () => {
  it('Unit test 1', () => {
    const strVowels = getCountOfVowels('Audio');
    expect(strVowels).toEqual(4);
  });

  it('Unit test 2', () => {
    const strVowels = getCountOfVowels('JavaScript');
    expect(strVowels).toEqual(3);
  });
});
