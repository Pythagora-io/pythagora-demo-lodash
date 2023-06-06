import invert from '../../../invert.js';
describe('invert', () => {
  test('should invert keys and values of an object', () => {
    const object = { a: 1, b: 2, c: 1 };
    expect(invert(object)).toEqual({ '1': 'c', '2': 'b' });
  });

  test('should not modify original object', () => {
    const object = { a: 1, b: 2, c: 1 };
    invert(object);
    expect(object).toEqual({ a: 1, b: 2, c: 1 });
  });

  test('should work with empty objects', () => {
    expect(invert({})).toEqual({});
  });

  test('should use toString method when values are objects', () => {
    const object = { a: { value: 1 }, b: { value: 2 } };
    expect(invert(object)).toEqual({
      '[object Object]': 'b'
    });
  });

  test('should work with null values', () => {
    const object = { a: null, b: 2 };
    expect(invert(object)).toEqual({ 'null': 'a', '2': 'b' });
  });

  test('should work with undefined values', () => {
    const object = { a: undefined, b: 2 };
    expect(invert(object)).toEqual({ 'undefined': 'a', '2': 'b' });
  });

});
