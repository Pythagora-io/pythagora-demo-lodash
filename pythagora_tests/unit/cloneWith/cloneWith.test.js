import cloneWith from '../../../cloneWith.js';
describe('cloneWith', () => {
  test('should return a cloned object when customizer is undefined', () => {

    const source = { a: 1, b: 2 };
    const cloned = cloneWith(source);

    expect(cloned).toEqual(source);
    expect(cloned).not.toBe(source);
  });

  test('should return a cloned object when customizer returns undefined', () => {
    const source = { a: 1, b: 2 };
    const customizer = jest.fn().mockReturnValue(undefined);
    const cloned = cloneWith(source, customizer);

    expect(cloned).toEqual(source);
    expect(cloned).not.toBe(source);
    expect(customizer).toHaveBeenCalledWith(source);
  });

  test('should return the customizer result when customizer returns a non-undefined value', () => {

    const source = { a: 1, b: 2 };
    const customizer = jest.fn().mockReturnValue({ c: 3 });
    const cloned = cloneWith(source, customizer);

    expect(cloned).toEqual({ c: 3 });
    expect(customizer).toHaveBeenCalledWith(source);
  });

  test('should return a cloned array when customizer is undefined', () => {
    const source = [1, 2, 3];
    const cloned = cloneWith(source);

    expect(cloned).toEqual(source);
    expect(cloned).not.toBe(source);
  });

  test('should return a cloned array when customizer returns undefined', () => {
    const source = [1, 2, 3];
    const customizer = jest.fn().mockReturnValue(undefined);
    const cloned = cloneWith(source, customizer);

    expect(cloned).toEqual(source);
    expect(cloned).not.toBe(source);
    expect(customizer).toHaveBeenCalledWith(source);
  });

  test('should return the customizer result when customizer returns a non-undefined value for array', () => {
    const source = [1, 2, 3];
    const customizer = jest.fn().mockReturnValue([4, 5]);
    const cloned = cloneWith(source, customizer);

    expect(cloned).toEqual([4, 5]);
    expect(customizer).toHaveBeenCalledWith(source);
  });

  test('should correctly clone nested objects and arrays', () => {
    const source = {
      a: {
        b: [1, 2, { c: 3 }],
      },
      d: 4,
    };
    const cloned = cloneWith(source);

    expect(cloned).toEqual(source);
    expect(cloned.a).toBe(source.a);
    expect(cloned.a.b).toBe(source.a.b);
    expect(cloned.a.b[2]).toBe(source.a.b[2]);
  });
});
