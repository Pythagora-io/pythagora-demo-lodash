import over from '../../../over.js';

describe('over', () => {
  test('1', () => {
    const func = over([Math.max, Math.min]);
    expect(func(1, 2, 3, 4)).toEqual([4, 1]);
  });

  test('2', () => {
    const func = over([]);
    expect(func(1, 2, 3, 4)).toEqual([]);
  });

  test('3', () => {
    const func = over();
    expect(func(1, 2, 3, 4)).toEqual([]);
  });

  test('4', () => {
    const multiply = (a, b) => a * b;
    const add = (a, b) => a + b;
    const func = over([multiply, add]);
    expect(func(2, 3)).toEqual([6, 5]);
  });

  test('5', () => {
    const func = over([Math.max, Math.min]);
    expect(func(-1, 0, 1, 2)).toEqual([2, -1]);
  });

  test('6', () => {
    const func = over([Math.sqrt, Math.abs]);
    expect(func(-4, 9)).toEqual([NaN, 4]);
  });
});
