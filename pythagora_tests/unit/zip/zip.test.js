import zip from '../../../zip.js';
import unzip from '../../../unzip.js';

describe('zip', () => {
  test('basic zipping', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
  });

  test('different lengths', () => {
    expect(zip(['a', 'b', 'c'], [1, 2], [true])).toEqual([['a', 1, true], ['b', 2, undefined], ['c', undefined, undefined]]);
  });

  test('empty input', () => {
    expect(zip([], [], [])).toEqual([]);
  });

  test('no input', () => {
    expect(zip()).toEqual([]);
  });

  test('unzip after zipping', () => {
    const arrays = [['a', 1, true], ['b', 2, false]];
    expect(unzip(zip(...arrays))).toEqual(arrays);
  });

  test('non-array items', () => {
    expect(zip(['a', 'b'], { 0: 1, 1: 2, length: 2 }, [true, false])).toEqual([['a', 1, true], ['b', 2, false]]);
  });
});
