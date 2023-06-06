import clamp from '../../../clamp.js';
describe('clamp', () => {
  test('clamp within range', () => {
    expect(clamp(0, -5, 5)).toBe(0);
  });

  test('clamp lower bound', () => {
    expect(clamp(-10, -5, 5)).toBe(-5);
  });

  test('clamp upper bound', () => {
    expect(clamp(10, -5, 5)).toBe(5);
  });

  test('clamp negative range', () => {
    expect(clamp(-3, -5, -1)).toBe(-3);
  });

  test('clamp with NaN bounds', () => {
    expect(clamp(3, NaN, NaN)).toBe(0);
  });

  test('clamp with Infinity input', () => {
    expect(clamp(Infinity, -5, 5)).toBe(5);
  });

  test('clamp with Infinity bounds', () => {
    expect(clamp(3, -Infinity, Infinity)).toBe(3);
  });
});
