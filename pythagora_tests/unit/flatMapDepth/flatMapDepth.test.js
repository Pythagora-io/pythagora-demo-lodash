import flatMapDepth from '../../../flatMapDepth.js';
describe('flatMapDepth', () => {
  test('duplicate', () => {
    function duplicate(n) {
      return [[[n, n]]];
    }

    expect(flatMapDepth([1, 2], duplicate, 2)).toEqual([[1, 1], [2, 2]]);
  });

  test('empty collection', () => {
    expect(flatMapDepth([], n => n * 2, 1)).toEqual([]);
  });

  test('non-array collection', () => {
    expect(flatMapDepth(null, n => n * 2, 1)).toEqual([]);
  });

  test('single recursion depth', () => {
    const testArray = [[1, 2], [3, 4], [5, 6]];
    expect(flatMapDepth(testArray, n => n, 1)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('multiple recursion depth', () => {
    const testArray = [[[1, 2], 3], [4, [5, 6]]];
    expect(flatMapDepth(testArray, n => n, 2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('recursion depth greater than depth', () => {
    const testArray = [[[[1], 2], 3], 4];
    expect(flatMapDepth(testArray, n => n, 3)).toEqual([1, 2, 3, 4]);
  });

  test('recursion depth less than depth', () => {
    const testArray = [[[[1], 2], 3], 4];
    expect(flatMapDepth(testArray, n => n, 1)).toEqual([[[1], 2], 3, 4]);
  });

  test('infinite recursion depth', () => {
    const testArray = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    expect(flatMapDepth(testArray, n => n, Infinity)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
