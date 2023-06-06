import findLastKey from "../../../findLastKey.js";

describe("findLastKey", () => {
  test("should return the last key that satisfies the predicate condition", () => {
    const object = {
      a: { value: 1 },
      b: { value: 2 },
      c: { value: 3 },
      d: { value: 4 },
    };

    const predicate = ({ value }) => value % 2 === 0;

    expect(findLastKey(object, predicate)).toBe("d");
  });

  test("should return undefined if no keys satisfy the predicate condition", () => {
    const object = {
      a: { value: 1 },
      b: { value: 3 },
      c: { value: 5 },
      d: { value: 7 },
    };

    const predicate = ({ value }) => value % 2 === 0;

    expect(findLastKey(object, predicate)).toBeUndefined();
  });

  test("should return undefined for an empty object", () => {
    const object = {};

    const predicate = ({ value }) => value % 2 === 0;

    expect(findLastKey(object, predicate)).toBeUndefined();
  });

  test("should work with non-object properties", () => {
    const object = {
      a: "apple",
      b: "banana",
      c: "cherry",
      d: "durian",
    };

    const predicate = (value) => value[0] === "c";

    expect(findLastKey(object, predicate)).toBe("c");
  });
});
