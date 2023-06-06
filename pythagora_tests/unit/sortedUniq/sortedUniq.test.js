import sortedUniq from '../../../sortedUniq.js';

describe('sortedUniq', () => {
  test('empty array', () => {
    expect(sortedUniq([])).toEqual([]);
  });

  test('array with no duplicates', () => {
    expect(sortedUniq([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('array with duplicates', () => {
    expect(sortedUniq([1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('array with negative numbers', () => {
    expect(sortedUniq([-4, -3, -3, -2, -1, 0, 1, 1, 2, 3, 3, 4])).toEqual([-4, -3, -2, -1, 0, 1, 2, 3, 4]);
  });

  test('array with same elements', () => {
    expect(sortedUniq([2, 2, 2, 2, 2])).toEqual([2]);
  });

  test('null input', () => {
    expect(sortedUniq(null)).toEqual([]);
  });

  test('undefined input', () => {
    expect(sortedUniq(undefined)).toEqual([]);
  });

  test('array with non-numeric elements', () => {
    expect(sortedUniq(['a', 'b', 'b', 'c', 'd', 'd'])).toEqual(['a', 'b', 'c', 'd']);
  });

  test('mixed array', () => {
    expect(sortedUniq([-3, -2, -1, 0, 1, 1, 'a', 'b', 'c', 'c', 'd'])).toEqual([-3, -2, -1, 0, 1, 'a', 'b', 'c', 'd']);
  });
});
