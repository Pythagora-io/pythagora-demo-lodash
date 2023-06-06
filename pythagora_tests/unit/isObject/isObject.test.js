import isObject from '../../../isObject.js';
describe('isObject', () => {
  test('isObject with an object', () => {
    expect(isObject({})).toBe(true);
  });

  test('isObject with an array', () => {
    expect(isObject([1, 2, 3])).toBe(true);
  });

  test('isObject with a function', () => {
    expect(isObject(function() {})).toBe(true);
  });

  test('isObject with a null', () => {
    expect(isObject(null)).toBe(false);
  });

  test('isObject with an undefined', () => {
    expect(isObject(undefined)).toBe(false);
  });

  test('isObject with a string', () => {
    expect(isObject('text')).toBe(false);
  });

  test('isObject with a number', () => {
    expect(isObject(42)).toBe(false);
  });

  test('isObject with a boolean', () => {
    expect(isObject(true)).toBe(false);
  });

  test('isObject with a date', () => {
    expect(isObject(new Date())).toBe(true);
  });

});
