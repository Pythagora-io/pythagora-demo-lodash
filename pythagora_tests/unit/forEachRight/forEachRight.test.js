import forEachRight from '../../../forEachRight.js';
describe('forEachRight', () => {
  test('Basic usage', () => {
    const array = [1, 2, 3];
    const result = [];

    forEachRight(array, (value) => {
      result.push(value * 2);
    });

    expect(result).toEqual([6, 4, 2]);
  });

  test('Empty array', () => {
    const array = [];
    const result = [];

    forEachRight(array, (value) => {
      result.push(value);
    });

    expect(result).toEqual([]);
  });

  test('Object input', () => {
    const object = { a: 1, b: 2, c: 3 };
    const result = [];

    forEachRight(object, (value) => {
      result.push(value * 2);
    });

    expect(result).toEqual([6, 4, 2]);
  });
});
