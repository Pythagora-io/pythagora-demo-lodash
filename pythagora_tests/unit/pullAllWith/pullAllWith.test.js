import pullAllWith from '../../../pullAllWith.js';

describe('pullAllWith', () => {
  test('1', () => {
    const array2 = [1, 2, 3, 4, 5, 6];
    const result2 = pullAllWith(array2, [2, 3, 4], (a, b) => a === b);
    expect(result2).toEqual([1, 5, 6]);
  });

  test('2', () => {
    const array3 = [];
    const result3 = pullAllWith(array3, [2, 3, 4], (a, b) => a === b);
    expect(result3).toEqual([]);
  });

  test('3', () => {
    const array4 = [1, 2, 3, 4, 5, 6];
    const keys = [];
    const result4 = pullAllWith(array4, keys, (a, b) => a === b);
    expect(result4).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('4', () => {
    const array5 = [{x: 1, y: 2}, {x: 3, y: 3}, {x: 3, y: 4}, {x: 5, y: 6}];
    const result5 = pullAllWith(array5, [{x: 3, y: 3}], (a, b) => a.x === b.x && a.y === b.y);
    expect(result5).toEqual([{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]);
  });

  test('5', () => {
    const array6 = ['abc', 'def', 'ghi', 'jkl'];
    const result6 = pullAllWith(array6, ['def', 'ghi'], (a, b) => a === b);
    expect(result6).toEqual(['abc', 'jkl']);
  });
});
