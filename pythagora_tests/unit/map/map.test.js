import map from '../../../map.js';
describe('map function', () => {
  test('should return a new mapped array with square values', () => {
    const square = (n) => n * n;
    const input = [4, 8];
    const expected = [16, 64];
    expect(map(input, square)).toEqual(expected);
  });

  test('should return an empty array for an empty input array', () => {
    const square = (n) => n * n;
    const input = [];
    const expected = [];
    expect(map(input, square)).toEqual(expected);
  });

  test('should return the same array when identity function is used as iteratee', () => {
    const identity = (n) => n;
    const input = [1, 2, 3, 4];
    const expected = [1, 2, 3, 4];
    expect(map(input, identity)).toEqual(expected);
  });

  test('should correctly pass index and array to iteratee', () => {
    const spyIteratee = jest.fn((value, index, array) => value * 2);
    const input = [1, 2, 3];
    map(input, spyIteratee);
    expect(spyIteratee).toHaveBeenNthCalledWith(1, 1, 0, input);
    expect(spyIteratee).toHaveBeenNthCalledWith(2, 2, 1, input);
    expect(spyIteratee).toHaveBeenNthCalledWith(3, 3, 2, input);
  });
});
