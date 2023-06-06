import memoize from '../../../memoize.js';

describe('memoize', () => {
  test('memoizes a function without a resolver', () => {
    const counter = jest.fn((n) => n + 1);
    const memoizedCounter = memoize(counter);

    expect(memoizedCounter(1)).toBe(2);
    expect(memoizedCounter(1)).toBe(2);
    expect(counter).toHaveBeenCalledTimes(1);
  });

  test('memoizes a function with a resolver', () => {
    const counter = jest.fn((n) => n + 1);
    const resolver = (n) => n % 2;
    const memoizedCounter = memoize(counter, resolver);

    expect(memoizedCounter(1)).toBe(2);
    expect(memoizedCounter(3)).toBe(2);
    expect(counter).toHaveBeenCalledTimes(1);
  });

  test('uses the first argument as the cache key by default', () => {
    const memoized = memoize((a, b) => a + b);
    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 3)).toBe(3);
  });

  test('throws an error when the input is not a function', () => {
    expect(() => memoize('not a function')).toThrow(TypeError);
  });

  test('throws an error when resolver is not a function', () => {
    expect(() => memoize(() => { }, 'not a function')).toThrow(TypeError);
  });

  test('cache manipulation', () => {
    const counter = (n) => n + 1;
    const memoizedCounter = memoize(counter);

    memoizedCounter(1);
    expect(memoizedCounter.cache.get(1)).toBe(2);

    memoizedCounter.cache.set(2, 3);
    expect(memoizedCounter(2)).toBe(3);
  });

  test('replaces memoize.Cache', () => {
    const originalCache = memoize.Cache;
    memoize.Cache = WeakMap;

    const counter = (n) => n + 1;
    const memoizedCounter = memoize(counter);

    expect(memoizedCounter.cache).toBeInstanceOf(WeakMap);

    memoize.Cache = originalCache;
  });
});
