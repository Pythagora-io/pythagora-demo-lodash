import isLength from '../../../isLength.js';
describe('isLength', () => {
  test('1', () => {
    expect(isLength(3)).toBe(true);
  });

  test('2', () => {
    expect(isLength(-1)).toBe(false);
  });

  test('3', () => {
    expect(isLength(1.5)).toBe(false);
  });

  test('4', () => {
    expect(isLength(Number.MAX_SAFE_INTEGER)).toBe(true);
  });

  test('5', () => {
    expect(isLength(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
  });

  test('6', () => {
    expect(isLength(Number.MIN_VALUE)).toBe(false);
  });

  test('7', () => {
    expect(isLength(Infinity)).toBe(false);
  });

  test('8', () => {
    expect(isLength('3')).toBe(false);
  });

  test('9', () => {
    expect(isLength(null)).toBe(false);
  });

  test('10', () => {
    expect(isLength(undefined)).toBe(false);
  });

  test('11', () => {
    expect(isLength(true)).toBe(false);
  });

  test('12', () => {
    expect(isLength(false)).toBe(false);
  });

  test('13', () => {
    expect(isLength({})).toBe(false);
  });

  test('14', () => {
    expect(isLength([])).toBe(false);
  });
});
