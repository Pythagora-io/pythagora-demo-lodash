import lte from '../../../lte.js';
describe('lte', () => {
  test('lte(1, 3)', () => {
    expect(lte(1, 3)).toBe(true);
  });

  test('lte(3, 3)', () => {
    expect(lte(3, 3)).toBe(true);
  });

  test('lte(3, 1)', () => {
    expect(lte(3, 1)).toBe(false);
  });

  test('lte("a", "b")', () => {
    expect(lte("a", "b")).toBe(true);
  });

  test('lte(3.5, 3.3)', () => {
    expect(lte(3.5, 3.3)).toBe(false);
  });

  test('lte("3a", "3b")', () => {
    expect(lte("3a", "3b")).toBe(true);
  });

  test('lte(undefined, null)', () => {
    expect(lte(undefined, null)).toBe(false);
  });

  test('lte(NaN, NaN)', () => {
    expect(lte(NaN, NaN)).toBe(false);
  });

  test('lte(Infinity, -Infinity)', () => {
    expect(lte(Infinity, -Infinity)).toBe(false);
  });

  test('lte(-Infinity, Infinity)', () => {
    expect(lte(-Infinity, Infinity)).toBe(true);
  });
});
