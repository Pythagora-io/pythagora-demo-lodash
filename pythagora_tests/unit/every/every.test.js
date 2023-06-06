import every from '../../../every.js';
describe('every', () => {
  test('returns true for empty array', () => {
    expect(every([], Boolean)).toBe(true);
  });

  test('returns false if any element fails the predicate', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).toBe(false);
  });

  test('returns true if all elements pass the predicate', () => {
    expect(every([2, 4, 6], (n) => n % 2 === 0)).toBe(true);
  });

  test('returns false if any element fails the custom predicate', () => {
    expect(every([1, 2, 3, 4, 5], (n) => n < 5)).toBe(false);
  });

  test('handles non-array input', () => {
    expect(every(null, Boolean)).toBe(true);
    expect(every(undefined, Boolean)).toBe(true);
  });

  test('handles empty input', () => {
    expect(every([], (n) => n > 0)).toBe(true);
  });

  test('predicate receives value, index, and array', () => {
    const testCase = [1, 2, 3];
    const receivedArgs = [];

    every(testCase, (...args) => {
      receivedArgs.push(args);
      return true;
    });

    expect(receivedArgs).toEqual([
      [1, 0, testCase],
      [2, 1, testCase],
      [3, 2, testCase],
    ]);
  });
});
