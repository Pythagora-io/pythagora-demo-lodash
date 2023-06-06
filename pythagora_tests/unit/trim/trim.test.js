import trim from '../../../trim.js';

describe('trim', () => {
  test('trim("  abc  ")', () => {
    expect(trim('  abc  ')).toBe('abc');
  });

  test('trim("-_-abc-_-", "_-")', () => {
    expect(trim('-_-abc-_-', '_-')).toBe('abc');
  });

  test('trim("")', () => {
    expect(trim('')).toBe('');
  });

  test('trim(null)', () => {
    expect(trim(null)).toBe('');
  });

  test('trim(undefined)', () => {
    expect(trim(undefined)).toBe('');
  });

  test('trim("abc", "")', () => {
    expect(trim("abc", "")).toBe("abc");
  });

  test('trim("   abc   ", " ")', () => {
    expect(trim("   abc   ", " ")).toBe("abc");
  });

  test('trim("123abc321", "123")', () => {
    expect(trim("123abc321", "123")).toBe("abc");
  });

  test('trim("123abc321", "321")', () => {
    expect(trim("123abc321", "321")).toBe("abc");
  });

  test('trim("abc🙂def", "🙂")', () => {
    expect(trim("abc🙂def", "🙂")).toBe("abc🙂def");
  });
});
