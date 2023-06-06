import toInteger from '../../../toInteger.js';

describe('toInteger', () => {
  test('toInteger(3.2)', () => {
    expect(toInteger(3.2)).toBe(3);
  });

  test('toInteger(Number.MIN_VALUE)', () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0);
  });

  test('toInteger(Infinity)', () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308);
  });

  test('toInteger(-Infinity)', () => {
    expect(toInteger(-Infinity)).toBe(-1.7976931348623157e+308);
  });

  test("toInteger('3.2')", () => {
    expect(toInteger('3.2')).toBe(3);
  });

  test("toInteger('-3.2')", () => {
    expect(toInteger('-3.2')).toBe(-3);
  });

  test('toInteger(undefined)', () => {
    expect(toInteger(undefined)).toBe(0);
  });

  test('toInteger(null)', () => {
    expect(toInteger(null)).toBe(0);
  });

  test('toInteger(NaN)', () => {
    expect(toInteger(NaN)).toBe(0);
  });

  test("toInteger('abc')", () => {
    expect(toInteger('abc')).toBe(0);
  });

  test('toInteger(-0)', () => {
    expect(toInteger(-0)).toBe(-0);
  });

  test('toInteger(Object(3.2))', () => {
    expect(toInteger(Object(3.2))).toBe(3);
  });
});