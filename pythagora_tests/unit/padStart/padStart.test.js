import padStart from '../../../padStart.js';

describe('padStart', () => {
  test('padStart("abc", 6)', () => {
    expect(padStart('abc', 6)).toBe('   abc');
  });

  test('padStart("abc", 6, "_-")', () => {
    expect(padStart('abc', 6, '_-')).toBe('_-_abc');
  });

  test('padStart("abc", 2)', () => {
    expect(padStart('abc', 2)).toBe('abc');
  });

  test('padStart("", 5)', () => {
    expect(padStart('', 5)).toBe('     ');
  });

  test('padStart("abcd", 0)', () => {
    expect(padStart('abcd', 0)).toBe('abcd');
  });

  test('padStart("abcd", -1)', () => {
    expect(padStart('abcd', -1)).toBe('abcd');
  });

  test('padStart("abcd", 4)', () => {
    expect(padStart('abcd', 4)).toBe('abcd');
  });

  test('padStart("abcd", 10, "0123456789")', () => {
    expect(padStart('abcd', 10, '0123456789')).toBe('012345abcd');
  });

  test('padStart("abcd", 10, "-")', () => {
    expect(padStart('abcd', 10, '-')).toBe('------abcd');
  });

  test('padStart("aaa💩", 6)', () => {
    expect(padStart('aaa💩', 6)).toBe('  aaa💩');
  });

  test('padStart("👨‍💻👩‍💻", 6)', () => {
    expect(padStart('👨‍💻👩‍💻', 6)).toBe('    👨‍💻👩‍💻');
  });
});
