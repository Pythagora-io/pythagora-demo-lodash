import snakeCase from '../../../snakeCase.js';

describe('snakeCase', () => {
  test('snakeCase("Foo Bar")', () => {
    expect(snakeCase('Foo Bar')).toBe('foo_bar');
  });

  test('snakeCase("fooBar")', () => {
    expect(snakeCase('fooBar')).toBe('foo_bar');
  });

  test('snakeCase("--FOO-BAR--")', () => {
    expect(snakeCase('--FOO-BAR--')).toBe('foo_bar');
  });

  test('snakeCase("foo2bar")', () => {
    expect(snakeCase('foo2bar')).toBe('foo_2_bar');
  });

  test('snakeCase("")', () => {
    expect(snakeCase('')).toBe('');
  });

  test('snakeCase(null)', () => {
    expect(snakeCase(null)).toBe('');
  });

  test('snakeCase(undefined)', () => {
    expect(snakeCase(undefined)).toBe('');
  });

  test('snakeCase("123")', () => {
    expect(snakeCase('123')).toBe('123');
  });

  test('snakeCase("123abc")', () => {
    expect(snakeCase('123abc')).toBe('123_abc');
  });

  test('snakeCase("abc123")', () => {
    expect(snakeCase('abc123')).toBe('abc_123');
  });
});