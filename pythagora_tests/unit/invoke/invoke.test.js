import invoke from '../../../invoke.js';

describe('invoke', () => {
  test('invoke should return correct result for valid method call', () => {
    const obj = { a: [{ b: { c: [1, 2, 3, 4] } }] };
    const expectedResult = [2, 3];

    expect(invoke(obj, 'a[0].b.c.slice', [1, 3])).toEqual(expectedResult);
  });

  test('invoke should handle nonexistent method call', () => {
    const obj = { a: [{ b: { c: [1, 2, 3, 4] } }] };

    expect(invoke(obj, 'a[0].b.c.nonexistentMethod', [1, 3])).toBeUndefined();
  });

  test('invoke should handle nonexistent object path', () => {
    const obj = { a: [{ b: { c: [1, 2, 3, 4] } }] };

    expect(invoke(obj, 'a[1].b.c.slice', [1, 3])).toBeUndefined();
  });

  test('invoke should handle empty object and path', () => {
    const obj = {};

    expect(invoke(obj, '', [1, 3])).toBeUndefined();
  });

  test('invoke should handle null object', () => {
    const obj = null;

    expect(invoke(obj, 'a[0].b.c.slice', [1, 3])).toBeUndefined();
  });

  test('invoke should handle undefined object', () => {
    const obj = undefined;

    expect(invoke(obj, 'a[0].b.c.slice', [1, 3])).toBeUndefined();
  });
});
