import flow from '../../../flow.js';

describe('flow test suite', () => {
  test('should handle correct flow of addition and multiplication', () => {
    const add = (a, b) => a + b;
    const square = (a) => a * a;
    const flowFunc = flow(add, square);
    expect(flowFunc(2, 3, 4)).toEqual(25);
  });

  test('should throw TypeError when non-function is provided', () => {
    const notFunc = 42;
    expect(() => {
      flow(notFunc);
    }).toThrow(TypeError);
  });

  test('should return original value when no function is provided', () => {
    const flowFunc = flow();
    expect(flowFunc('test')).toEqual('test');
  });
});
