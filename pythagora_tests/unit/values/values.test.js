import values from '../../../values.js';

describe('values', () => {
  test('null', () => {
    expect(values(null)).toEqual([]);
  });

  test('undefined', () => {
    expect(values(undefined)).toEqual([]);
  });

  test('empty object', () => {
    expect(values({})).toEqual([]);
  });

  test('number', () => {
    expect(values(42)).toEqual([]);
  });

  test('string', () => {
    expect(values('hello')).toEqual(['h', 'e', 'l', 'l', 'o']);
  });

  test('array', () => {
    expect(values([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('object with properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = values(obj);
    expect(result.sort()).toEqual([1, 2, 3]);
  });

  test('function with properties', () => {
    function TestFunc() {
      this.a = 1;
      this.b = 2;
    }
    TestFunc.prototype.c = 3;
    expect(values(new TestFunc()).sort()).toEqual([1, 2]);
  });
});