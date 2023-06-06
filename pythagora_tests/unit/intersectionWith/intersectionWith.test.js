import intersectionWith from '../../../intersectionWith.js';

describe('intersectionWith', () => {
  test('intersectionWith([{x: 1, y: 2}, {x: 2, y: 1}], [{x: 1, y: 1}, {x: 1, y: 2}], (a, b) => a.x === b.x && a.y === b.y)', () => {
    expect(intersectionWith([{x: 1, y: 2}, {x: 2, y: 1}], [{x: 1, y: 1}, {x: 1, y: 2}], (a, b) => a.x === b.x && a.y === b.y)).toEqual([{x: 1, y: 2}]);
  });

  test('intersectionWith([1, 2, 3], [3, 2, 1], (a, b) => a === b)', () => {
    expect(intersectionWith([1, 2, 3], [3, 2, 1], (a, b) => a === b)).toEqual([1, 2, 3]);
  });

  test('intersectionWith(["a", "b", "c"], ["b", "c", "d"], (a, b) => a === b)', () => {
    expect(intersectionWith(["a", "b", "c"], ["b", "c", "d"], (a, b) => a === b)).toEqual(["b", "c"]);
  });

  test('intersectionWith([], [1, 2, 3], (a, b) => a === b)', () => {
    expect(intersectionWith([], [1, 2, 3], (a, b) => a === b)).toEqual([]);
  });

  test('intersectionWith([1, 2, 3], [], (a, b) => a === b)', () => {
    expect(intersectionWith([1, 2, 3], [], (a, b) => a === b)).toEqual([]);
  });

  test('intersectionWith()', () => {
    expect(intersectionWith()).toEqual([]);
  });
});
