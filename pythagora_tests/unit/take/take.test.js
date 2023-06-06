import take from '../../../take.js';
describe('take', () => {

  test('takes single element from array', () => {
    const input = [1, 2, 3];
    const output = take(input);
    expect(output).toEqual([1]);
  });

  test('takes multiple elements from array', () => {
    const input = [1, 2, 3];
    const output = take(input, 2);
    expect(output).toEqual([1, 2]);
  });

  test('takes all elements if n exceeds array length', () => {
    const input = [1, 2, 3];
    const output = take(input, 5);
    expect(output).toEqual([1, 2, 3]);
  });

  test('returns empty array if n is 0', () => {
    const input = [1, 2, 3];
    const output = take(input, 0);
    expect(output).toEqual([]);
  });

  test('returns empty array if array is null', () => {
    const output = take(null, 3);
    expect(output).toEqual([]);
  });

  test('returns empty array if array is undefined', () => {
    const output = take(undefined, 3);
    expect(output).toEqual([]);
  });

  test('returns empty array if array is empty', () => {
    const output = take([], 3);
    expect(output).toEqual([]);
  });
});
