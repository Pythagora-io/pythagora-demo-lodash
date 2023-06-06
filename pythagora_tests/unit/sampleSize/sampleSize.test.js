import sampleSize from '../../../sampleSize.js';

describe('sampleSize', () => {
  test('1', () => {
    const input = [1, 2, 3];
    const output = sampleSize(input, 2);
    expect(output).toHaveLength(2);
  });

  test('2', () => {
    const input = [1, 2, 3];
    const output = sampleSize(input, 4);
    expect(output).toHaveLength(3);
    expect(output).toContain(1);
    expect(output).toContain(2);
    expect(output).toContain(3);
  });

  test('3', () => {
    const input = [];
    const output = sampleSize(input);
    expect(output).toEqual([]);
  });

  test('4', () => {
    const input = [1, 2, 3];
    const output = sampleSize(input, 0);
    expect(output).toEqual([]);
  });

  test('5', () => {
    const input = [1, 2, 3];
    const output = sampleSize(input, -1);
    expect(output).toEqual([]);
  });

  test('6', () => {
    const input = [1, 2, 3];
    const output = sampleSize(input, 3);
    expect(output).toHaveLength(3);
    expect(output).toContain(1);
    expect(output).toContain(2);
    expect(output).toContain(3);
  });

  test('7', () => {
    const input = [1, 2, 3];
    const output = sampleSize(input);
    expect(output).toHaveLength(1);
    expect([1, 2, 3]).toContain(output[0]);
  });

  test('8', () => {
    const input = ['a', 'b', 'c'];
    const output = sampleSize(input, 2);
    expect(output).toHaveLength(2);
  });

  test('9', () => {
    const input = null;
    const output = sampleSize(input);
    expect(output).toEqual([]);
  });
});
