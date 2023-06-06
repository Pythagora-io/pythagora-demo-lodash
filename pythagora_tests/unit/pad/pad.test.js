import pad from '../../../pad.js';

describe('pad', () => {
  test('pad("abc", 8) should return "  abc   "', () => {
    expect(pad('abc', 8)).toBe('  abc   ');
  });

  test('pad("abc", 8, "_-") should return "_-abc_-_"', () => {
    expect(pad('abc', 8, '_-')).toBe('_-abc_-_');
  });

  test('pad("abc", 2) should return "abc"', () => {
    expect(pad('abc', 2)).toBe('abc');
  });

  test('pad("", 2) should return "  "', () => {
    expect(pad('', 2)).toBe('  ');
  });

  test('pad("abc", 0) should return "abc"', () => {
    expect(pad('abc', 0)).toBe('abc');
  });

  test('pad("abc") should return "abc"', () => {
    expect(pad('abc')).toBe('abc');
  });

  test('pad("abc", NaN) should return "abc"', () => {
    expect(pad('abc', NaN)).toBe('abc');
  });

  test('pad("abc", 4, "〜") should return "〜abc"', () => {
    expect(pad('abc', 4, '〜')).toBe('abc〜');
  });

  test('pad("abc", 6, "〜") should return "〜abc〜"', () => {
    expect(pad('abc', 6, '〜')).toBe('〜abc〜〜');
  });

  test('pad("abc", -1) should return "abc"', () => {
    expect(pad('abc', -1)).toBe('abc');
  });

  test('pad("🐼", 4, "🌸") should return "🌸🐼🌸🌸"', () => {
    expect(pad('🐼', 4, '🌸')).toBe('🌸🐼🌸🌸');
  });
});
