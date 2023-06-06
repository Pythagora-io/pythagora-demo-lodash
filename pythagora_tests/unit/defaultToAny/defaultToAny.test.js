import defaultToAny from '../../../defaultToAny.js';

describe('defaultToAny', () => {
  test('1, 10, 20', () => {
    expect(defaultToAny(1, 10, 20)).toBe(1);
  });

  test('undefined, 10, 20', () => {
    expect(defaultToAny(undefined, 10, 20)).toBe(10);
  });

  test('undefined, null, 20', () => {
    expect(defaultToAny(undefined, null, 20)).toBe(20);
  });

  test('undefined, null, NaN', () => {
    expect(defaultToAny(undefined, null, NaN)).toBeNaN();
  });

  test('empty', () => {
    expect(defaultToAny()).toBeUndefined();
  });

  test('string, number, boolean', () => {
    expect(defaultToAny('abc', 123, true)).toBe('abc');
  });
});
