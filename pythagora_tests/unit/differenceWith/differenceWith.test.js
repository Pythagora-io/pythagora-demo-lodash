import differenceWith from '../../../differenceWith.js';
describe('differenceWith', () => {
  test('Test 2', () => {
    expect(differenceWith([1, 2, 3], [1, 2], (a, b) => a === b)).toEqual([3]);
  });

  test('Test 3', () => {
    expect(differenceWith({}, [1, 2], (a, b) => a === b)).toEqual([]);
  });

  test('Test 4', () => {
    expect(differenceWith([], [1, 2], (a, b) => a === b)).toEqual([]);
  });

  test('Test 5', () => {
    expect(differenceWith("not-array", [1, 2], (a, b) => a === b)).toEqual([]);
  });

  test('Test 6', () => {
    expect(differenceWith([1, 2, 3], "not-array", (a, b) => a === b)).toEqual([1, 2, 3]);
  });

  test('Test 7', () => {
    expect(differenceWith([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('Test 8', () => {
    expect(differenceWith([1, 2, 3], [1, 2, 3])).toEqual([]);
  });

  test('Test 9', () => {
    expect(differenceWith([1, 2, 3], [])).toEqual([1, 2, 3]);
  });
});
