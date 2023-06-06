import isArrayLike from '../../../isArrayLike.js';

describe('isArrayLike', () => {
  test('arrays should be array-like', () => {
    expect(isArrayLike([1, 2, 3])).toBe(true);
  });

  test('strings should be array-like', () => {
    expect(isArrayLike('abc')).toBe(true);
  });

  test('functions should not be array-like', () => {
    expect(isArrayLike(Function)).toBe(false);
  });

  test('null value should not be array-like', () => {
    expect(isArrayLike(null)).toBe(false);
  });

  test('undefined value should not be array-like', () => {
    expect(isArrayLike(undefined)).toBe(false);
  });

  test('objects with valid integer length property should be array-like', () => {
    expect(isArrayLike({ length: 3 })).toBe(true);
  });

  test('objects with a non-integer length property should not be array-like', () => {
    expect(isArrayLike({ length: 1.2 })).toBe(false);
  });

  test('objects with a negative length property should not be array-like', () => {
    expect(isArrayLike({ length: -1 })).toBe(false);
  });

  test('objects with a zero as non-number length property should not be array-like', () => {
    expect(isArrayLike({ length: '0' })).toBe(false);
  });

  test('objects with Number.MAX_SAFE_INTEGER as length should be array-like', () => {
    expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER })).toBe(true);
  });

  test('objects with a length property over Number.MAX_SAFE_INTEGER should not be array-like', () => {
    expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER + 1 })).toBe(false);
  });
});
