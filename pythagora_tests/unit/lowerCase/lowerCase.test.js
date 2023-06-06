import lowerCase from '../../../lowerCase.js';

describe('lowerCase', () => {
  test('lowerCase("--Foo-Bar--")', () => {
    expect(lowerCase('--Foo-Bar--')).toBe('foo bar');
  });

  test('lowerCase("fooBar")', () => {
    expect(lowerCase('fooBar')).toBe('foo bar');
  });

  test('lowerCase("__FOO_BAR__")', () => {
    expect(lowerCase('__FOO_BAR__')).toBe('foo bar');
  });

  test('lowerCase("")', () => {
    expect(lowerCase('')).toBe('');
  });

  test('lowerCase(null)', () => {
    expect(lowerCase(null)).toBe('');
  });

  test('lowerCase(undefined)', () => {
    expect(lowerCase(undefined)).toBe('');
  });

  test('lowerCase(123)', () => {
    expect(lowerCase(123)).toBe('123');
  });

  test('lowerCase("Foo1Bar2Baz3")', () => {
    expect(lowerCase('Foo1Bar2Baz3')).toBe('foo 1 bar 2 baz 3');
  });
});