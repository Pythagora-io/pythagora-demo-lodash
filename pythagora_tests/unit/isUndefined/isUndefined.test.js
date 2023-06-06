import isUndefined from '../../../isUndefined.js';
describe('isUndefined', () => {
  test('undefined should return true', () => {
    expect(isUndefined(undefined)).toBe(true);
  });

  test('null should return false', () => {
    expect(isUndefined(null)).toBe(false);
  });

  test('number should return false', () => {
    expect(isUndefined(5)).toBe(false);
  });

  test('string should return false', () => {
    expect(isUndefined('Hello')).toBe(false);
  });

  test('object should return false', () => {
    expect(isUndefined({})).toBe(false);
  });

  test('function should return false', () => {
    expect(isUndefined(() => {})).toBe(false);
  });

  test('array should return false', () => {
    expect(isUndefined([1, 2, 3])).toBe(false);
  });

  test('date should return false', () => {
    expect(isUndefined(new Date())).toBe(false);
  });

  test('void operator should return true', () => {
    expect(isUndefined(void 0)).toBe(true);
  });
});
