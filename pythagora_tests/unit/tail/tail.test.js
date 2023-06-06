import tail from '../../../tail.js';
describe('tail', () => {
  test('Case 1: Basic tail', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3]);
  });

  test('Case 2: Empty array', () => {
    expect(tail([])).toEqual([]);
  });

  test('Case 3: One element array', () => {
    expect(tail([42])).toEqual([]);
  });

  test('Case 4: Null input', () => {
    expect(tail(null)).toEqual([]);
  });

  test('Case 5: Undefined input', () => {
    expect(tail(undefined)).toEqual([]);
  });

  test('Case 6: String input', () => {
    expect(tail('Test')).toEqual(['e', 's', 't']);
  });

  test('Case 7: Object input', () => {
    expect(tail({a: 1, b: 2, c: 3})).toEqual([]);
  });

  test('Case 8: Multiple arrays', () => {
    expect(tail([[1, 2], [3, 4]])).toEqual([[3, 4]]);
  });
});
