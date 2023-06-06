import repeat from '../../../repeat.js';

describe('repeat', () => {
  test('repeat string 3 times', () => {
    expect(repeat('*', 3)).toBe('***');
  });

  test('repeat string 2 times', () => {
    expect(repeat('abc', 2)).toBe('abcabc');
  });

  test('repeat with 0 times', () => {
    expect(repeat('abc', 0)).toBe('');
  });

  test('repeat with negative value', () => {
    expect(repeat('abc', -3)).toBe('');
  });

  test('repeat with special characters', () => {
    expect(repeat('!@#', 2)).toBe('!@#!@#');
  });

  test('repeat with empty string', () => {
    expect(repeat('', 3)).toBe('');
  });

  test('repeat with max safe integer + 1', () => {
    expect(repeat('a', Number.MAX_SAFE_INTEGER + 1)).toBe('');
  });
});
