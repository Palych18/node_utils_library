import { loveFlower } from './loveFlower.js';

describe ('loveFlower:', () => {
  it('Test 1', () => { expect(loveFlower(4, 5)).toEqual(true); });
  it('Test 2', () => { expect(loveFlower(7, 6)).toEqual(true); });
  it('Test 3', () => { expect(loveFlower(8, 6)).toEqual(false); });
  it('Test 4', () => { expect(loveFlower(7, 9)).toEqual(false); });
  it('Test 5', () => { expect(loveFlower(7.7, 9)).toEqual(undefined); });
  it('Test 6', () => { expect(loveFlower(7, 9.2)).toEqual(undefined); });
  it('Test 7', () => { expect(loveFlower('8', 11)).toEqual(undefined); });
  it('Test 8', () => { expect(loveFlower(10, true)).toEqual(undefined); });
});
