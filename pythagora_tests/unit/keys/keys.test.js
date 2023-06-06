import keys from '../../../keys.js';
describe('keys tests', () => {
  test('should return ["a", "b"] for new Foo()', () => {
    function Foo() {
      this.a = 1;
      this.b = 2;
    }

    Foo.prototype.c = 3;

    const result = keys(new Foo());

    expect(result).toHaveLength(2);
    expect(result).toContain('a');
    expect(result).toContain('b');
  });

  test('should return ["0", "1"] for "hi"', () => {
    const result = keys('hi');

    expect(result).toHaveLength(2);
    expect(result).toEqual(['0', '1']);
  });

  test('should return ["0", "1", "2"] for [1, 2, 3]', () => {
    const result = keys([1, 2, 3]);

    expect(result).toHaveLength(3);
    expect(result).toEqual(['0', '1', '2']);
  });

  test('should return empty array for Function', () => {
    const result = keys(Function);

    expect(result).toEqual([]);
  });

  test('should return keys of object with inherited properties', () => {
    function Parent() {
      this.parentProp = 'parentValue';
    }

    function Child() {
      this.childProp = 'childValue';
    }

    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;

    const obj = new Child();

    const result = keys(obj);

    expect(result).toHaveLength(1);
    expect(result).toContain('childProp');
  });
});
