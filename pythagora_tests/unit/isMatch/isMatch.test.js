import isMatch from '../../../isMatch.js';
describe('isMatch', () => {
  test('should return true for matching values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 2 };
    expect(isMatch(obj1, obj2)).toBe(true);
  });

  test('should return false for non-matching values', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 1 };
    expect(isMatch(obj1, obj2)).toBe(false);
  });

  test('should return true for identical objects', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(isMatch(obj1, obj2)).toBe(true);
  });

  test('should return true for empty source object', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = {};
    expect(isMatch(obj1, obj2)).toBe(true);
  });

  test('should return true for matching arrays', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    expect(isMatch(array1, array2)).toBe(true);
  });

  test('should return false for non-matching arrays', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 4];
    expect(isMatch(array1, array2)).toBe(false);
  });

  test('should return true for partial matching arrays', () => {
    const array1 = [1, 2, 3, 4];
    const array2 = [1, 2];
    expect(isMatch(array1, array2)).toBe(true);
  });

  test('should return false for non-matching nested objects', () => {
    const obj1 = { a: { b: 1, c: { d: 2 } } };
    const obj2 = { a: { b: 1, c: { d: 3 } } };
    expect(isMatch(obj1, obj2)).toBe(false);
  });

  test('should return true for matching nested objects', () => {
    const obj1 = { a: { b: 1, c: { d: 2 } } };
    const obj2 = { a: { b: 1, c: { d: 2 } } };
    expect(isMatch(obj1, obj2)).toBe(true);
  });

  test('should return true for matching nested arrays', () => {
    const array1 = [1, [2, 3], [4, [5]]];
    const array2 = [1, [2, 3], [4, [5]]];
    expect(isMatch(array1, array2)).toBe(true);
  });

  test('should return false for non-matching nested arrays', () => {
    const array1 = [1, [2, 3], [4, [5]]];
    const array2 = [1, [2, 3], [4, [6]]];
    expect(isMatch(array1, array2)).toBe(false);
  });
});
