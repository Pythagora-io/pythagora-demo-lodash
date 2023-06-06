import hasPath from '../../../hasPath.js';

describe('hasPath', () => {
  test('should return true for direct property paths', () => {
    const object = { a: { b: 2 } };
    expect(hasPath(object, 'a.b')).toBe(true);
    expect(hasPath(object, ['a', 'b'])).toBe(true);
  });

  test('should return false for non-existent paths', () => {
    const object = { a: { b: 2 } };
    expect(hasPath(object, 'a.c')).toBe(false);
    expect(hasPath(object, ['a', 'c'])).toBe(false);
  });

  test('should return false for non-Object', () => {
    expect(hasPath(null, 'a.b')).toBe(false);
    expect(hasPath(undefined, 'a.b')).toBe(false);
  });

  test('should return true for array indices', () => {
    const object = { a: [1, { c: 3 }] };
    expect(hasPath(object, 'a[1].c')).toBe(true);
    expect(hasPath(object, 'a[1]["c"]')).toBe(true);
  });

  test('should return false for array out of bounds', () => {
    const object = { a: [1, { c: 3 }] };
    expect(hasPath(object, 'a[2].c')).toBe(false);
    expect(hasPath(object, 'a[-1]')).toBe(false);
  });
});
