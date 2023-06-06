import sum from "../../../sum.js";

describe("sum test suite", () => {
  test("sum of valid array with positive integers", () => {
    expect(sum([1, 2, 3])).toBe(6);
  });

  test("sum of valid array with negative integers", () => {
    expect(sum([-1, -2, 3])).toBe(0);
  });

  test("sum of valid array with floating point numbers", () => {
    expect(sum([1.5, 2.5])).toBe(4);
  });

  test("sum of valid array with mixed numbers", () => {
    expect(sum([1, -1, 2, 0.5])).toBe(2.5);
  });

  test("sum of empty array", () => {
    expect(sum([])).toBe(0);
  });

  test("sum of null input", () => {
    expect(sum(null)).toBe(0);
  });

  test("sum of undefined input", () => {
    expect(sum(undefined)).toBe(0);
  });
});