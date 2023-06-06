import slice from '../../../slice.js';

describe('slice', () => {

  test('slice([1, 2, 3, 4], 2)', () => {
    expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });

  test('slice([], 0)', () => {
    expect(slice([], 0)).toEqual([]);
  });

  test('slice([1, 2, 3, 4], 0, 2)', () => {
    expect(slice([1, 2, 3, 4], 0, 2)).toEqual([1, 2]);
  });

  test('slice([1, 2, 3, 4], -2)', () => {
    expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
  });

  test('slice([1, 2, 3, 4], 1, -1)', () => {
    expect(slice([1, 2, 3, 4], 1, -1)).toEqual([2, 3]);
  });

  test('slice(null, 0, 2)', () => {
    expect(slice(null, 0, 2)).toEqual([]);
  });

  test('slice(undefined, 2, 3)', () => {
    expect(slice(undefined, 2, 3)).toEqual([]);
  });

  test('slice([1, 2, 3, 4], 5, 6)', () => {
    expect(slice([1, 2, 3, 4], 5, 6)).toEqual([]);
  });

  test('slice([1, 2, 3, 4], 2, 1)', () => {
    expect(slice([1, 2, 3, 4], 2, 1)).toEqual([]);
  });

  test('slice([1, 2, [,], 4], 0, 3)', () => {
    expect(slice([1, 2, [,], 4], 0, 3)).toEqual([1, 2, [,]]);
  });
});
