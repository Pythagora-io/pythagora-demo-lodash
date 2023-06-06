import uniqWith from '../../../uniqWith.js';

describe('uniqWith', () => {
  test('returns unique array based on custom comparison function', () => {
    const customComparer = (a, b) => Math.abs(a) === Math.abs(b);
    const inputArray = [1, -1, 2, -2, 3, 4, -3, -4, 5];
    const expectedResult = [1, 2, 3, 4, 5];
    expect(uniqWith(inputArray, customComparer)).toEqual(expectedResult);
  });

  test('returns unique array based on strict equality', () => {
    const inputArray = [1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5];
    const expectedResult = [1, 2, 3, 4, 5];
    expect(uniqWith(inputArray)).toEqual(expectedResult);
  });

  test('returns empty array for empty input', () => {
    expect(uniqWith([], (a, b) => a === b)).toEqual([]);
  });

  test('returns original array when no duplicates found', () => {
    const inputArray = [1, 2, 3, 4, 5];
    expect(uniqWith(inputArray, (a, b) => a === b)).toEqual(inputArray);
  });
});
