import unzipWith from '../../../unzipWith.js';

describe('unzipWith', () => {
  test('unzipWith([[1, 10, 100], [2, 20, 200]], (...group) => group.reduce((acc, val) => acc + val, 0)) should return [3, 30, 300]', () => {
    expect(unzipWith([[1, 10, 100], [2, 20, 200]], (...group) => group.reduce((acc, val) => acc + val, 0))).toEqual([3, 30, 300]);
  });

  test('unzipWith([[1, 4], [2, 5], [3, 6]], (...group) => group.reduce((a, b) => a * b, 1)) should return [6, 120]', () => {
    expect(unzipWith([[1, 4], [2, 5], [3, 6]], (...group) => group.reduce((a, b) => a * b, 1))).toEqual([6, 120]);
  });

  test('unzipWith([[], []], (...group) => group.reduce((a, b) => a * b, 1)) should return []', () => {
    expect(unzipWith([[], []], (...group) => group.reduce((a, b) => a * b, 1))).toEqual([]);
  });

  test('unzipWith(null, (...group) => group.reduce((a, b) => a * b, 1)) should return []', () => {
    expect(unzipWith(null, (...group) => group.reduce((a, b) => a * b, 1))).toEqual([]);
  });
});
