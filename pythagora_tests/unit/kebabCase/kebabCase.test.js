import kebabCase from '../../../kebabCase.js';
describe('kebabCase', () => {
  test(`kebabCase('Foo Bar')`, () => {
    expect(kebabCase('Foo Bar')).toBe('foo-bar');
  });
  test(`kebabCase('fooBar')`, () => {
    expect(kebabCase('fooBar')).toBe('foo-bar');
  });
  test(`kebabCase('__FOO_BAR__')`, () => {
    expect(kebabCase('__FOO_BAR__')).toBe('foo-bar');
  });
  test(`kebabCase('')`, () => {
    expect(kebabCase('')).toBe('');
  });
  test(`kebabCase(null)`, () => {
    expect(kebabCase(null)).toBe('');
  });
  test(`kebabCase(undefined)`, () => {
    expect(kebabCase(undefined)).toBe('');
  });
  test(`kebabCase('123 kebabCase')`, () => {
    expect(kebabCase('123 kebabCase')).toBe('123-kebab-case');
  });
  test(`kebabCase('special-characters!@#$%^&*()='`, () => {
    expect(kebabCase('special-characters!@#$%^&*()=')).toBe('special-characters');
  });
  test(`kebabCase('multiple   spaces')`, () => {
    expect(kebabCase('multiple   spaces')).toBe('multiple-spaces');
  });
});
