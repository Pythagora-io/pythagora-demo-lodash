import sortedUniqBy from '../../../sortedUniqBy.js';

describe('sortedUniqBy', () => {
  test('empty array', () => {
    expect(sortedUniqBy([], Math.floor)).toEqual([]);
  });

  test('array with elements', () => {
    expect(sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor)).toEqual([1.1, 2.3]);
  });

  test('array with duplicate elements', () => {
    expect(sortedUniqBy([1.1, 1.1, 2.3, 2.4, 2.4], Math.floor)).toEqual([1.1, 2.3]);
  });

  test('null array', () => {
    expect(sortedUniqBy(null, Math.floor)).toEqual([]);
  });

  test('undefined array', () => {
    expect(sortedUniqBy(undefined, Math.floor)).toEqual([]);
  });
});
