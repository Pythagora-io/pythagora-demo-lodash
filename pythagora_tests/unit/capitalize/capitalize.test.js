import capitalize from '../../../capitalize.js';
import upperFirst from '../../../upperFirst';
import toString from '../../../toString';

describe('capitalize', () => {
  test('capitalize(FRED)', () => {
    expect(capitalize('FRED')).toBe('Fred');
  });
  
  test('capitalize(empty string)', () => {
    expect(capitalize('')).toBe('');
  });
  
  test('capitalize(null)', () => {
    expect(capitalize(null)).toBe('');
  });
  
  test('capitalize(undefined)', () => {
    expect(capitalize(undefined)).toBe('');
  });
  
  test('capitalize(number)', () => {
    expect(capitalize(123)).toBe('123');
  });
  
  test('capitalize(array)', () => {
    expect(capitalize(['a', 'b', 'c'])).toBe('A,b,c');
  });
  
  test('capitalize(boolean)', () => {
    expect(capitalize(true)).toBe('True');
  });
});

describe('upperFirst', () => {
  test('upperFirst(single word)', () => {
    expect(upperFirst('test')).toBe('Test');
  });
  
  test('upperFirst(empty string)', () => {
    expect(upperFirst('')).toBe('');
  });
});

describe('toString', () => {
  test('toString(null)', () => {
    expect(toString(null)).toBe('');
  });
  
  test('toString(undefined)', () => {
    expect(toString(undefined)).toBe('');
  });
  
  test('toString(-0)', () => {
    expect(toString(-0)).toBe('-0');
  });
  
  test('toString(array)', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });
});