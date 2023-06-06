import camelCase from '../../../camelCase.js';

describe('camelCase', () => {
  test('camelCase with regular strings', () => {
    expect(camelCase('Foo Bar')).toBe('fooBar');
    expect(camelCase('testing CamelCase')).toBe('testingCamelCase');
  });

  test('camelCase with special characters', () => {
    expect(camelCase('--foo-bar--')).toBe('fooBar');
    expect(camelCase('__FOO_BAR__')).toBe('fooBar');
  });

  test('camelCase with mixed patterns', () => {
    expect(camelCase('Foo&Bar BAZ#123')).toBe('fooBarBaz123');
  });

  test('camelCase with empty string', () => {
    expect(camelCase('')).toBe('');
  });

  test('camelCase with null and undefined', () => {
    expect(camelCase(null)).toBe('');
    expect(camelCase(undefined)).toBe('');
  });

  test('camelCase with arrays', () => {
    expect(camelCase(['Foo', 'Bar'])).toBe('fooBar');
    expect(camelCase(['Hello', 'World', 123])).toBe('helloWorld123');
  });
});
