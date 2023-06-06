import sample from '../../../sample.js';

describe('sample', () => {
  test('should return undefined if array is null or undefined', () => {
    expect(sample(null)).toBeUndefined();
    expect(sample(undefined)).toBeUndefined();
  });

  test('should return undefined if array is empty', () => {
    expect(sample([])).toBeUndefined();
  });

  test('should return the only element of the array if length is 1', () => {
    const array = [42];
    expect(sample(array)).toBe(42);
  });

  test('should return a random element from the array', () => {
    const array = [1, 2, 3, 4];
    const result = sample(array);
    expect(array).toContain(result);
  });

  test('should return different elements for multiple calls', () => {
    const array = [1, 2, 3, 4];
    const results = new Set();
    for (let i = 0; i < 100; i++) {
      results.add(sample(array));
    }
    expect(results.size).toBeGreaterThan(1);
  });
});
