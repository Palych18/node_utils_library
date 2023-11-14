import { checkPinCode } from './checkPinCode.js';

const dataForTest = {
  test1: {
    pinCode: '1234',
    execute: true,
  },
  test2: {
    pinCode: '12345',
    execute: false,
  },
  test3: {
    pinCode: 'a23ku4',
    execute: false,
  },
  test4: {
    pinCode: '000000',
    execute: true,
  },
};

describe('checkPinCode:', () => {
  it('Unit test 1:', () => {
    const { pinCode, execute } = dataForTest.test1;
    expect(checkPinCode(pinCode)).toEqual(execute);
  });
  it('Unit test 2:', () => {
    const { pinCode, execute } = dataForTest.test2;
    expect(checkPinCode(pinCode)).toEqual(execute);
  });
  it('Unit test 3:', () => {
    const { pinCode, execute } = dataForTest.test3;
    expect(checkPinCode(pinCode)).toEqual(execute);
  });
  it('Unit test 4:', () => {
    const { pinCode, execute } = dataForTest.test4;
    expect(checkPinCode(pinCode)).toEqual(execute);
  });
});
