import toLength from '../../../toLength.js';

describe('toLength', () => {
  test('toLength(3.2)', () => {
    expect(toLength(3.2)).toBe(3);
  });

  test('toLength(Number.MIN_VALUE)', () => {
    expect(toLength(Number.MIN_VALUE)).toBe(0);
  });

  test('toLength(Infinity)', () => {
    expect(toLength(Infinity)).toBe(4294967295);
  });

  test('toLength("3.2")', () => {
    expect(toLength('3.2')).toBe(3);
  });

  test('toLength(-1)', () => {
    expect(toLength(-1)).toBe(0);
  });

  test('toLength(null)', () => {
    expect(toLength(null)).toBe(0);
  });

  test('toLength(undefined)', () => {
    expect(toLength(undefined)).toBe(0);
  });

  test('toLength(NaN)', () => {
    expect(toLength(NaN)).toBe(0);
  });

  test('toLength(0)', () => {
    expect(toLength(0)).toBe(0);
  });

  test('toLength(500)', () => {
    expect(toLength(500)).toBe(500);
  });

  test('toLength(-500)', () => {
    expect(toLength(-500)).toBe(0);
  });

  test('toLength("500")', () => {
    expect(toLength("500")).toBe(500);
  });

  test('toLength(1.7976931348623157e+308)', () => {
    expect(toLength(1.7976931348623157e+308)).toBe(4294967295);
  });

  test('toLength("test")', () => {
    expect(toLength("test")).toBe(0);
  });

  test('toLength(true)', () => {
    expect(toLength(true)).toBe(1);
  });

  test('toLength(false)', () => {
    expect(toLength(false)).toBe(0);
  });
});