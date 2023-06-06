import meanBy from '../../../meanBy.js';
describe('meanBy tests', () => {
  test('should calculate the mean by attribute n', () => {
    const input = [{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }];
    const expected = 5;
    expect(meanBy(input, ({n}) => n)).toBe(expected);
  });

  test('should return NaN for empty array', () => {
    expect(meanBy([], ({n}) => n)).toBeNaN();
  });

  test('should return NaN for null input', () => {
    expect(meanBy(null, ({n}) => n)).toBeNaN();
  });

  test('should return NaN when iteratee returns undefined', () => {
    const input = [1, 2, 3];
    expect(meanBy(input, () => undefined)).toBeNaN();
  });

  test('should calculate the mean by given iteratee', () => {
    const input = [1, 2, 3, 4, 5];
    const expected = 6;
    expect(meanBy(input, (x) => x * 2)).toBe(expected);
  });

});
