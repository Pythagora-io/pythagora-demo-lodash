import isObjectLike from '../../../isObjectLike.js';
describe('isObjectLike', () => {
  test('isObjectLike with empty object', () => {
    expect(isObjectLike({})).toBe(true);
  });

  test('isObjectLike with array', () => {
    expect(isObjectLike([1, 2, 3])).toBe(true);
  });

  test('isObjectLike with function', () => {
    expect(isObjectLike(Function)).toBe(false);
  });

  test('isObjectLike with null', () => {
    expect(isObjectLike(null)).toBe(false);
  });

  test('isObjectLike with number', () => {
    expect(isObjectLike(42)).toBe(false);
  });

  test('isObjectLike with boolean', () => {
    expect(isObjectLike(false)).toBe(false);
  });

  test('isObjectLike with string', () => {
    expect(isObjectLike('string')).toBe(false);
  });

  test('isObjectLike with instance of class', () => {
    class MyClass {}
    const instance = new MyClass();
    expect(isObjectLike(instance)).toBe(true);
  });

  test('isObjectLike with Date object', () => {
    expect(isObjectLike(new Date())).toBe(true);
  });

  test('isObjectLike with RegExp object', () => {
    expect(isObjectLike(/regex/)).toBe(true);
  });
});
