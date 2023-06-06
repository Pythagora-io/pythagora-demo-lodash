import cloneDeepWith from '../../../cloneDeepWith.js';
describe('cloneDeepWith', () => {
  test('should deep clone objects', () => {
    const object = { a: 1, b: { c: 2 } };
    const expected = { a: 1, b: { c: 2 } };
    const clone = cloneDeepWith(object);
    expect(clone).toEqual(expected);
    expect(clone.b).not.toBe(object.b);
  });
  test('should deep clone arrays', () => {
    const array = [1, [2, 3]];
    const expected = [1, [2, 3]];
    const clone = cloneDeepWith(array);
    expect(clone).toEqual(expected);
    expect(clone[1]).not.toBe(array[1]);
  });
  test('should use customizer', () => {
    const object = { a: 1, b: { c: 2 } };
    const customizer = (value) => {
      if (typeof value === 'number') return value * 2;
    };
    const expected = { a: 2, b: { c: 4 } };
    const clone = cloneDeepWith(object, customizer);
    expect(clone).toEqual(expected);
  });
  test('should not clone circular references', () => {
    const object = { a: 1, b: {} };
    object.b = object;
    const clone = cloneDeepWith(object, undefined);
    expect(clone.b).not.toBe(object);
    expect(clone.b).toBe(clone);
  });
  test('should clone Date', () => {
    const date = new Date(2021, 7, 16);
    const clone = cloneDeepWith(date);
    expect(clone).toEqual(date);
    expect(clone).not.toBe(date);
  });
  test('should work with typed arrays', () => {
    const typedArray = new Uint8Array([1, 2, 3]);
    const clone = cloneDeepWith(typedArray);
    expect(clone).toEqual(typedArray);
    expect(clone).not.toBe(typedArray);
  });
  test('should handle null values', () => {
    const object = { a: null };
    const clone = cloneDeepWith(object);
    expect(clone).toEqual(object);
    expect(clone).not.toBe(object);
  });
  test('should clone RegExp', () => {
    const regex = /abc/gi;
    const clone = cloneDeepWith(regex);
    expect(clone).toEqual(regex);
    expect(clone).not.toBe(regex);
  });
});
