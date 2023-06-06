import uniqBy from '../../../uniqBy.js';

describe('uniqBy', () => {
  test('regularArrayWithNoDuplicates', () => {
    expect(uniqBy([1, 2, 3, 4, 5], Math.floor)).toEqual([1, 2, 3, 4, 5]);
  });

  test('regularArrayWithDuplicates', () => {
    expect(uniqBy([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);
  });

  test('emptyArray', () => {
    expect(uniqBy([], Math.floor)).toEqual([]);
  });

  test('arrayWithSingleElement', () => {
    expect(uniqBy([3.7], Math.floor)).toEqual([3.7]);
  });

  test('arrayWithSameElements', () => {
    expect(uniqBy([1.1, 1.2, 1.3], Math.floor)).toEqual([1.1]);
  });

  test('nullArray', () => {
    expect(uniqBy(null, Math.floor)).toEqual([]);
  });

  test('undefinedArray', () => {
    expect(uniqBy(undefined, Math.floor)).toEqual([]);
  });
});
