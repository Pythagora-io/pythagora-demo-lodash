import inRange from '../../../inRange.js';

describe('inRange', () => {
  test('check if number is between start and end', () => {
    expect(inRange(3, 2, 4)).toBe(true);
  });

  test('check if number is within range when only start is provided', () => {
    expect(inRange(4, 8)).toBe(true);
  });

  test('check if number is not in range', () => {
    expect(inRange(4, 2)).toBe(false);
  });

  test('check if number equals start of range', () => {
    expect(inRange(2, 2)).toBe(false);
  });

  test('check decimal number is in range', () => {
    expect(inRange(1.2, 2)).toBe(true);
  });

  test('check decimal number is not in range', () => {
    expect(inRange(5.2, 4)).toBe(false);
  });

  test('check for negative range', () => {
    expect(inRange(-3, -2, -6)).toBe(true);
  });

  test('check for large numbers', () => {
    expect(inRange(100000, 500000, 10000)).toBe(true);
  });

  test('check when end is undefined', () => {
    expect(inRange(100, 200)).toBe(true);
  });
});