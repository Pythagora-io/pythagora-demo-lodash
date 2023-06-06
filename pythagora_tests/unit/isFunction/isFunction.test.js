import isFunction from '../../../isFunction.js';
describe('isFunction', () => {
  test('isFunction with class', () => {
    expect(isFunction(class Any{})).toBe(true);
  });

  test('isFunction with arrow function', () => {
    expect(isFunction(() => {})).toBe(true);
  });

  test('isFunction with async function', () => {
    expect(isFunction(async () => {})).toBe(true);
  });

  test('isFunction with generator function', () => {
    expect(isFunction(function * Any() {})).toBe(true);
  });

  test('isFunction with a built-in function', () => {
    expect(isFunction(Math.round)).toBe(true);
  });

  test('isFunction with non-function value', () => {
    expect(isFunction(/abc/)).toBe(false);
  });

  test('isFunction with null', () => {
    expect(isFunction(null)).toBe(false);
  });

  test('isFunction with undefined', () => {
    expect(isFunction(undefined)).toBe(false);
  });

  test('isFunction with string', () => {
    expect(isFunction('string')).toBe(false);
  });

  test('isFunction with number', () => {
    expect(isFunction(1)).toBe(false);
  });
});
