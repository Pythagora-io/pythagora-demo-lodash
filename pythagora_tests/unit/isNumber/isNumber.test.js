import isNumber from '../../../isNumber.js';
describe('isNumber', () => {
  test('3', () => {
    expect(isNumber(3)).toBeTruthy();
  });

  test('Number.MIN_VALUE', () => {
    expect(isNumber(Number.MIN_VALUE)).toBeTruthy();
  });

  test('Infinity', () => {
    expect(isNumber(Infinity)).toBeTruthy();
  });

  test('NaN', () => {
    expect(isNumber(NaN)).toBeTruthy();
  });

  test('"3"', () => {
    expect(isNumber('3')).toBeFalsy();
  });

  test('null', () => {
    expect(isNumber(null)).toBeFalsy();
  });

  test('undefined', () => {
    expect(isNumber(undefined)).toBeFalsy();
  });

  test('new Number(42)', () => {
    expect(isNumber(new Number(42))).toBeTruthy();
  });

  test('[]', () => {
    expect(isNumber([])).toBeFalsy();
  });

  test('new Object(2)', () => {
    expect(isNumber(new Object(2))).toBeTruthy();
  });
});
