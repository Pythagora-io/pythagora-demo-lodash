import before from '../../../before.js'

describe('before', () => {
  test('should throw TypeError when func is not a function', () => {
    expect(() => before(2, null)).toThrow(TypeError);
  });

  test('function called less than n times, with the same "this" binding and arguments', () => {
    const func = jest.fn();
    const restrictedFunc = before(3, func);
    const obj = {};
    restrictedFunc.call(obj, 1, 2);
    restrictedFunc.call(obj, 1, 2);
    expect(func).toHaveBeenCalledTimes(2);
    expect(func).toHaveBeenCalledWith(1, 2);
    expect(func.mock.instances).toEqual([obj, obj]);
  });

  test('function not called after n times', () => {
    const func = jest.fn();
    const restrictedFunc = before(2, func);
    restrictedFunc();
    restrictedFunc();
    restrictedFunc();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test('return result of the last invocation after reaching n limit', () => {
    const func = jest.fn((x) => x * 2);
    const restrictedFunc = before(3, func);
    const result1 = restrictedFunc(2);
    const result2 = restrictedFunc(3);
    const result3 = restrictedFunc(4);
    const result4 = restrictedFunc(5);
    expect(result1).toBe(4);
    expect(result2).toBe(6);
    expect(result3).toBe(6);
    expect(result4).toBe(6);
  });

  test('with "n" as 0, should not invoke the function and return undefined', () => {
    const func = jest.fn((x) => x * 2);
    const restrictedFunc = before(0, func);
    const result = restrictedFunc(2);
    expect(func).not.toHaveBeenCalled();
    expect(result).toBeUndefined();
  });
});
