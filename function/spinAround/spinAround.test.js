import { spinAround } from './spinAround.js';

const dataFotTests = {
  test1: {
    arrValues: [ 'right', 'right', 'right', 'right', 'left', 'right' ],
    expected: 1,
  },
  test2: {
    arrValues: [ 'left', 'left', 'left', 'left', 'right', 'left', 'left', 'left', 'left', 'left', 'left' ],
    expected: 2,
  },
  test3: {
    arrValues: [ 'right', 'right', 'left', 'right', 'left', 'right' ],
    expected: 0,
  },
};

describe('spinAround:', () => {
  it('Unit test 1:', () => {
    const { arrValues, expected } = dataFotTests.test1;
    expect(spinAround(arrValues)).toEqual(expected);
  });

  it('Unit test 2:', () => {
    const { arrValues, expected } = dataFotTests.test2;
    expect(spinAround(arrValues)).toEqual(expected);
  });

  it('Unit test 3:', () => {
    const { arrValues, expected } = dataFotTests.test3;
    expect(spinAround(arrValues)).toEqual(expected);
  });
});
