import methodOf from '../../../methodOf.js';

describe('test methodOf', () => {
  test('returns a function that invokes the method at a given path of object', () => {
    const array = [0, 1, 2].map(i => () => i);
    const object = { a: array, b: array, c: array };
    const invoker = methodOf(object);
    expect(invoker('a[1]')).toBe(1);
    expect(invoker('b[0]')).toBe(0);
    expect(invoker('c[2]')).toBe(2);
  });

  test('should be able to use args for the invoked method', () => {
    const object = {
      add: (x, y) => x + y,
      sub: (x, y) => x - y,
    };
    const invoker = methodOf(object, [2, 3]);
    expect(invoker('add')).toBe(5);
    expect(invoker('sub')).toBe(-1);
  });

  test('should return undefined if the path cannot be resolved', () => {
    const object = { a: { b: { c: () => 42 } } };
    const invoker = methodOf(object);
    expect(invoker('a.b.x')).toBeUndefined();
  });
});
