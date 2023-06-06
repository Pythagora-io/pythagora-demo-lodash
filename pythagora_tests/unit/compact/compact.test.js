import compact from '../../../compact.js';
describe('compact', () => {
  test('removes all falsey values from array', () => {
    expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
  });

  test('works with empty array', () => {
    expect(compact([])).toEqual([]);
  });

  test('works with null', () => {
    expect(compact(null)).toEqual([]);
  });

  test('works with undefined', () => {
    expect(compact(undefined)).toEqual([]);
  });

  test('works with array of all truthy values', () => {
    expect(compact([1, 'abc', {}, [], () => {}])).toEqual([1, 'abc', {}, [], expect.any(Function)]);
  });

  test('works with array of all falsey values', () => {
    expect(compact([0, false, null, '', undefined, NaN])).toEqual([]);
  });
});
