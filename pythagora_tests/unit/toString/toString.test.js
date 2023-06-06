import toString from '../../../toString.js';

describe('toString', () => {
  test("toString(null)", () => {
    expect(toString(null)).toBe('');
  });

  test("toString(undefined)", () => {
    expect(toString(undefined)).toBe('');
  });

  test("toString('string')", () => {
    expect(toString('string')).toBe('string');
  });

  test("toString(-0)", () => {
    expect(toString(-0)).toBe('-0');
  });

  test("toString(0)", () => {
    expect(toString(0)).toBe('0');
  });

  test("toString([1, 2, 3])", () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });

  test("toString(Symbol('test'))", () => {
    expect(toString(Symbol('test'))).toBe('Symbol(test)');
  });

  test("toString({ key: 'value' })", () => {
    expect(toString({ key: 'value' })).toBe('[object Object]');
  });
});