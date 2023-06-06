import flattenDeep from '../../../flattenDeep.js';

describe('flattenDeep', () => {
  test('returns an empty array when input is null', () => {
    expect(flattenDeep(null)).toEqual([]);
  });

  test('returns an empty array when input is undefined', () => {
    expect(flattenDeep(undefined)).toEqual([]);
  });

  test('returns an empty array when input is an empty array', () => {
    expect(flattenDeep([])).toEqual([]);
  });

  test('returns a flattened array when input is a single level nested array', () => {
    const array = [1, [2], 3, [4, 5]];
    const expected = [1, 2, 3, 4, 5];
    expect(flattenDeep(array)).toEqual(expected);
  });

  test('returns a flattened array when input is a multi level nested array', () => {
    const array = [1, [2, [3, [4]], 5]];
    const expected = [1, 2, 3, 4, 5];
    expect(flattenDeep(array)).toEqual(expected);
  });

  test('returns a flattened array when input contains array with different data types', () => {
    const array = [1, ['a', { key: 'value' }, [[2]], 3]];
    const expected = [1, 'a', { key: 'value' }, 2, 3];
    expect(flattenDeep(array)).toEqual(expected);
  });

  test('returns a flattened array when input includes non-array values', () => {
    const array = [1, 'abc', { key: 'value' }, [2, [3]], 4];
    const expected = [1, 'abc', { key: 'value' }, 2, 3, 4];
    expect(flattenDeep(array)).toEqual(expected);
  });

  test('returns a flattened array when input is a multi level nested array with different data types', () => {
    const array = [1, [2, [3, ['a', { key: 'value' }]], ['b', [4]], 5]];
    const expected = [1, 2, 3, 'a', { key: 'value' }, 'b', 4, 5];
    expect(flattenDeep(array)).toEqual(expected);
  });
});
