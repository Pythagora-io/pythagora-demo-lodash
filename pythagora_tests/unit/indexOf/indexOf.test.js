import indexOf from '../../../indexOf';

describe('indexOf', () => {
  test('indexOf([1, 2, 3], 2)', () => {
    expect(indexOf([1, 2, 3], 2)).toEqual(1);
  });

  test('indexOf([], "test")', () => {
    expect(indexOf([], "test")).toEqual(-1);
  });

  test('indexOf([1, 2, 2, 2], 2, 3)', () => {
    expect(indexOf([1, 2, 2, 2], 2, 3)).toEqual(3);
  });

  test('indexOf(["a", "b", "c"], "a")', () => {
    expect(indexOf(["a", "b", "c"], "a")).toEqual(0);
  });

  test('indexOf([1, 2, 1, 2], 2, 2)', () => {
    expect(indexOf([1, 2, 1, 2], 2, 2)).toEqual(3);
  });

  test('indexOf([1, 2, 2], 2, -1)', () => {
    expect(indexOf([1, 2, 2], 2, -1)).toEqual(2);
  });

  test('indexOf(["a", "b", "c"], "d")', () => {
    expect(indexOf(["a", "b", "c"], "d")).toEqual(-1);
  });
});
