import lt from '../../../lt.js';
describe('lt', () => {
  test('lt(1, 3) should return true', () => {
    expect(lt(1, 3)).toBe(true);
  });

  test('lt(3, 3) should return false', () => {
    expect(lt(3, 3)).toBe(false);
  });

  test('lt(3, 1) should return false', () => {
    expect(lt(3, 1)).toBe(false);
  });

  test('lt("a", "b") should return true', () => {
    expect(lt("a", "b")).toBe(true);
  });

  test('lt("b", "b") should return false', () => {
    expect(lt("b", "b")).toBe(false);
  });

  test('lt("b", "a") should return false', () => {
    expect(lt("b", "a")).toBe(false);
  });

  test('lt(null, 1) should return true', () => {
    expect(lt(null, 1)).toBe(true);
  });

  test('lt(1, null) should return false', () => {
    expect(lt(1, null)).toBe(false);
  });

  test('lt(undefined, 1) should return false', () => {
    expect(lt(undefined, 1)).toBe(false);
  });

  test('lt(1, undefined) should return true', () => {
    expect(lt(1, undefined)).toBe(false);
  });

  test('lt(NaN, 1) should return false', () => {
    expect(lt(NaN, 1)).toBe(false);
  });

  test('lt(1, NaN) should return false', () => {
    expect(lt(1, NaN)).toBe(false);
  });
});
