import union from '../../../union.js';

describe('union', () => {
  test('union([2, 3], [1, 2])', () => {
    expect(union([2, 3], [1, 2])).toEqual([2, 3, 1]);
  });

  test('union([1, 2, 3], [4, 3], [2])', () => {
    expect(union([1, 2, 3], [4, 3], [2])).toEqual([1, 2, 3, 4]);
  });

  test('union([1, "2", 3], ["2", 4])', () => {
    expect(union([1, "2", 3], ["2", 4])).toEqual([1, "2", 3, 4]);
  });

  test('union([], [])', () => {
    expect(union([], [])).toEqual([]);
  });

  test('union([1, 1, 1])', () => {
    expect(union([1, 1, 1])).toEqual([1]);
  });

  test('union(["a", "b", "c"], ["a", "d"], ["d", "e"])', () => {
    expect(union(["a", "b", "c"], ["a", "d"], ["d", "e"])).toEqual(["a", "b", "c", "d", "e"]);
  });
});
