import isString from '../../../isString.js';
describe('isString', () => {
  test('should return true for a string primitive', () => {
    expect(isString('abc')).toBeTruthy();
  });

  test('should return true for a string object', () => {
    expect(isString(new String('abc'))).toBeTruthy();
  });

  test('should return false for a number', () => {
    expect(isString(1)).toBeFalsy();
  });

  test('should return false for an array', () => {
    expect(isString(['abc'])).toBeFalsy();
  });

  test('should return false for null', () => {
    expect(isString(null)).toBeFalsy();
  });

  test('should return false for undefined', () => {
    expect(isString(undefined)).toBeFalsy();
  });

  test('should return false for a boolean', () => {
    expect(isString(true)).toBeFalsy();
  });

  test('should return false for an object', () => {
    expect(isString({a: 1})).toBeFalsy();
  });

  test('should return false for a function', () => {
    expect(isString(function() {})).toBeFalsy();
  });

});
