import escapeRegExp from '../../../escapeRegExp.js';
describe('escapeRegExp', () => {
  test('escapes regular expression characters', () => {
    expect(escapeRegExp('[lodash](https://lodash.com/)')).toBe('\\[lodash\\]\\(https://lodash\\.com/\\)');
  });

  test('returns an empty string when input is undefined', () => {
    expect(escapeRegExp(undefined)).toBe('');
  });

  test('returns an empty string when input is null', () => {
    expect(escapeRegExp(null)).toBe('');
  });

  test('returns the same string when there are no regular expression characters', () => {
    expect(escapeRegExp('test123')).toBe('test123');
  });

  test('returns the empty string when input is empty', () => {
    expect(escapeRegExp('')).toBe('');
  });

  test('escapes multiple instances of the same character', () => {
    expect(escapeRegExp('*test*')).toBe('\\*test\\*');
  });

  test('escapes multiple different characters', () => {
    expect(escapeRegExp('[a^b]')).toBe('\\[a\\^b\\]');
  });
});
