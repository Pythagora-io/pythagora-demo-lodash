import defaultTo from '../../../defaultTo.js';
describe("Tests for defaultTo function", () => {
  test("Test with value and default value", () => {
    expect(defaultTo(1, 10)).toBe(1);
  });

  test("Test with undefined value and default value", () => {
    expect(defaultTo(undefined, 10)).toBe(10);
  });

  test("Test with null value and default value", () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test("Test with NaN value and default value", () => {
    expect(defaultTo(NaN, 10)).toBe(10);
  });

  test("Test with empty string value and default value", () => {
    expect(defaultTo("", 10)).toBe("");
  });

  test("Test with false boolean value and default value", () => {
    expect(defaultTo(false, 10)).toBe(false);
  });

  test("Test with 0 value and default value", () => {
    expect(defaultTo(0, 10)).toBe(0);
  });

  test("Test with empty object value and default value", () => {
    expect(defaultTo({}, 10)).toStrictEqual({});
  });

  test("Test with empty array value and default value", () => {
    expect(defaultTo([], 10)).toStrictEqual([]);
  });

  test("Test with non-empty array value and default value", () => {
    expect(defaultTo([1, 2, 3], 10)).toStrictEqual([1, 2, 3]);
  });

  test("Test with non-empty object value and default value", () => {
    expect(defaultTo({ a: 1, b: 2 }, 10)).toStrictEqual({ a: 1, b: 2 });
  });

  test("Test with function value and default value", () => {
    const func = () => "test";
    expect(defaultTo(func, 10)).toBe(func);
  });
});
