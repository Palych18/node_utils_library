import { keepUpHoop } from './keepUpHoop.js';

const dataForTests = {
  test1: {
    num: 4,
    expected: 'Keep going until you get it right',
  },
  test2: {
    num: 17,
    expected: 'Great, now on to tricks',
  },
  test3: {
    num: 'one',
    expected: 'Enter a number',
  },
};

describe('keepUpHoop:', () => {
  it('Unit test 1:', () => {
    const { num, expected } = dataForTests.test1;
    expect(keepUpHoop(num)).toEqual(expected);
  });

  it('Unit test 2:', () => {
    const { num, expected } = dataForTests.test2;
    expect(keepUpHoop(num)).toEqual(expected);
  });

  it('Unit test 3:', () => {
    const { num, expected } = dataForTests.test3;
    expect(keepUpHoop(num)).toEqual(expected);
  });
});
