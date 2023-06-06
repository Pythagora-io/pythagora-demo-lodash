import mapObject from '../../../mapObject.js';
describe('mapObject tests', () => {
  test('Test mapObject with valid inputs - numbers', () => {
    const input = { a: 3, b: 6 };
    const expectedOutput = [9, 36];
    expect(mapObject(input, (value) => value * value)).toEqual(expect.arrayContaining(expectedOutput));
  });

  test('Test mapObject with valid inputs - strings', () => {
    const input = { a: 'hello', b: 'world' };
    const expectedOutput = ['HELLO', 'WORLD'];
    expect(mapObject(input, (value) => value.toUpperCase())).toEqual(expect.arrayContaining(expectedOutput));
  });

  test('Test mapObject with empty object', () => {
    const input = {};
    const expectedOutput = [];
    expect(mapObject(input, (value) => value * value)).toEqual(expectedOutput);
  });

  test('Test mapObject with null input', () => {
    const input = null;
    const expectedOutput = [];
    expect(() => mapObject(input, (value) => value * value)).toThrow(TypeError);
  });

  test('Test mapObject with undefined input', () => {
    const input = undefined;
    const expectedOutput = [];
    expect(() => mapObject(input, (value) => value * value)).toThrow(TypeError);
  });

  test('Test mapObject with iteratee skipping properties', () => {
    const input = { a: 4, b: 9 };
    const expectedOutput = [9];
    const iteratee = (value, key, object) => {
      if (key === 'a') {
        return;
      }
      return value;
    };
    expect(mapObject(input, iteratee)).toEqual(expect.arrayContaining(expectedOutput));
  });
});
