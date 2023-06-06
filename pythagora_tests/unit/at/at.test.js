import at from '../../../at.js';

describe('at', () => {
  test('should return an array with the picked values', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    expect(at(object, ['a[0].b.c', 'a[1]'])).toEqual([3, 4]);
  });

  test('should return an array with the nested picked values', () => {
    const object = { 'a': { 'b': { 'c': { 'd': 5 } } } };
    expect(at(object, ['a.b.c.d'])).toEqual([5]);
  });

  test('should return an array with undefined if the path is not found', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    expect(at(object, ['a[0].b.e', 'a[1].c'])).toEqual([undefined, undefined]);
  });

  test('should return an empty array if no paths are provided', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    expect(at(object)).toEqual([]);
  });

  test('should return an array with undefined values if object is null', () => {
    expect(at(null, ['a[0].b.c', 'a[1]'])).toEqual([undefined, undefined]);
  });

  test('should return an array with undefined values if object is undefined', () => {
    expect(at(undefined, ['a[0].b.c', 'a[1]'])).toEqual([undefined, undefined]);
  });

  test('should return an array with the picked values when using various path formats', () => {
    const object = { a: [{ b: { c: 3 } }, { 'x.y/z': 7 }] };
    expect(at(object, ['a[0].b.c', 'a[1]["x.y/z"]'])).toEqual([3, 7]);
  });
});
