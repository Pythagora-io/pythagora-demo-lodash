import zipObjectDeep from '../../../zipObjectDeep.js';

describe('zipObjectDeep', () => {
  test('basic usage', () => {
    expect(zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2])).toEqual({ 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } });
  });

  test('empty arrays', () => {
    expect(zipObjectDeep([], [])).toEqual({});
  });

  test('empty props array', () => {
    expect(zipObjectDeep([], [1, 2, 3])).toEqual({});
  });

  test('empty values array', () => {
    expect(zipObjectDeep(['a', 'b', 'c'], [])).toEqual({ a: undefined, b: undefined, c: undefined });
  });

  test('mismatched number of props and values', () => {
    expect(zipObjectDeep(['a', 'b', 'c'], [1, 2])).toEqual({ a: 1, b: 2, c: undefined });
    expect(zipObjectDeep(['a', 'b'], [1, 2, 3])).toEqual({ a: 1, b: 2 });
  });

  test('nested objects and arrays', () => {
    expect(zipObjectDeep(['one[0].two[1].three'], [1])).toEqual({ one: [{ two: [undefined, { three: 1 }] }] });
  });
})