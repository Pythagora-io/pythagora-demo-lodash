import flatMapDeep from '../../../flatMapDeep.js';
describe('flatMapDeep', () => {
  test('should return flattened array with no nested elements', () => {
    const duplicate = n => [[[n, n]]];
    const input = [1, 2];
    const expectedResult = [1, 1, 2, 2];

    expect(flatMapDeep(input, duplicate)).toEqual(expectedResult);
  });

  test('should return empty array for empty input array', () => {

    const identity = x => x;
    const input = [];
    const expectedResult = [];

    expect(flatMapDeep(input, identity)).toEqual(expectedResult);
  });

  test('should return array with identical values when iteratee returns self', () => {

    const identity = x => x;
    const input = [1, [2, [3, [4]], 5]];
    const expectedResult = [1, 2, 3, 4, 5];

    expect(flatMapDeep(input, identity)).toEqual(expectedResult);
  });

  test('should properly flatten deeply nested structures', () => {

    const nested = x => [[[[x], [[x]]], x]];
    const input = [1, 2, 3];
    const expectedResult = [1, 1, 1, 2, 2, 2, 3, 3, 3];

    expect(flatMapDeep(input, nested)).toEqual(expectedResult);
  });
});
