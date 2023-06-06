import takeWhile from '../../../takeWhile.js';

describe('takeWhile', () => {
  test('should return an array', () => {
    expect(Array.isArray(takeWhile([1, 2, 3], x => x > 0))).toBe(true);
  });

  test('should return empty array if input array is empty', () => {
    expect(takeWhile([], x => x > 0)).toEqual([]);
  });

  test('should apply predicate to each element', () => {
    const predicate = jest.fn(x => x > 0);
    takeWhile([1, 2, 3, 0, -1], predicate);
    expect(predicate).toHaveBeenCalledTimes(4);
  });

  test('should return elements from beginning till predicate fails', () => {
    const result = takeWhile([1, 2, 3, 0, -1], x => x > 0);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should stop iterating once predicate fails', () => {
    const array = [1, 2, 3, 0, -1, 4, 5];
    const result = takeWhile(array, x => x > 0);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should return empty array if predicate returns false for first element', () => {
    const result = takeWhile([0, 1, 2, 3], x => x > 0);
    expect(result).toEqual([]);
  });

  test('should handle negative values in the array', () => {
    const array = [-1, -2, -3, 0, 1, 2, 3];
    const result = takeWhile(array, x => x < 0);
    expect(result).toEqual([-1, -2, -3]);
  });

  test('should handle complex objects', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: true },
      { user: 'pebbles', active: false },
    ];
    const result = takeWhile(users, ({ active }) => active);
    expect(result).toEqual([
      { user: 'barney', active: true },
      { user: 'fred', active: true },
    ]);
  });
});