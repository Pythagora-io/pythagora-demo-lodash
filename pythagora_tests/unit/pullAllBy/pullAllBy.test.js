import pullAllBy from "../../../pullAllBy.js";

describe("pullAllBy", () => {
  test("Test pullAllBy with empty array and values", () => {
    const array = [];
    const values = [];
    const result = pullAllBy(array, values, "x");
    expect(result).toEqual([]);
  });

  test("Test pullAllBy with valid array and empty values", () => {
    const array = [{ x: 1 }, { x: 2 }, { x: 3 }];
    const values = [];
    const result = pullAllBy(array, values, "x");
    expect(result).toEqual([{ x: 1 }, { x: 2 }, { x: 3 }]);
  });

  test("Test pullAllBy with custom iteratee function", () => {
    const array = [1, 2, 3, 11, 12, 13];
    const values = [1, 3, 11];
    const iteratee = (x) => x % 10;
    const result = pullAllBy(array, values, iteratee);
    expect(result).toEqual([2, 12]);
  });
});
