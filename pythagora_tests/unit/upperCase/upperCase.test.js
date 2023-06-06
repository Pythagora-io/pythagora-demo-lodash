import upperCase from '../../../upperCase.js';

describe('upperCase', () => {
  test('Test 1', () => {
    expect(upperCase('--foo-bar')).toBe('FOO BAR');
  });

  test('Test 2', () => {
    expect(upperCase('fooBar')).toBe('FOO BAR');
  });

  test('Test 3', () => {
    expect(upperCase('__foo_bar__')).toBe('FOO BAR');
  });

  test('Test 4', () => {
    expect(upperCase('')).toBe('');
  });

  test('Test 5', () => {
    expect(upperCase('foo bar1Baz')).toBe('FOO BAR 1 BAZ');
  });

  test('Test 6', () => {
    expect(upperCase('123foo')).toBe('123 FOO');
  });

  test('Test 7', () => {
    expect(upperCase(null)).toBe('');
  });

  test('Test 8', () => {
    expect(upperCase(undefined)).toBe('');
  });

  test('Test 9', () => {
    expect(upperCase('1.23 FOO123, bar 5')).toBe('1 23 FOO 123 BAR 5');
  });
});
