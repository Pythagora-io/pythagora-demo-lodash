import cloneDeep from "../../../cloneDeep.js";

describe("cloneDeep test cases", () => {
  test("basic cloning", () => {
    const object = { a: 1, b: 2 };
    const clonedObject = cloneDeep(object);
    expect(clonedObject).toEqual(object);
    expect(clonedObject === object).toBe(false);
  });

  test("deep cloning for objects", () => {
    const object = { a: 1, b: { foo: "bar" } };
    const clonedObject = cloneDeep(object);
    expect(clonedObject).toEqual(object);
    expect(clonedObject === object).toBe(false);
    expect(clonedObject.b.foo).toEqual(object.b.foo);
    expect(clonedObject.b.foo === object.b.foo).toBe(true);
    expect(clonedObject.b === object.b).toBe(false);
  });

  test("cloning arrays", () => {
    const array = [["a", "b"], ["c", "d"]];
    const clonedArray = cloneDeep(array);
    expect(clonedArray).toEqual(array);
    expect(clonedArray === array).toBe(false);
    expect(clonedArray[0] === array[0]).toBe(false);
  });

  test("cloning Date object", () => {
    const date = new Date();
    const clonedDate = cloneDeep(date);
    expect(clonedDate).toEqual(date);
    expect(clonedDate === date).toBe(false);
    expect(clonedDate.getTime()).toEqual(date.getTime());
  });

  test("cloning Set", () => {
    const set = new Set(["a", "b"]);
    const clonedSet = cloneDeep(set);
    expect(clonedSet).toEqual(set);
    expect(clonedSet === set).toBe(false);
  });

  test("cloning Map", () => {
    const map = new Map([
      ["a", 1],
      ["b", 2],
    ]);
    const clonedMap = cloneDeep(map);
    expect(clonedMap).toEqual(map);
    expect(clonedMap === map).toBe(false);
  });

  test("cloning RegExp", () => {
    const regex = /foo/;
    const clonedRegex = cloneDeep(regex);
    expect(clonedRegex).toEqual(regex);
    expect(clonedRegex === regex).toBe(false);
  });

  test("cloning function should return empty object", () => {
    const func = function () {};
    const clonedFunc = cloneDeep(func);
    expect(clonedFunc).toEqual({});
  });
});
