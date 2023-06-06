import startsWith from '../../../startsWith.js';
describe('startsWith function tests', () => {
  test('Basic True case', () => {
    expect(startsWith('abc', 'a')).toBe(true);
  });

  test('Basic False case', () => {
    expect(startsWith('abc', 'b')).toBe(false);
  });

  test('With position', () => {
    expect(startsWith('abc', 'b', 1)).toBe(true);
  });

  test('Empty string and target', () => {
    expect(startsWith('', '')).toBe(true);
  });

  test('Empty target', () => {
    expect(startsWith('abc', '')).toBe(true);
  });

  test('Empty string', () => {
    expect(startsWith('', 'a')).toBe(false);
  });

  test('Whitespace', () => {
    expect(startsWith(' abc', ' ')).toBe(true);
  });

  test('Negative position', () => {
    expect(startsWith('abc', 'a', -1)).toBe(true);
  });

  test('Position greater than length', () => {
    expect(startsWith('abc', 'a', 4)).toBe(false);
  });

  test('Non-string target', () => {
    expect(startsWith('123', 1)).toBe(true);
  });

  test('Special characters', () => {
    expect(startsWith('!abc', '!')).toBe(true);
  });
});
