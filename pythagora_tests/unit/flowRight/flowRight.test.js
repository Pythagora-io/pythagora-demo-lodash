import flowRight from '../../../flowRight.js';
describe('flowRight', () => {
  test('basic functionality', () => {
    const add = (a, b) => a + b;
    const square = (n) => n * n;
    const addSquare = flowRight(square, add);
    expect(addSquare(1, 2)).toBe(9);
  });

  test('no functions provided', () => {
    const identity = flowRight();
    expect(identity(42)).toBe(42);
  });

  test('one function provided', () => {
    const double = (n) => n * 2;
    const result = flowRight(double);
    expect(result(4)).toBe(8);
  });

  test('three functions provided', () => {
    const add = (a, b) => a + b;
    const square = (n) => n * n;
    const half = (n) => n / 2;
    const addSquareHalf = flowRight(half, square, add);
    expect(addSquareHalf(2, 4)).toBe(18);
  });

  test('non-function input', () => {
    const square = (n) => n * n;
    expect(() => {
      flowRight(square, 3);
    }).toThrow(TypeError);
  });
});
