import dropWhile from '../../../dropWhile.js';
describe('dropWhile', () => {
  test('should return an empty array when passed an empty array', () => {
    expect(dropWhile([], value => value)).toEqual([]);
  });

  test('should return the full array when predicate always returns false', () => {
    const arr = [1, 2, 3, 4];
    const predicate = () => false;
    expect(dropWhile(arr, predicate)).toEqual(arr);
  });

  test('should return an empty array when predicate always returns true', () => {
    const arr = [1, 2, 3, 4];
    const predicate = () => true;
    expect(dropWhile(arr, predicate)).toEqual([]);
  });

  test('should drop the correct elements from the start of the array', () => {
    const arr = [2, 4, 6, 1, 6, 8];
    const predicate = value => value % 2 === 0;
    expect(dropWhile(arr, predicate)).toEqual([1, 6, 8]);
  });

  test('should work with objects and property access', () => {
    const users = [
      { 'user': 'barney',  'active': true },
      { 'user': 'fred',    'active': true },
      { 'user': 'pebbles', 'active': false }
    ];
    expect(dropWhile(users, ({ active }) => active)).toEqual([{ 'user': 'pebbles', 'active': false }]);
  });

  test('should return the original array when array is null', () => {
    const array = null;
    const predicate = value => value;
    expect(dropWhile(array, predicate)).toEqual([]);
  });

  test('should return the original array when array is undefined', () => {
    const array = undefined;
    const predicate = value => value;
    expect(dropWhile(array, predicate)).toEqual([]);
  });
});
