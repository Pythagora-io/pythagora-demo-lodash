import mean from '../../../mean.js';

describe('mean', () => {
  test('test mean with positive numbers', () => {
    expect(mean([4, 2, 8, 6])).toEqual(5);
  });

  test('test mean with negative numbers', () => {
    expect(mean([-4, -2, -8, -6])).toEqual(-5);
  });

  test('test mean with mixed numbers', () => {
    expect(mean([-4, 2, 8, -6])).toEqual(0);
  });

  test('test mean with single value array', () => {
    expect(mean([10])).toEqual(10);
  });

  test('test mean with array containing zeros', () => {
    expect(mean([0, 0, 0, 0])).toEqual(0);
  });

  test('test mean with decimal values', () => {
    expect(mean([1.5, 2.5, 3.5])).toEqual(2.5);
  });

  test('test mean with large values', () => {
    expect(mean([1000000, 2000000, 3000000])).toEqual(2000000);
  });

  test('test mean with values as strings', () => {
    expect(mean(["5", "6", "7"])).toEqual(6);
  });
});
