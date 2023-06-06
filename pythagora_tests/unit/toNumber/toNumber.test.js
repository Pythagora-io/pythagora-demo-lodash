import toNumber from '../../../toNumber.js';

describe('toNumber', () => {
  test('3.2', () => {
    expect(toNumber(3.2)).toBe(3.2);
  });

  test('Number.MIN_VALUE', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
  });

  test('Infinity', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test('"3.2"', () => {
    expect(toNumber('3.2')).toBe(3.2);
  });

  test('0', () => {
    expect(toNumber(0)).toBe(0);
  });

  test('-0', () => {
    expect(toNumber(-0)).toBe(-0);
  });

  test('NaN', () => {
    expect(Number.isNaN(toNumber(NaN))).toBe(true);
  });

  test('Symbol()', () => {
    expect(Number.isNaN(toNumber(Symbol()))).toBe(true);
  });

  test('null', () => {
    expect(toNumber(null)).toBe(0);
  });

  test('undefined', () => {
    expect(Number.isNaN(toNumber(undefined))).toBe(true);
  });

  test('new Date', () => {
    const now = Date.now();
    const date = new Date(now);
    expect(toNumber(date)).toBe(now);
  });

  test('new Number(42)', () => {
    expect(toNumber(new Number(42))).toBe(42);
  });

  test('new String("42")', () => {
    expect(toNumber(new String("42"))).toBe(42);
  });

  test('"   42.5   "', () => {
    expect(toNumber("   42.5   ")).toBe(42.5);
  });

  test('"0b10101"', () => {
    expect(toNumber("0b10101")).toBe(21);
  });

  test('"0o767"', () => {
    expect(toNumber("0o767")).toBe(503);
  });

  test('"-0x10" bad hex', () => {
    expect(Number.isNaN(toNumber("-0x10"))).toBe(true);
  });

  test('"42abc"', () => {
    expect(toNumber("42abc")).toBe(NaN);
  });

  test('false', () => {
    expect(toNumber(false)).toBe(0);
  });

  test('true', () => {
    expect(toNumber(true)).toBe(1);
  });
});
