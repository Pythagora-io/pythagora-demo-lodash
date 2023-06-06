import padEnd from '../../../padEnd.js';

describe('padEnd()', () => {
  test("padEnd('abc', 6)", () => {
    expect(padEnd('abc', 6)).toBe('abc   ');
  });

  test("padEnd('abc', 6, '_-')", () => {
    expect(padEnd('abc', 6, '_-')).toBe('abc_-_');
  });

  test("padEnd('abc', 2)", () => {
    expect(padEnd('abc', 2)).toBe('abc');
  });

  test("padEnd('', 3, '_')", () => {
    expect(padEnd('', 3, '_')).toBe('___');
  });

  test("padEnd('abc', 0)", () => {
    expect(padEnd('abc', 0)).toBe('abc');
  });

  test("padEnd('abc', -1)", () => {
    expect(padEnd('abc', -1)).toBe('abc');
  });

  test("padEnd('abc', 5, null)", () => {
    expect(padEnd('abc', 5, null)).toBe('abcnu');
  });
});
