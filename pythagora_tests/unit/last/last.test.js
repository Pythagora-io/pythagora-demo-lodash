import last from '../../../last.js';
describe('last', () => {
  test('should return the last element of an array with integers', () => {
    expect(last([1, 2, 3])).toBe(3);
  });

  test('should return the last element of an array with mixed data types', () => {
    expect(last([1, 'two', { num: 3 }])).toEqual({ num: 3 });
  });

  test('should return undefined for an empty array', () => {
    expect(last([])).toBeUndefined();
  });

  test('should return undefined for null input', () => {
    expect(last(null)).toBeUndefined();
  });

  test('should return undefined for undefined input', () => {
    expect(last(undefined)).toBeUndefined();
  });

  test('should return the last element of an array with one element', () => {
    expect(last(['one'])).toBe('one');
  });

  test('should return the last element of an array with duplicate elements', () => {
    expect(last([1, 2, 3, 1, 2, 3])).toBe(3);
  });
});
