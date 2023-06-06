import defaults from '../../../defaults.js';
describe('defaults', () => {
  test('should assign source properties to destination object', () => {
    const source = { b: 2 };
    const result = defaults({ a: 1 }, source);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('should not overwrite existing properties', () => {
    const source = { a: 3, b: 2 };
    const result = defaults({ a: 1 }, source);
    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('should apply Multiple sources from left to right', () => {
    const source1 = { a: 2, b: 2 };
    const source2 = { a: 3, c: 3 };
    const result = defaults({ a: 1 }, source1, source2);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  test('should skip undefined sources', () => {
    const source = { a: 3 };
    const result = defaults({ a: 1 }, undefined, null, source);
    expect(result).toEqual({ a: 1 });
  });

  test('should not change source object', () => {
    const source = { b: 2 };
    const expectedSource = { b: 2 };
    defaults({ a: 1 }, source);
    expect(source).toEqual(expectedSource);
  });

  test('should handle edge case with prototype properties', () => {
    const Foo = function() {};
    Foo.prototype.a = 1;
    const fooInstance = new Foo();
    fooInstance.b = undefined;

    const result = defaults({ c: 3 }, fooInstance);
    expect(result).toEqual({ a: 1, b: undefined, c: 3 });
  });
});
