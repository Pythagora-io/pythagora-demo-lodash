import minBy from '../../../minBy.js';

describe('minBy', () => {
  test('should return the minimum value based on the iteratee', () => {
    const objects = [{ 'n': 1 }, { 'n': 2 }];
    expect(minBy(objects, ({ n }) => n)).toEqual({ 'n': 1 });
  });

  test('should return undefined for empty array', () => {
    expect(minBy([], ({ n }) => n)).toBeUndefined();
  });

  test('should return undefined for null or undefined array', () => {
    expect(minBy(null, ({ n }) => n)).toBeUndefined();
    expect(minBy(undefined, ({ n }) => n)).toBeUndefined();
  });

  test('should work with negative numbers', () => {
    const numbers = [-1, -2, -3, -4];
    expect(minBy(numbers, (n) => n)).toEqual(-4);
  });

  test('should work with mixed numbers', () => {
    const numbers = [-3, 0, 3];
    expect(minBy(numbers, (n) => n)).toEqual(-3);
  });

  test('should work with string values', () => {
    const strings = ['a', 'b', 'ac', 'bc'];
    expect(minBy(strings, (s) => s.length)).toEqual('a');
  });
});
