import negate from '../../../negate.js';
describe('negate', () => {
  test('negate valid function', () => {
    const isEven = n => n % 2 === 0;
    const isOdd = negate(isEven);
    expect(isOdd(1)).toBeTruthy();
    expect(isOdd(2)).toBeFalsy();
  });

  test('negate with non-function input', () => {
    expect(() => negate(42)).toThrow(TypeError);
  });

  test('negate with function context', () => {
    function Person(name) {
      this.name = name;
      this.isEvenLength = function() {
        return this.name.length % 2 === 0;
      };
    }
    Person.prototype.isOddLength = negate(function() {
      return this.isEvenLength();
    });

    expect((new Person('John')).isOddLength()).toBeFalsy();
    expect((new Person('James')).isOddLength()).toBeTruthy();
  });
});
