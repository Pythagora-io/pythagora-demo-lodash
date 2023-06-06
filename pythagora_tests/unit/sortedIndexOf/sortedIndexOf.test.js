import sortedIndexOfFunc from '../../../sortedIndexOf.js';

describe('sortedIndexOf', () => {
  test('Test1', () => {
    const array1 = [4, 5, 5, 5, 6];
    expect(sortedIndexOfFunc(array1, 5)).toBe(1);
  });
  test('Test2', () => {
    const array2 = [1, 2, 3, 4, 6, 8, 9];
    expect(sortedIndexOfFunc(array2, 7)).toBe(-1);
  });
  test('Test3', () => {
    expect(sortedIndexOfFunc([], 5)).toBe(-1);
  });
  test('Test4', () => {
    expect(sortedIndexOfFunc(null, 5)).toBe(-1);
  });
  test('Test5', () => {
    const array5 = [2, 4, 6, 8, 10];
    expect(sortedIndexOfFunc(array5, 4)).toBe(1);
  });
  test('Test6', () => {
    const array6 = ['a', 'b', 'c', 'd', 'e'];
    expect(sortedIndexOfFunc(array6, 'c')).toBe(2);
  });
  test('Test7', () => {
    const array7 = ['apple', 'banana', 'orange'];
    expect(sortedIndexOfFunc(array7, 'banana')).toBe(1);
  });
});
