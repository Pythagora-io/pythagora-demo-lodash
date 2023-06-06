import intersection from '../../../intersection.js';
describe('intersection', () => {
  test('should return array of intersecting values of given arrays', () => {
    expect(intersection([1, 2, 3], [3, 4, 2])).toEqual([2, 3]);
  });

  test('should return empty array with no intersecting values', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  test('ensure order & reference of output is based on first input array', () => {
    expect(intersection([3, 2, 1], [2, 1])).toEqual([2, 1]);
  });

  test('when provided with empty arrays', () => {
    expect(intersection([], [])).toEqual([]);
  });

  test('when provided with multiple input arrays', () => {
    expect(intersection([1, 2, 3], [4, 2, 1], [1, 2, 5])).toEqual([1, 2]);
  });

  test('when provided with arrays with non-primitive (object) elements', () => {
    const obj1 = { value: 1 };
    const obj2 = { value: 2 };
    expect(intersection([obj1, obj2], [obj1, obj2])).toEqual([obj1, obj2]);
  });

  test('when provided with one input array', () => {
    expect(intersection([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
