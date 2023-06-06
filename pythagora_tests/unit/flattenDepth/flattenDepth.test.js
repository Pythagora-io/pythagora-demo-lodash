import flattenDepth from '../../../flattenDepth.js';
describe('flattenDepth', () => {

  test('flattenDepth([1, [2, [3, [4]], 5]], 1) should return [1, 2, [3, [4]], 5]', () => {
    const array = [1, [2, [3, [4]], 5]];
    const expected = [1, 2, [3, [4]], 5];
    expect(flattenDepth(array, 1)).toEqual(expected);
  });

  test('flattenDepth([1, [2, [3, [4]], 5]], 2) should return [1, 2, 3, [4], 5]', () => {
    const array = [1, [2, [3, [4]], 5]];
    const expected = [1, 2, 3, [4], 5];
    expect(flattenDepth(array, 2)).toEqual(expected);
  });

  test('flattenDepth([1, [2, [3, [4]], 5]], 3) should return [1, 2, 3, 4, 5]', () => {
    const array = [1, [2, [3, [4]], 5]];
    const expected = [1, 2, 3, 4, 5];
    expect(flattenDepth(array, 3)).toEqual(expected);
  });

  test('flattenDepth([], 2) should return an empty array', () => {
    const array = [];
    const expected = [];
    expect(flattenDepth(array, 2)).toEqual(expected);
  });

  test('flattenDepth([1, 2, 3], 1) should return the input array', () => {
    const array = [1, 2, 3];
    const expected = array;
    expect(flattenDepth(array, 1)).toEqual(expected);
  });

  test('flattenDepth() should return an empty array', () => {
    const expected = [];
    expect(flattenDepth()).toEqual(expected);
  });
});
