import remove from '../../../remove.js';

describe('remove', () => {
  test('[1, 2, 3, 4], n => n % 2 === 0', () => {
    const array = [1, 2, 3, 4];
    const predicate = n => n % 2 === 0;
    const result = remove(array, predicate);
    expect(array).toEqual([1, 3]);
    expect(result).toEqual([2, 4]);
  });

  test('[1, 3], n => n % 2 === 0', () => {
    const array = [1, 3];
    const predicate = n => n % 2 === 0;
    const result = remove(array, predicate);
    expect(array).toEqual([1, 3]);
    expect(result).toEqual([]);
  });

  test('null, n => true', () => {
    const array = null;
    const predicate = n => true;
    const result = remove(array, predicate);
    expect(result).toEqual([]);
  });

  test('[1, -2, 3, -4], n => n < 0', () => {
    const array = [1, -2, 3, -4];
    const predicate = n => n < 0;
    const result = remove(array, predicate);
    expect(array).toEqual([1, 3]);
    expect(result).toEqual([-2, -4]);
  });

  test('[1, 2, 3, 4], n => n > 4', () => {
    const array = [1, 2, 3, 4];
    const predicate = n => n > 4;
    const result = remove(array, predicate);
    expect(array).toEqual([1, 2, 3, 4]);
    expect(result).toEqual([]);
  });

  test('[], n => true', () => {
    const array = [];
    const predicate = n => true;
    const result = remove(array, predicate);
    expect(array).toEqual([]);
    expect(result).toEqual([]);
  });

  test('[1, 2, 3], (n, i) => i % 2 === 0', () => {
    const array = [1, 2, 3];
    const predicate = (_, i) => i % 2 === 0;
    const result = remove(array, predicate);
    expect(array).toEqual([2]);
    expect(result).toEqual([1, 3]);
  });
});