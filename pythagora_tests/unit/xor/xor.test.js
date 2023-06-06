import xor from '../../../xor.js';

describe('xor', () => {
  test('[]', () => {
    expect(xor()).toEqual([]);
  });

  test('[[1, 2], [3, 4], [5, 6]]', () => {
    expect(xor([1, 2], [3, 4], [5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('[[null], [undefined, true, false]]', () => {
    expect(xor([null], [undefined, true, false])).toEqual([null, undefined, true, false]);
  });

  test('[[1, 2, 3], [3, 4, 5], [1, 4, 5]]', () => {
    expect(xor([1, 2, 3], [3, 4, 5], [1, 4, 5])).toEqual([2]);
  });

  test('[[1, 3], [1, 2], [1, 2, 3]]', () => {
    expect(xor([1, 3], [1, 2], [1, 2, 3])).toEqual([]);
  });
});