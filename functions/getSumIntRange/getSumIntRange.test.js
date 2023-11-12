import {
  getSumIntRange,
  dataForTest,
} from './index.js';

describe('getSumIntRange:', () => {
  it('Unit test 1:', () => {
    const { num, execute } = dataForTest.test1;
    expect(getSumIntRange(num.a, num.b)).toEqual(execute);
  });

  it('Unit test 2:', () => {
    const { num, execute } = dataForTest.test2;
    expect(getSumIntRange(num.a, num.b)).toEqual(execute);
  });

  it('Unit test 3:', () => {
    const { num, execute } = dataForTest.test3;
    expect(getSumIntRange(num.a, num.b)).toEqual(execute);
  });

  it('Unit test 4:', () => {
    const { num, execute } = dataForTest.test4;
    expect(getSumIntRange(num.a, num.b)).toEqual(execute);
  });

  it('Unit test 5:', () => {
    const { num, execute } = dataForTest.test5;
    expect(getSumIntRange(num.a, num.b)).toEqual(execute);
  });

  it('Unit test 6:', () => {
    const { num, execute } = dataForTest.test6;
    expect(getSumIntRange(num.a, num.b)).toEqual(execute);
  });
});
