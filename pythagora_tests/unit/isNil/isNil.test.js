import isNil from '../../../isNil.js';
describe('isNil tests', () => {
  test('Value is null', () => {
    expect(isNil(null)).toBe(true);
  });

  test('Value is undefined', () => {
    expect(isNil(void 0)).toBe(true);
  });

  test('Value is NaN', () => {
    expect(isNil(NaN)).toBe(false);
  });

  test('Value is number', () => {
    expect(isNil(7)).toBe(false);
  });

  test('Value is string', () => {
    expect(isNil('test')).toBe(false);
  });

  test('Value is empty string', () => {
    expect(isNil('')).toBe(false);
  });

  test('Value is empty object', () => {
    expect(isNil({})).toBe(false);
  });

  test('Value is empty array', () => {
    expect(isNil([])).toBe(false);
  });

  test('Value is boolean true', () => {
    expect(isNil(true)).toBe(false);
  });

  test('Value is boolean false', () => {
    expect(isNil(false)).toBe(false);
  });

  test('Value is function', () => {
    expect(isNil(() => {})).toBe(false);
  });

});
