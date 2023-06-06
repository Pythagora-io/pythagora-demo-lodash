import toArray from '../../../toArray.js';
import isArrayLike from '../../../isArrayLike.js';
import isString from '../../../isString.js';

describe('toArray', () => {
  test('convert null to an empty array', () => {
    expect(toArray(null)).toEqual([]);
  });

  test('convert undefined to an empty array', () => {
    expect(toArray(undefined)).toEqual([]);
  });

  test('convert object to an array', () => {
    expect(toArray({ 'a': 1, 'b': 2 })).toEqual([1, 2]);
  });

  test('convert string to an array', () => {
    expect(toArray('abc')).toEqual(['a', 'b', 'c']);
  });

  test('convert number to an empty array', () => {
    expect(toArray(1)).toEqual([]);
  });

  test('convert array-like object to an array', () => {
    const arrayLike = { '0': 'a', '1': 'b', '2': 'c', 'length': 3 };
    expect(toArray(arrayLike)).toEqual(['a', 'b', 'c']);
  });

  test('convert array to an array', () => {
    const array = [1, 2, 3];
    expect(toArray(array)).toEqual(array);
  });

  test('do not modify the original array', () => {
    const array = [1, 2, 3];
    toArray(array);
    expect(array).toEqual([1, 2, 3]);
  });

  test('convert iterable object to an array', () => {
    const iterable = {
      0: 'a',
      1: 'b',
      2: 'c',
      length: 3,
      [Symbol.iterator]: function* () {
        let index = 0;
        while (index < this.length) {
          yield this[index];
          index++;
        }
      },
    };
    expect(toArray(iterable)).toEqual(['a', 'b', 'c']);
  });
});
