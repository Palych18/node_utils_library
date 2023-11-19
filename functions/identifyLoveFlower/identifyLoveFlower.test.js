import { identifyLoveFlower } from './identifyLoveFlower.js';

describe('identifyLoveFlower:', () => {
  it('Test 1', () => {
    expect(identifyLoveFlower(4, 5)).toEqual(true);
  });

  it('Test 2', () => {
    expect(identifyLoveFlower(7, 6)).toEqual(true);
  });

  it('Test 3', () => {
    expect(identifyLoveFlower(8, 6)).toEqual(false);
  });

  it('Test 4', () => {
    expect(identifyLoveFlower(7, 9)).toEqual(false);
  });

  it('Test 5', () => {
    expect(identifyLoveFlower(7.7, 9)).toEqual(undefined);
  });

  it('Test 6', () => {
    expect(identifyLoveFlower(7, 9.2)).toEqual(undefined);
  });

  it('Test 7', () => {
    expect(identifyLoveFlower('8', 11)).toEqual(undefined);
  });

  it('Test 8', () => {
    expect(identifyLoveFlower(10, true)).toEqual(undefined);
  });
});
