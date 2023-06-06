import uniq from '../../../uniq.js';

describe('uniq', () => {

  test('[]', () => {
    expect(uniq([])).toEqual([]);
  });

  test('[1,2]', () => {
    expect(uniq([1, 2])).toEqual([1, 2]);
  });

  test('[2,1,2]', () => {
    expect(uniq([2, 1, 2])).toEqual([2, 1]);
  });

  test('["a","b","a"]', () => {
    expect(uniq(["a", "b", "a"])).toEqual(["a", "b"]);
  });

  test('[{}, {}, {}]', () => {
    const obj = {};
    expect(uniq([obj, obj, obj])).toEqual([obj]);
  });

  test('[null, null]', () => {
    expect(uniq([null, null])).toEqual([null]);
  });

  test('[undefined, undefined]', () => {
    expect(uniq([undefined, undefined])).toEqual([undefined]);
  });

  test('[NaN, NaN]', () => {
    expect(uniq([NaN, NaN])).toEqual([NaN]);
  });

  test('[1, "1"]', () => {
    expect(uniq([1, "1"])).toEqual([1, "1"]);
  });

});