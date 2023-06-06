import shuffle from '../../../shuffle.js';
import copyArray from '../../../.internal/copyArray.js';

describe('shuffle', () => {
  test("['a', 'b', 'c']", () => {
    expect(shuffle(['a', 'b', 'c']).length).toBe(3);
  });

  test('[1, 2, 3, 4]', () => {
    const shuffled = shuffle([1, 2, 3, 4]);
    expect(shuffled.sort()).toEqual([1, 2, 3, 4]);
    expect(shuffled.length).toBe(4);
  });

  test('[]', () => {
    expect(shuffle([])).toEqual([]);
  });

  test('null', () => {
    expect(shuffle(null)).toEqual([]);
  });

  test('undefined', () => {
    expect(shuffle(undefined)).toEqual([]);
  });

  test('{ key: "value" }', () => {
    expect(shuffle({ key: "value" })).toEqual([]);
  });

  test('multiple runs', () => {
    const results = new Set();
    for (let i = 0; i < 10; i++) {
      results.add(shuffle([1, 2, 3, 4]).toString());
    }
    expect(results.size).toBeGreaterThan(1);
  });
});
