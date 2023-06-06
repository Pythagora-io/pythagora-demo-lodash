import head from '../../../head.js';
describe('head', () => {
  test('should return first element of non-empty array', () => {
    expect(head([1, 2, 3])).toBe(1);
  });

  test(' return undefined for empty array', () => {
    expect(head([])).toBeUndefined();
  });

  test('should return undefined for null input', () => {
    expect(head(null)).toBeUndefined();
  });

  test('should return undefined for undefined input', () => {
    expect(head(undefined)).toBeUndefined();
  });

  test('should return first element if input is array-like object', () => {
    const arrayLikeObject = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
    expect(head(arrayLikeObject)).toBe('a');
  });
});
