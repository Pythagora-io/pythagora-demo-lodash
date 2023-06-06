import transform from "../../../transform.js";

describe("transform function tests", () => {
  test("Should create a new object if accumulator is not provided", () => {
    const input = { a: 1, b: 2, c: 3 };
    const expectedOutput = { 1: "a", 2: "b", 3: "c" };

    const result = transform(input, (acc, value, key) => {
      acc[value] = key;
    });

    expect(result).toEqual(expectedOutput);
  });

  test("Should use provided accumulator object", () => {
    const input = { a: 1, b: 2, c: 3 };
    const accumulator = { 0: "init" };
    const expectedOutput = { 0: "init", 1: "a", 2: "b", 3: "c" };

    const result = transform(input, (acc, value, key) => {
      acc[value] = key;
    }, accumulator);

    expect(result).toEqual(expectedOutput);
  });

  test("Should work with arrays", () => {
    const input = [1, 2, 3];
    const expectedResult = [null, "a", "b", "c"];

    const result = transform(
      input,
      (accumulator, value) => {
        accumulator[value] = String.fromCharCode("a".charCodeAt(0) - 1 + value);
      },
      Array(4).fill(null)
    );

    expect(result).toEqual(expectedResult);
  });
});
