import nthArg from '../../../nthArg.js';

describe('nthArg', () => {
  test('should return the 2nd argument', () => {
    const func = nthArg(1);
    expect(func('a', 'b', 'c', 'd')).toBe('b');
  });

  test('should return the 3rd argument', () => {
    const func = nthArg(2);
    expect(func('a', 'b', 'c', 'd')).toBe('c');
  });

  test('should return undefined when no index is given', () => {
    const func = nthArg();
    expect(func('a', 'b', 'c', 'd')).toBeUndefined();
  });

  test('should return the nth-to-last argument for negative indexes', () => {
    const func = nthArg(-2);
    expect(func('a', 'b', 'c', 'd')).toBe('c');
  });
});
