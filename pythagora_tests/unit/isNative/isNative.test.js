import isNative from '../../../isNative.js';
describe('isNative', () => {
  test('isNative - native function', () => {
    expect(isNative(Array.prototype.push)).toBe(true);
  });

  test('isNative - non-native function', () => {
    const nonNativeFn = () => {};
    expect(isNative(nonNativeFn)).toBe(false);
  });

  test('isNative - null', () => {
    expect(isNative(null)).toBe(false);
  });

  test('isNative - object', () => {
    expect(isNative({})).toBe(false);
  });

  test('isNative - array', () => {
    expect(isNative([1, 2, 3])).toBe(false);
  });

  test('isNative - string', () => {
    expect(isNative('string')).toBe(false);
  });

  test('isNative - number', () => {
    expect(isNative(123)).toBe(false);
  });

  test('isNative - boolean', () => {
    expect(isNative(true)).toBe(false);
  });

  test('isNative - undefined', () => {
    expect(isNative(undefined)).toBe(false);
  });

  test('isNative - RegExp', () => {
    expect(isNative(/test/)).toBe(false);
  });

});
