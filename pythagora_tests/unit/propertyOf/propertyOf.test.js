import propertyOf from '../../../propertyOf.js';

describe('propertyOf', () => {
  test('propertyOf({})()', () => {
    const getObjectProperty = propertyOf({});
    expect(getObjectProperty('a')).toBeUndefined();
  });

  test('propertyOf(null)', () => {
    const getObjectProperty = propertyOf(null);
    expect(getObjectProperty('a')).toBeUndefined();
  });

  test('propertyOf(object)', () => {
    const object = { a: { b: { c: 1 } } };
    const getObjectProperty = propertyOf(object);
    expect(getObjectProperty('a.b.c')).toBe(1);
  });

  test('propertyOf(object) - nested arrays', () => {
    const object = { a: [[1, 2], [3, 4]] };
    const getObjectProperty = propertyOf(object);
    expect(getObjectProperty('a[1][0]')).toBe(3);
  });

  test('propertyOf(object) - array notation', () => {
    const object = { a: 1, b: 2 };
    const getObjectProperty = propertyOf(object);
    expect(getObjectProperty(['a'])).toBe(1);
    expect(getObjectProperty(['b'])).toBe(2);
  });

  test('propertyOf(object) - combination of dots and brackets', () => {
    const object = { a: { b: [1, 2] } };
    const getObjectProperty = propertyOf(object);
    expect(getObjectProperty('a.b[1]')).toBe(2);
  });
});
