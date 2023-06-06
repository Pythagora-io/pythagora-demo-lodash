import toFinite from '../../../toFinite.js';

describe('toFinite', () => {
  test('toFinite(3.2)', () => {
    expect(toFinite(3.2)).toBe(3.2);
  });

  test('toFinite(Number.MIN_VALUE)', () => {
    expect(toFinite(Number.MIN_VALUE)).toBe(5e-324);
  });

  test('toFinite(Infinity)', () => {
    expect(toFinite(Infinity)).toBe(1.7976931348623157e+308);
  });

  test("toFinite('3.2')", () => {
    expect(toFinite('3.2')).toBe(3.2);
  });

  test("toFinite('0')", () => {
    expect(toFinite('0')).toBe(0);
  });

  test("toFinite('')", () => {
    expect(toFinite('')).toBe(0);
  });

  test('toFinite(null)', () => {
    expect(toFinite(null)).toBe(0);
  });

  test('toFinite(undefined)', () => {
    expect(toFinite(undefined)).toBe(0);
  });

  test('toFinite(true)', () => {
    expect(toFinite(true)).toBe(1);
  });

  test('toFinite(false)', () => {
    expect(toFinite(false)).toBe(0);
  });

  test('toFinite(NaN)', () => {
    expect(toFinite(NaN)).toBe(0);
  });

  test('toFinite(-Infinity)', () => {
    expect(toFinite(-Infinity)).toBe(-1.7976931348623157e+308);
  });
});