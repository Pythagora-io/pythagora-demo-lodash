import isPlainObject from '../../../isPlainObject';

describe('isPlainObject', () => {
  test('should return true for plain object', () => {
    expect(isPlainObject({})).toBeTruthy();
    expect(isPlainObject({ a: 1, b: 2 })).toBeTruthy();
  });

  test('should return true for Object.create(null)', () => {
    expect(isPlainObject(Object.create(null))).toBeTruthy();
  });

  test('should return false for arrays', () => {
    expect(isPlainObject([])).toBeFalsy();
    expect(isPlainObject([1, 2, 3])).toBeFalsy();
  });

  test('should return false for other types', () => {
    expect(isPlainObject(123)).toBeFalsy();
    expect(isPlainObject('string')).toBeFalsy();
    expect(isPlainObject(true)).toBeFalsy();
    expect(isPlainObject(null)).toBeFalsy();
    expect(isPlainObject(undefined)).toBeFalsy();
  });

  test('should return false for non-plain objects', () => {
    class Test {
      constructor() {
        this.a = 1;
      }
    }

    expect(isPlainObject(new Test())).toBeFalsy();
    expect(isPlainObject(new Date())).toBeFalsy();
  });
});
