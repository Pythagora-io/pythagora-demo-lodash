import isEqualWith from '../../../isEqualWith.js';

describe('isEqualWith', () => {
  test('1', () => {
    expect(isEqualWith('hello', 'hi', (a, b) => a[0] === b[0])).toBe(true);
  });

  test('2', () => {
    expect(isEqualWith('a', 'b', (a, b) => a === b)).toBe(false);
  });

  test('3', () => {
    const a = { foo: 'bar' };
    const b = { bar: 'foo' };
    const customizer = (value, other) => value.foo === other.bar;
    expect(isEqualWith(a, b, customizer)).toBe(false);
  });

  test('4', () => {
    const a = [1, 2];
    const b = [1, 2, 3];
    const customizer = (value, other) => value.length === other.length;
    expect(isEqualWith(a, b, customizer)).toBe(false);
  });

  test('5', () => {
    const a = { a: 1, b: 2 };
    const b = { a: 1, b: 2 };
    expect(isEqualWith(a, b)).toBe(true);
  });

  test('6', () => {
    const a = { x: { y: 1 } };
    const b = { x: { y: 1 } };
    expect(isEqualWith(a, b)).toBe(true);
  });

  test('7', () => {
    const a = [1, 2, 3];
    const b = [1, 2, 3];
    expect(isEqualWith(a, b)).toBe(true);
  });

  test('8', () => {
    const a = { a: 1, b: undefined };
    const b = { a: 1, c: undefined };
    expect(isEqualWith(a, b)).toBe(false);
  });

  test('9', () => {
    const a = { a: 1 };
    const b = { b: 2 };
    expect(isEqualWith(a, b)).toBe(false);
  });

  test('10', () => {
    const a = { a: { b: { c: 1 } } };
    const b = { a: { b: { c: 1 } } };
    expect(isEqualWith(a, b)).toBe(true);
  });

  test('11', () => {
    const a = [1, 2, 3];
    const b = [1, 2];
    expect(isEqualWith(a, b)).toBe(false);
  });

  test('12', () => {
    const a = { a: 1 };
    const b = { a: '1' };
    expect(isEqualWith(a, b)).toBe(false);
  });
});
