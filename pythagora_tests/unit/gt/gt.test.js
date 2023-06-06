import gt from '../../../gt.js';
describe('gt', () => {
  test('gt(3, 1) should return true', () => {
    expect(gt(3, 1)).toBe(true);
  });

  test('gt(3, 3) should return false', () => {
    expect(gt(3, 3)).toBe(false);
  });

  test('gt(1, 3) should return false', () => {
    expect(gt(1, 3)).toBe(false);
  });

  test('gt("3", "1") should return true', () => {
    expect(gt("3", "1")).toBe(true);
  });

  test('gt("3", "3") should return false', () => {
    expect(gt("3", "3")).toBe(false);
  });

  test('gt("1", "3") should return false', () => {
    expect(gt("1", "3")).toBe(false);
  });

  test('gt(null, null) should return false', () => {
    expect(gt(null, null)).toBe(false);
  });

  test('gt(undefined, undefined) should return false', () => {
    expect(gt(undefined, undefined)).toBe(false);
  });

  test('gt(NaN, NaN) should return false', () => {
    expect(gt(NaN, NaN)).toBe(false);
  });

  test('gt(Infinity, Infinity) should return false', () => {
    expect(gt(Infinity, Infinity)).toBe(false);
  });

  test('gt(-Infinity, -Infinity) should return false', () => {
    expect(gt(-Infinity, -Infinity)).toBe(false);
  });

  test('gt(Infinity, -Infinity) should return true', () => {
    expect(gt(Infinity, -Infinity)).toBe(true);
  });

  test('gt(-Infinity, Infinity) should return false', () => {
    expect(gt(-Infinity, Infinity)).toBe(false);
  });

  test('gt(5.4, 1.2) should return true', () => {
    expect(gt(5.4, 1.2)).toBe(true);
  });

  test('gt("a", "z") should return false', () => {
    expect(gt("a", "z")).toBe(false);
  });

  test('gt("a", "a") should return false', () => {
    expect(gt("a", "a")).toBe(false);
  });

  test('gt("apple", "banana") should return false', () => {
    expect(gt("apple", "banana")).toBe(false);
  });

  test('gt("banana", "apple") should return true', () => {
    expect(gt("banana", "apple")).toBe(true);
  });
});
