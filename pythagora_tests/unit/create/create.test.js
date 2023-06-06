import create from '../../../create.js';
describe('create', () => {
  test('creates object with given prototype', () => {
    const prototype = { foo: 'bar' };
    const obj = create(prototype);

    expect(obj).toHaveProperty('foo', 'bar');
    expect(Object.getPrototypeOf(obj)).toBe(prototype);
  });

  test('assigns properties to the created object', () => {
    const prototype = { foo: 'bar' };
    const properties = { baz: 'qux' };
    const obj = create(prototype, properties);

    expect(obj).toHaveProperty('foo', 'bar');
    expect(obj).toHaveProperty('baz', 'qux');
  });

  test('created object inherits from given prototype', () => {
    const Shape = function () {
      this.x = 0;
      this.y = 0;
    };

    const Circle = function () {
      Shape.call(this);
    };

    Circle.prototype = create(Shape.prototype, {
      constructor: Circle,
    });

    const circle = new Circle();

    expect(circle.x).toBe(0);
    expect(circle.y).toBe(0);
    expect(circle.constructor.name).toBe('Circle');
    expect(circle instanceof Circle).toBe(true);
    expect(circle instanceof Shape).toBe(true);
  });

  test('handles null prototype', () => {
    const obj = create(null);
    expect(Object.getPrototypeOf(obj)).toBe(null);
  });
});
