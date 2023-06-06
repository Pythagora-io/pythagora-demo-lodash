import toPlainObject from '../../../toPlainObject.js';
describe('toPlainObject', () => {
  test('Test plain object conversion with own and inherited properties', () => {
    function Foo() {
      this.b = 2;
    }

    Foo.prototype.c = 3;

    const obj = new Foo();
    const expected = { b: 2, c: 3 };

    expect(toPlainObject(obj)).toEqual(expected);
  });

  test('Test plain object conversion with only own properties', () => {
    const obj = { a: 1, b: 2 };
    const expected = { a: 1, b: 2 };

    expect(toPlainObject(obj)).toEqual(expected);
  });

  test('Test plain object conversion with an empty object', () => {
    const obj = {};
    const expected = {};

    expect(toPlainObject(obj)).toEqual(expected);
  });

  test('Test plain object conversion with a string', () => {
    const str = 'test';
    const expected = { 0: 't', 1: 'e', 2: 's', 3: 't' };

    expect(toPlainObject(str)).toEqual(expected);
  });

  test('Test plain object conversion with a number', () => {
    const num = 42;
    const expected = {};

    expect(toPlainObject(num)).toEqual(expected);
  });

  test('Test plain object conversion with a boolean value', () => {
    const bool = true;
    const expected = {};

    expect(toPlainObject(bool)).toEqual(expected);
  });

  test('Test plain object conversion with a null value', () => {
    const result = toPlainObject(null);
    expect(result).toEqual({});
  });

  test('Test plain object conversion with an undefined value', () => {
    const result = toPlainObject(undefined);
    expect(result).toEqual({});
  });
});
