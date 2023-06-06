import functions from '../../../functions.js';

describe('functions', () => {
  test('returns function names from object instance', () => {
    function Foo() {
      this.a = () => 'a';
      this.b = () => 'b';
    }
    expect(functions(new Foo())).toEqual(['a', 'b']);
  });

  test('ignores prototype functions', () => {
    function Bar() {
      this.x = () => 'x';
    }
    Bar.prototype.y = () => 'y';
    expect(functions(new Bar())).not.toContain('y');
  });

  test('returns empty array for null input', () => {
    expect(functions(null)).toEqual([]);
  });

  test('returns empty array for undefined input', () => {
    expect(functions(undefined)).toEqual([]);
  });

  test('ignores non-function properties', () => {
    const obj = {
      a: 1,
      b: 'string',
      c: () => 'c'
    };
    expect(functions(obj)).toEqual(['c']);
  });

  test('handles empty object', () => {
    expect(functions({})).toEqual([]);
  });
});
