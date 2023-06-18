import { toCamelCase } from './toCamelCase.js';

describe ('toCamelCase:', () => {
  it('Unit test 1', () => { expect(toCamelCase('the-stealth-warrior')).toEqual('theStealthWarrior'); });
  it('Unit test 2', () => { expect(toCamelCase('The_Stealth-Warrior')).toEqual('TheStealthWarrior'); });
  it('Unit test 3', () => { expect(toCamelCase('The_Stealth_Warrior')).toEqual('TheStealthWarrior'); });
});
