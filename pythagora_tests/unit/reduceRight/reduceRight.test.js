import reduceRight from '../../../reduceRight.js';

describe('reduceRight', () => {
  test('Test 1', () => {
    const array = [[0, 1], [2, 3], [4, 5]];
    const expectedResult = [4, 5, 2, 3, 0, 1];
    expect(reduceRight(array, (flattened, other) => flattened.concat(other), [])).toEqual(expectedResult);
  });

  test('Test 2', () => {
    const array = ['a', 'b', 'c'];
    const expectedResult = 'cba';
    expect(reduceRight(array, (result, value) => result + value, '')).toEqual(expectedResult);
  });

  test('Test 3', () => {
    const array = [1, 2, 3, 4, 5];
    const expectedResult = 15;
    expect(reduceRight(array, (sum, value) => sum + value, 0)).toEqual(expectedResult);
  });

  test('Test 4', () => {
    const object = { 'a': 1, 'b': 2, 'c': 3 };
    const expectedResult = [['c', 3], ['b', 2], ['a', 1]];
    expect(reduceRight(object, (result, value, key) => result.concat([[key, value]]), [])).toEqual(expectedResult);
  });

  test('Test 5', () => {
    const array = [];
    const expectedResult = undefined;
    expect(reduceRight(array, (value) => value)).toEqual(expectedResult);
  });

  test('Test 6', () => {
    const array = [1, 2, 3];
    const expectedResult = 0;
    expect(reduceRight(array, (difference, value) => difference - value)).toEqual(expectedResult);
  });
});
