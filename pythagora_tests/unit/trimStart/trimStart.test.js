import trimStart from '../../../trimStart.js';

describe('trimStart', () => {
  test('should trim leading whitespace', () => {
    expect(trimStart('  abc  ')).toBe('abc  ');
  });

  test('should trim specified characters', () => {
    expect(trimStart('-_-abc-_-', '_-')).toBe('abc-_-');
  });

  test('should return empty string when input is empty string', () => {
    expect(trimStart('')).toBe('');
  });

  test('should return the original string when chars is empty string', () => {
    expect(trimStart('abc', '')).toBe('abc');
  });

  test('should return string with no change if no characters match', () => {
    expect(trimStart('abc', '123')).toBe('abc');
  });

  test('should trim only specified characters', () => {
    expect(trimStart('123abc321', '123')).toBe('abc321');
  });

  test('should handle unicode characters', () => {
    expect(trimStart('🙂abc🙂', '🙂')).toBe('abc🙂');
  });
});