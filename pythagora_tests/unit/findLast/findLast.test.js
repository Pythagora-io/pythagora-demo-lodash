import findLast from '../../../findLast.js'
describe('findLast', () => {
  test('finds the last element from the right that matches predicate', () => {
    const input = [1, 2, 3, 4];
    const predicate = n => n % 2 == 1;
    const output = findLast(input, predicate);
    expect(output).toBe(3);
  });

  test('returns undefined if no element matches predicate', () => {
    const input = [2, 4, 6, 8];
    const predicate = n => n % 2 == 1;
    const output = findLast(input, predicate);
    expect(output).toBeUndefined();
  });

  test('supports searching from specified index', () => {
    const input = [1, 2, 3, 4];
    const predicate = n => n % 2 == 1;
    const fromIndex = 1;
    const output = findLast(input, predicate, fromIndex);
    expect(output).toBe(1);
  });
});
