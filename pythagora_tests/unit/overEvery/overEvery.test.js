import overEvery from "../../../overEvery.js";
import every from "../../../every.js";

describe("overEvery", () => {
  test("should return a function", () => {
    const func = overEvery([]);
    expect(typeof func).toBe("function");
  });

  test("should work with empty predicates array", () => {
    const func = overEvery([]);
    expect(func(1)).toBe(true);
  });

  test("should work with one predicate", () => {
    const func = overEvery([Number.isInteger]);
    expect(func(1)).toBe(true);
    expect(func(1.5)).toBe(false);
  });

  test("should work with multiple predicates", () => {
    const func = overEvery([Number.isInteger, (n) => n > 0]);
    expect(func(1)).toBe(true);
    expect(func(-1)).toBe(false);
    expect(func(1.5)).toBe(false);
  });

  test("should work with multiple predicates and different types of arguments", () => {
    const func = overEvery([
      (arg) => typeof arg === "string",
      (arg) => arg.length > 2,
    ]);
    expect(func("hello")).toBe(true);
    expect(func("hi")).toBe(false);
    expect(func(123)).toBe(false);
  });

  test("should return the correct result with every", () => {
    const checkEven = (n) => n % 2 === 0;
    const numbers = [2, 4, 6];
    const func = overEvery([checkEven]);
    const expectedResult = every(numbers, checkEven);
    const result = func(...numbers);
    expect(result).toBe(expectedResult);
  });
});
