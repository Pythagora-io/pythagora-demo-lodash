import flatten from '../../../flatten.js';

describe('flatten', () => {
  test('flattens single level deep', () => {
    expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5]);
  });

  test('returns an empty array for null input', () => {
    expect(flatten(null)).toEqual([]);
  });

  test('returns an empty array for undefined input', () => {
    expect(flatten(undefined)).toEqual([]);
  });

  test('handles arrays with various types', () => {
    const input = [1, 'a', { prop: 'value' }, [2, 'b', { nestedProp: 'nestedValue' }], null, undefined];
    const expectedResult = [1, 'a', { prop: 'value' }, 2, 'b', { nestedProp: 'nestedValue' }, null, undefined];
    expect(flatten(input)).toEqual(expectedResult);
  });

  test('flattens an empty array', () => {
    expect(flatten([])).toEqual([]);
  });
});
