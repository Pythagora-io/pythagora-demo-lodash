import isElement from '../../../isElement.js';

describe('isElement', () => {
  test("isElement('<body>')", () => {
    expect(isElement('<body>')).toBe(false);
  });

  test('isElement(null)', () => {
    expect(isElement(null)).toBe(false);
  });

  test('isElement(undefined)', () => {
    expect(isElement(undefined)).toBe(false);
  });

  test('isElement(1)', () => {
    expect(isElement(1)).toBe(false);
  });

  test('isElement("string")', () => {
    expect(isElement("string")).toBe(false);
  });

  test('isElement({})', () => {
    expect(isElement({})).toBe(false);
  });

  test('isElement([])', () => {
    expect(isElement([])).toBe(false);
  });

  test('isElement(() => {})', () => {
    expect(isElement(() => {})).toBe(false);
  });
});
