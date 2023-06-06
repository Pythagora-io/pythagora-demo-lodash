import xorWith from '../../../xorWith.js';

describe('xorWith', () => {
  test('[{ x: 1, y: 2 }, { x: 2, y: 1 }], [{ x: 1, y: 1 }, { x: 1, y: 2 }], isEqual', () => {
    expect(xorWith([{ x: 1, y: 2 }, { x: 2, y: 1}], [{ x: 1, y: 1 }, { x: 1, y: 2}], (a, b) => JSON.stringify(a) === JSON.stringify(b))).toEqual([{ x: 2, y: 1 }, { x: 1, y: 1}]);
  });

  test('[1, 2], [1, 2, 3], equalNumbers', () => {
    expect(xorWith([1, 2], [1, 2, 3], (a, b) => a === b)).toEqual([3]);
  });

  test('[1, 2], [2, 3], noComparator', () => {
    expect(xorWith([1, 2], [2, 3])).toEqual([1, 3]);
  });

  test('[], [], isEqual', () => {
    expect(xorWith([], [], (a, b) => a === b)).toEqual([]);
  });

  test('[1.1, 3], [1.1, 3], isEqual', () => {
    expect(xorWith([1.1, 3], [1.1, 3], (a, b) => a.toFixed() === b.toFixed())).toEqual([]);
  });

  test('[1, 3], [], isEqual', () => {
    expect(xorWith([1, 3], [], (a, b) => a === b)).toEqual([1, 3]);
  });
});
