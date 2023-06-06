import initial from '../../../initial.js';
describe('initial', () => {
  test('returns correct initial array for non-empty input array', () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });

  test('returns empty array for single-element input array', () => {
    expect(initial([1])).toEqual([]);
  });

  test('returns empty array for empty input array', () => {
    expect(initial([])).toEqual([]);
  });

  test('returns empty array for null input', () => {
    expect(initial(null)).toEqual([]);
  });

  test('returns empty array for undefined input', () => {
    expect(initial(undefined)).toEqual([]);
  });

  test('returns correct initial array for array with non-numeric values as input', () => {
    expect(initial(['apple', 'banana', 'cherry'])).toEqual(['apple', 'banana']);
  });
});
