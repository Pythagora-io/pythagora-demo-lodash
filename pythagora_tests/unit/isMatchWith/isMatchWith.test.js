import isMatchWith from '../../../isMatchWith.js';

describe('isMatchWith', () => {
  test('1', () => {
    const object = { greeting: 'hello' };
    const source = { greeting: 'hi' };
    const customizer = (objValue, srcValue) => (
        /^h(?:i|ello)$/.test(objValue) && /^h(?:i|ello)$/.test(srcValue)
    );
    expect(isMatchWith(object, source, customizer)).toBe(true);
  });

  test('2', () => {
    const object = { greeting: 'yo' };
    const source = { greeting: 'hi' };
    const customizer = (objValue, srcValue) => (
        /^h(?:i|ello)$/.test(objValue) && /^h(?:i|ello)$/.test(srcValue)
    );
    expect(isMatchWith(object, source, customizer)).toBe(false);
  });

  test('3', () => {
    const object = { a: 1, b: 2, c: 3 };
    const source = { a: 1, b: 2 };
    const customizer = (objValue, srcValue) => objValue === srcValue;
    expect(isMatchWith(object, source, customizer)).toBe(true);
  });

  test('4', () => {
    const object = { a: 1 };
    const source = { b: 2 };
    const customizer = (objValue, srcValue) => objValue === srcValue;
    expect(isMatchWith(object, source, customizer)).toBe(false);
  });

  test('5', () => {
    const object = { a: [1, 2], b: { c: 3 } };
    const source = { a: [1, 2], b: { c: 3 } };
    const customizer = (objValue, srcValue, key, obj) => JSON.stringify(objValue) === JSON.stringify(srcValue);
    expect(isMatchWith(object, source, customizer)).toBe(true);
  });

  test('6', () => {
    const object = { a: [1, 2, 3], b: { c: 4 } };
    const source = { a: [1, 2], b: { c: 3 } };
    const customizer = (objValue, srcValue, key, obj) => JSON.stringify(objValue) === JSON.stringify(srcValue);
    expect(isMatchWith(object, source, customizer)).toBe(false);
  });

  test('7', () => {
    const object = { a: 1, b: 2, c: 3 };
    const source = { a: 1, b: 2, c: '3' };
    const customizer = (objValue, srcValue) => objValue == srcValue;
    expect(isMatchWith(object, source, customizer)).toBe(true);
  });

  test('8', () => {
    const object = { a: 1, b: 2, c: 3 };
    const source = { a: 0, b: 2, c: 3 };
    const customizer = (objValue, srcValue) => objValue == srcValue;
    expect(isMatchWith(object, source, customizer)).toBe(false);
  });
});
