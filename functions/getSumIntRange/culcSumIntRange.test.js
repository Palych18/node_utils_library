import { culcSumIntRange } from './culcSumIntRange.js';

const dataForTest = {
  test1: {
    num: {
      start: 1,
      end: 0,
    },
    execute: 1,
  },
  test2: {
    num: {
      start: 1,
      end: 2,
    },
    execute: 3,
  },
  test3: {
    num: {
      start: 0,
      end: 1,
    },
    execute: 1,
  },
  test4: {
    num: {
      start: 1,
      end: 1,
    },
    execute: 1,
  },
  test5: {
    num: {
      start: -1,
      end: 0,
    },
    execute: -1,
  },
  test6: {
    num: {
      start: -1,
      end: 2,
    },
    execute: 2,
  },
};


describe('culcSumIntRange:', () => {
  it('Unit test 1', () => {
    const { num, execute } = dataForTest.test1;
    const sum = culcSumIntRange(num.start, num.end);
    expect(sum).toEqual(execute);
  });

  it('Unit test 2', () => {
    const { num, execute } = dataForTest.test2;
    const sum = culcSumIntRange(num.start, num.end);
    expect(sum).toEqual(execute);
  });

  it('Unit test 3', () => {
    const { num, execute } = dataForTest.test3;
    const sum = culcSumIntRange(num.start, num.end);
    expect(sum).toEqual(execute);
  });

  it('Unit test 4', () => {
    const { num, execute } = dataForTest.test4;
    const sum = culcSumIntRange(num.start, num.end);
    expect(sum).toEqual(execute);
  });

  it('Unit test 5', () => {
    const { num, execute } = dataForTest.test5;
    const sum = culcSumIntRange(num.start, num.end);
    expect(sum).toEqual(execute);
  });

  it('Unit test 6', () => {
    const { num, execute } = dataForTest.test6;
    const sum = culcSumIntRange(num.start, num.end);
    expect(sum).toEqual(execute);
  });
});
