import without from '../../../without.js';

describe('without', () => {
  test('without([2, 1, 2, 3], 1, 2)', () => {
    expect(without([2, 1, 2, 3], 1, 2)).toEqual([3]);
  });

  test('without([1, 2, 3], 3)', () => {
    expect(without([1, 2, 3], 3)).toEqual([1, 2]);
  });

  test('without([], 1, 2)', () => {
    expect(without([], 1, 2)).toEqual([]);
  });

  test('without([1, 2, 1, 3], 1, 3)', () => {
    expect(without([1, 2, 1, 3], 1, 3)).toEqual([2]);
  });

  test('without("stringCase", "s", "e")', () => {
    expect(without('stringCase', 's', 'e')).toEqual([]);
  });
});
