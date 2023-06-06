import pullAll from '../../../pullAll.js';

describe('pullAll', () => {
  test('Test case 1', () => {
    const array = ['a', 'b', 'c', 'a', 'b', 'c'];
    const result = pullAll(array, ['a', 'c']);
    expect(result).toEqual(['b', 'b']);
  });

  test('Test case 2', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pullAll(array, [2, 4]);
    expect(result).toEqual([1, 3, 5]);
  });

  test('Test case 3', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pullAll(array, []);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('Test case 4', () => {
    const array = [];
    const result = pullAll(array, [1, 3, 5]);
    expect(result).toEqual([]);
  });

  test('Test case 5', () => {
    const array = [1, 2, 3, 4, 5];
    const result = pullAll(array, [6, 7, 8]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('Test case 6', () => {
    const array = ['apple', 'orange', 'banana', 'orange', 'apple'];
    const result = pullAll(array, ['banana', 'orange']);
    expect(result).toEqual(['apple', 'apple']);
  });
});