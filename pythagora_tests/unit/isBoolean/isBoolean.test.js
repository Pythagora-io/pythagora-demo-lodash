import isBoolean from '../../../isBoolean.js';
describe('isBoolean', () => {
  test('true', () => {
    expect(isBoolean(true)).toBe(true);
  });

  test('false', () => {
    expect(isBoolean(false)).toBe(true);
  });

  test('null', () => {
    expect(isBoolean(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isBoolean(undefined)).toBe(false);
  });

  test('empty object', () => {
    expect(isBoolean({})).toBe(false);
  });

  test('array', () => {
    expect(isBoolean([1, 2, 3])).toBe(false);
  });

  test('boolean object', () => {
    expect(isBoolean(new Boolean(true))).toBe(true);
  });

  test('function', () => {
    expect(isBoolean(function () {})).toBe(false);
  });

  test('string', () => {
    expect(isBoolean('string')).toBe(false);
  });

  test('number', () => {
    expect(isBoolean(1)).toBe(false);
  });
});
