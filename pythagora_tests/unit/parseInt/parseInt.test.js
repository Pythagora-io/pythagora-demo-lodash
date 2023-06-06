import parseInt from '../../../parseInt.js';

describe('parseInt', () => {
  test('parseInt("08")', () => {
    expect(parseInt('08')).toBe(8);
  });

  test('parseInt("42")', () => {
    expect(parseInt('42')).toBe(42);
  });

  test('parseInt(" 42 ")', () => {
    expect(parseInt(' 42 ')).toBe(42);
  });

  test('parseInt("0x2A")', () => {
    expect(parseInt('0x2A')).toBe(42);
  });

  test('parseInt("0x2A", 16)', () => {
    expect(parseInt('0x2A', 16)).toBe(42);
  });

  test('parseInt("101010", 2)', () => {
    expect(parseInt('101010', 2)).toBe(42);
  });

  test('parseInt("2A", 16)', () => {
    expect(parseInt('2A', 16)).toBe(42);
  });

  test('parseInt("", 10)', () => {
    expect(parseInt('', 10)).toBe(NaN);
  });

  test('parseInt("  ", 10)', () => {
    expect(parseInt('  ', 10)).toBe(NaN);
  });

  test('parseInt("invalid", 10)', () => {
    expect(parseInt('invalid', 10)).toBe(NaN);
  });

  test('parseInt("42", 37)', () => {
    expect(parseInt('42', 37)).toBe(NaN);
  });
});
