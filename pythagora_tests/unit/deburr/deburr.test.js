import deburr from '../../../deburr.js';

describe('deburr', () => {
  test('deburrs string', () => {
    expect(deburr('déjà vu')).toBe('deja vu');
  });

  test('removes diacritical marks', () => {
    expect(deburr('ăęçïõŭðį')).toBe('aecioudi');
  });

  test('handles empty string', () => {
    expect(deburr('')).toBe('');
  });

  test('deburrs string with special characters', () => {
    expect(deburr('á@#è?%=^ď!ń,ŝü')).toBe('a@#e?%=^d!n,su');
  });

  test('deburrs string with spaces', () => {
    expect(deburr(' ţ ô ě ľ ')).toBe(' t o e l ');
  });
});
