import unzip from '../../../unzip.js';

describe('unzip', () => {
  test('1', () => {
    expect(unzip([['a', 1, true], ['b', 2, false]])).toEqual([['a', 'b'], [1, 2], [true, false]]);
  });

  test('2', () => {
    expect(unzip([[]])).toEqual([]);
  });

  test('3', () => {
    expect(unzip([])).toEqual([]);
  });

  test('4', () => {
    expect(unzip([['a'], ['b'], [1], [2], [true], [false]])).toEqual([['a', 'b', 1, 2, true, false]]);
  });

  test('5', () => {
    expect(unzip(undefined)).toEqual([]);
  });

  test('6', () => {
    expect(unzip(null)).toEqual([]);
  });
});
