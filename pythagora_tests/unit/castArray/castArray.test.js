import castArray from '../../../castArray.js';
describe('castArray', () => {
  test('castArray single value', () => {
    expect(castArray(1)).toEqual([1]);
  });

  test('castArray object', () => {
    expect(castArray({a: 1})).toEqual([{a: 1}]);
  });

  test('castArray string', () => {
    expect(castArray('abc')).toEqual(['abc']);
  });

  test('castArray null', () => {
    expect(castArray(null)).toEqual([null]);
  });

  test('castArray undefined', () => {
    expect(castArray(undefined)).toEqual([undefined]);
  });

  test('castArray empty arguments', () => {
    expect(castArray()).toEqual([]);
  });

  test('castArray array input', () => {
    const array = [1, 2, 3];
    expect(castArray(array)).toBe(array);
  });

  test('castArray multiple inputs', () => {
    expect(castArray(1, 2, 3)).toEqual([1]);
  });
});
