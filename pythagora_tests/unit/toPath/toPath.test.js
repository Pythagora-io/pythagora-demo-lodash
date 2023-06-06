import toPath from '../../../toPath.js';

describe('toPath', () => {
  test('toPath("a.b.c")', () => {
    expect(toPath('a.b.c')).toEqual(['a', 'b', 'c']);
  });

  test('toPath("a[0].b.c")', () => {
    expect(toPath('a[0].b.c')).toEqual(['a', '0', 'b', 'c']);
  });

  test('toPath(["a", "b", "c"])', () => {
    expect(toPath(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  test('toPath(["a[0]", "b", "c"])', () => {
    expect(toPath(['a[0]', 'b', 'c'])).toEqual(['a[0]', 'b', 'c']);
  });

  test('toPath(Symbol("test"))', () => {
    const symbol = Symbol('test');
    expect(toPath(symbol)).toEqual([symbol]);
  });

  test('toPath("")', () => {
    expect(toPath('')).toEqual([]);
  });
});
