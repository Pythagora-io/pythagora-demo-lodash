import takeRight from '../../../takeRight.js';

describe('takeRight', () => {
  test('[1, 2, 3]', () => {
    expect(takeRight([1, 2, 3])).toEqual([3]);
  });

  test('[1, 2, 3], 2', () => {
    expect(takeRight([1, 2, 3], 2)).toEqual([2, 3]);
  });

  test('[1, 2, 3], 5', () => {
    expect(takeRight([1, 2, 3], 5)).toEqual([1, 2, 3]);
  });

  test('[1, 2, 3], 0', () => {
    expect(takeRight([1, 2, 3], 0)).toEqual([]);
  });

  test('[], 3', () => {
    expect(takeRight([], 3)).toEqual([]);
  });

  test('null', () => {
    expect(takeRight(null)).toEqual([]);
  });

  test('undefined', () => {
    expect(takeRight(undefined)).toEqual([]);
  });
});
