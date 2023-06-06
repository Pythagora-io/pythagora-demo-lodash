import partition from '../../../partition.js';

describe('partition', () => {
  test('[[{a: 1, b: true}, {a: 2, b: true}, {a: 3, b: false}], (v) => v.b]', () => {
    expect(partition([{a: 1, b: true}, {a: 2, b: true}, {a: 3, b: false}], (v) => v.b)).toEqual([[{a: 1, b: true}, {a: 2, b: true}], [{a: 3, b: false}]]);
  });

  test('[[1, false, 2, false], Boolean]', () => {
    expect(partition([1, false, 2, false], Boolean)).toEqual([[1, 2], [false, false]]);
  });

  test('[[], (v) => v]', () => {
    expect(partition([], (v) => v)).toEqual([[], []]);
  });
});
