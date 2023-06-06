import dropRight from '../../../dropRight.js';
describe('dropRight', () => {
  test('dropRight([1, 2, 3])', () => {
    expect(dropRight([1, 2, 3])).toEqual([1, 2]);
  });

  test('dropRight([1, 2, 3], 2)', () => {
    expect(dropRight([1, 2, 3], 2)).toEqual([1]);
  });

  test('dropRight([1, 2, 3], 5)', () => {
    expect(dropRight([1, 2, 3], 5)).toEqual([]);
  });

  test('dropRight([1, 2, 3], 0)', () => {
    expect(dropRight([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test('dropRight([1, 2, 3], -1)', () => {
    expect(dropRight([1, 2, 3], -1)).toEqual([1, 2, 3]);
  });

  test('dropRight([], 1)', () => {
    expect(dropRight([], 1)).toEqual([]);
  });

  test('dropRight([1, 2, 3], 1.5)', () => {
    expect(dropRight([1, 2, 3], 1.5)).toEqual([1, 2]);
  });

  test('dropRight([1, 2, 3], "2")', () => {
    expect(dropRight([1, 2, 3], "2")).toEqual([1]);
  });

  test('dropRight(null, 1)', () => {
    expect(dropRight(null, 1)).toEqual([]);
  });

  test('dropRight(undefined, 1)', () => {
    expect(dropRight(undefined, 1)).toEqual([]);
  });

  test('dropRight([1, 2, 3], Infinity)', () => {
    expect(dropRight([1, 2, 3], Infinity)).toEqual([]);
  });
});
