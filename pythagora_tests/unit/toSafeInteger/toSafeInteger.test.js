import toSafeInteger from '../../../toSafeInteger.js';

describe('toSafeInteger', () => {
  test('toSafeInteger(3.2)', () => {
    expect(toSafeInteger(3.2)).toBe(3);
  });

  test('toSafeInteger(Number.MIN_VALUE)', () => {
    expect(toSafeInteger(Number.MIN_VALUE)).toBe(0);
  });

  test('toSafeInteger(Infinity)', () => {
    expect(toSafeInteger(Infinity)).toBe(9007199254740991);
  });

  test('toSafeInteger("3.2")', () => {
    expect(toSafeInteger('3.2')).toBe(3);
  });

  test('toSafeInteger(-9007199254740993)', () => {
    expect(toSafeInteger(-9007199254740993)).toBe(-9007199254740991);
  });

  test('toSafeInteger(9007199254740993)', () => {
    expect(toSafeInteger(9007199254740993)).toBe(9007199254740991);
  });

  test('toSafeInteger(null)', () => {
    expect(toSafeInteger(null)).toBe(0);
  });

  test('toSafeInteger(undefined)', () => {
    expect(toSafeInteger(undefined)).toBe(0);
  });

  test('toSafeInteger(0)', () => {
    expect(toSafeInteger(0)).toBe(0);
  });

  test('toSafeInteger(NaN)', () => {
    expect(toSafeInteger(NaN)).toBe(0);
  });
});
