import keysIn from '../../../keysIn.js';
describe('keysIn', () => {
  test('test with direct properties', () => {
    const input = { a: 1, b: 2, c: 3 };
    expect(keysIn(input)).toEqual(expect.arrayContaining(['a', 'b', 'c']));
  });

  test('test with inherited properties', () => {
    function Parent() {
      this.parentProp = 'parent';
    }

    function Child() {
      Parent.call(this);
      this.childProp = 'child';
    }

    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

    const instance = new Child();
    expect(keysIn(instance)).toEqual(expect.arrayContaining(['parentProp', 'childProp']));
  });

  test('test with empty object', () => {
    const input = {};
    expect(keysIn(input)).toEqual([]);
  });

  test('test with null input', () => {
    expect(keysIn(null)).toEqual([]);
  });

  test('test with undefined input', () => {
    expect(keysIn(undefined)).toEqual([]);
  });

  test('test with non-object input', () => {
    expect(keysIn(42)).toEqual([]);
  });

  test('test with array input', () => {
    const input = [1, 2, 3];
    expect(keysIn(input)).toEqual(expect.arrayContaining(['0', '1', '2']));
  });
});
