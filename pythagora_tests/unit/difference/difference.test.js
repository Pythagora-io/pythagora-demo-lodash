import difference from '../../../difference.js';
import isArrayLikeObject from '../../../isArrayLikeObject.js';
import baseDifference from '../../../.internal/baseDifference.js';
import baseFlatten from '../../../.internal/baseFlatten.js';

describe('difference function', () => {
  test('should return an empty array when the first input is an empty array', () => {
    expect(difference([], [1, 2, 3])).toEqual([]);
  });

  test('should return an array with the difference between the input arrays', () => {
    expect(difference([1, 2, 3], [2, 3])).toEqual([1]);
  });

  test('should return an array with the difference between the input arrays without duplicates', () => {
    expect(difference([1, 2, 3, 3], [2, 3])).toEqual([1]);
  });

  test('should return the original array when no arrays to subtract are given', () => {
    expect(difference([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should return an empty array when the first argument is not array-like', () => {
    expect(difference({}, [2, 3])).toEqual([]);
  });
});
