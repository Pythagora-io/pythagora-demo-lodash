import zipWith from '../../../zipWith.js';

describe('zipWith', () => {
  test('1', () => {
    expect(zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c)).toEqual([111, 222]);
  });

  test('2', () => {
    expect(zipWith([1, 2], [10, 20], (a, b) => a * b)).toEqual([10, 40]);
  });

  test('3', () => {
    expect(zipWith([1, 2, 3], [4, 5, 6])).toEqual([[1, 4], [2, 5], [3, 6]]);
  });

  test('4', () => {
    expect(zipWith([1, 2], [3, 4], [5, 6], [7, 8], (a, b, c, d) => a * b * c * d)).toEqual([105, 384]);
  });

  test('5', () => {
    expect(zipWith([1, 2], [3, 4])).toEqual([[1, 3], [2, 4]]);
  });

  test('6', () => {
    expect(zipWith([1, 2])).toEqual([[1], [2]]);
  });

  test('7', () => {
    expect(zipWith([])).toEqual([]);
  });

  test('8', () => {
    expect(zipWith(null)).toEqual([]);
  });

  test('9', () => {
    expect(zipWith(undefined)).toEqual([]);
  });
});
