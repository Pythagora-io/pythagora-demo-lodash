import drop from '../../../drop.js';

describe('drop', () => {
  test('drop(["a", "b", "c"]) should return ["b", "c"]', () => {
    expect(drop(["a", "b", "c"])).toEqual(["b", "c"]);
  });

  test('drop(["a", "b", "c"], 2) should return ["c"]', () => {
    expect(drop(["a", "b", "c"], 2)).toEqual(["c"]);
  });

  test('drop(["a", "b", "c"], 5) should return []', () => {
    expect(drop(["a", "b", "c"], 5)).toEqual([]);
  });

  test('drop(["a", "b", "c"], 0) should return ["a", "b", "c"]', () => {
    expect(drop(["a", "b", "c"], 0)).toEqual(["a", "b", "c"]);
  });

  test('drop(["a", "b", "c"], -1) should return ["a", "b", "c"]', () => {
    expect(drop(["a", "b", "c"], -1)).toEqual(["a", "b", "c"]);
  });

  test('drop() should return []', () => {
    expect(drop()).toEqual([]);
  });

  test('drop(2) should return []', () => {
    expect(drop(2)).toEqual([]);
  });

  test('drop(null, 2) should return []', () => {
    expect(drop(null, 2)).toEqual([]);
  });

  test('drop([1, 2, 3], "2") should return [3]', () => {
    expect(drop([1, 2, 3], "2")).toEqual([3]);
  });
});
