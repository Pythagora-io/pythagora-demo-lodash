import isSymbol from '../../../isSymbol.js';

describe('isSymbol', () => {
  test('Symbol.iterator', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });

  test('strings', () => {
    expect(isSymbol('abc')).toBe(false);
  });

  test('numbers', () => {
    expect(isSymbol(42)).toBe(false);
  });

  test('null', () => {
    expect(isSymbol(null)).toBe(false);
  });

  test('undefined', () => {
    expect(isSymbol(undefined)).toBe(false);
  });

  test('arrays', () => {
    expect(isSymbol(['a', 'b', 'c'])).toBe(false);
  });

  test('objects', () => {
    expect(isSymbol({ key: 'value' })).toBe(false);
  });

  test('functions', () => {
    expect(isSymbol(() => {})).toBe(false);
  });

  test('custom symbols', () => {
    const customSymbol = Symbol('custom');
    expect(isSymbol(customSymbol)).toBe(true);
  });
});