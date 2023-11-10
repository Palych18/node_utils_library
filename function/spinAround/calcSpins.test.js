import { calcSpins } from './calcSpins.js';

const dataFotTests = {
  test1: {
    directions: [ 'right', 'right', 'right', 'right', 'left', 'right' ],
    expectedCount: 1,
  },
  test2: {
    directions: [ 'left', 'left', 'left', 'left', 'right', 'left', 'left', 'left', 'left', 'left', 'left' ],
    expectedCount: 2,
  },
  test3: {
    directions: [ 'right', 'right', 'left', 'right', 'left', 'right' ],
    expectedCount: 0,
  },
};

describe('calcSpins:', () => {
  it('Unit test 1:', () => {
    const { directions, expectedCount } = dataFotTests.test1;
    expect(calcSpins(directions)).toEqual(expectedCount);
  });

  it('Unit test 2:', () => {
    const { directions, expectedCount } = dataFotTests.test2;
    expect(calcSpins(directions)).toEqual(expectedCount);
  });

  it('Unit test 3:', () => {
    const { directions, expectedCount } = dataFotTests.test3;
    expect(calcSpins(directions)).toEqual(expectedCount);
  });
});
