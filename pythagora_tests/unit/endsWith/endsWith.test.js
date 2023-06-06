import endsWith from '../../../endsWith.js';
describe('endsWith test suite', () => {
  test('returns true if string ends with target', () => {
    expect(endsWith('abc', 'c')).toBe(true);
  });

  test('returns false if string does not end with target', () => {
    expect(endsWith('abc', 'b')).toBe(false);
  });

  test('returns true if string ends with target before position', () => {
    expect(endsWith('abc', 'b', 2)).toBe(true);
  });

  test('returns false for empty string and non-empty target', () => {
    expect(endsWith('', 'b')).toBe(false);
  });

  test('returns true for empty string and empty target', () => {
    expect(endsWith('', '')).toBe(true);
  });

  test('returns true for non-empty string and empty target', () => {
    expect(endsWith('abc', '')).toBe(true);
  });

  test('returns false for string with target in the middle', () => {
    expect(endsWith('abcbdc', 'bd')).toBe(false);
  });

  test('returns false for negative position', () => {
    expect(endsWith('abc', 'c', -2)).toBe(false);
  });

  test('handles non-integer position', () => {
    expect(endsWith('abc', 'c', 2.4)).toBe(false);
  });

  test('handles NaN position', () => {
    expect(endsWith('abc', 'c', NaN)).toBe(false);
  });
});
