import gte from '../../../gte.js';
describe("gte tests", () => {
  test("gte(3, 1) should be true", () => {
    expect(gte(3, 1)).toBe(true);
  });

  test("gte(3, 3) should be true", () => {
    expect(gte(3, 3)).toBe(true);
  });

  test("gte(1, 3) should be false", () => {
    expect(gte(1, 3)).toBe(false);
  });

  test("gte('3', '1') should be true", () => {
    expect(gte('3', '1')).toBe(true);
  });

  test("gte('3', '3') should be true", () => {
    expect(gte('3', '3')).toBe(true);
  });

  test("gte('1', '3') should be false", () => {
    expect(gte('1', '3')).toBe(false);
  });

  test("gte(undefined, 1) should be false", () => {
    expect(gte(undefined, 1)).toBe(false);
  });

  test("gte(null, 1) should be false", () => {
    expect(gte(null, 1)).toBe(false);
  });

  test("gte(1, null) should be true", () => {
    expect(gte(1, null)).toBe(true);
  });

  test("gte(-1, -2) should be true", () => {
    expect(gte(-1, -2)).toBe(true);
  });

  test("gte(-2, -1) should be false", () => {
    expect(gte(-2, -1)).toBe(false);
  });

  test("gte(0, -1) should be true", () => {
    expect(gte(0, -1)).toBe(true);
  });

  test("gte(-1, 0) should be false", () => {
    expect(gte(-1, 0)).toBe(false);
  });

  test("gte(0, 0) should be true", () => {
    expect(gte(0, 0)).toBe(true);
  });

  test("gte(0.1, 0.2) should be false", () => {
    expect(gte(0.1, 0.2)).toBe(false);
  });

  test("gte(0.2, 0.1) should be true", () => {
    expect(gte(0.2, 0.1)).toBe(true);
  });

  test("gte(NaN, 1) should be false", () => {
    expect(gte(NaN, 1)).toBe(false);
  });

});
