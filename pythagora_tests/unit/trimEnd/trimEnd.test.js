import trimEnd from '../../../trimEnd.js';

describe('trimEnd', () => {
  test('trimEnd - basic usage', () => {
    expect(trimEnd('  abc  ')).toBe('  abc');
  });

  test('trimEnd - with characters to trim', () => {
    expect(trimEnd('-_-abc-_-', '_-')).toBe('-_-abc');
  });

  test('trimEnd - empty string', () => {
    expect(trimEnd('')).toBe('');
  });

  test('trimEnd - no characters to trim', () => {
    expect(trimEnd('abc')).toBe('abc');
  });

  test('trimEnd - all characters to trim', () => {
    expect(trimEnd('aaa', 'a')).toBe('');
  });

  test('trimEnd - special characters to trim', () => {
    expect(trimEnd('abc!!!', '!')).toBe('abc');
  });

  test('trimEnd - unicode characters in string', () => {
    expect(trimEnd('  ʕ•ᴥ•ʔ  ')).toBe('  ʕ•ᴥ•ʔ');
  });

  test('trimEnd - unicode characters to trim', () => {
    expect(trimEnd('ʕ•ᴥ•ʔ', '•ᴥ•ʔ')).toBe('ʕ');
  });
});