import replace from '../../../replace.js';

describe('replace', () => {
  test("replace('Hi Fred', 'Fred', 'Barney')", () => {
    expect(replace('Hi Fred', 'Fred', 'Barney')).toBe('Hi Barney');
  });

  test("replace('Hi Fred', /Fred/, 'Barney')", () => {
    expect(replace('Hi Fred', /Fred/, 'Barney')).toBe('Hi Barney');
  });

  test("replace('12345', /\d/g, 'x')", () => {
    expect(replace('12345', /\d/g, 'x')).toBe('xxxxx');
  });

  test("replace('abcdefg', /[aeiou]/g, '-')", () => {
    expect(replace('abcdefg', /[aeiou]/g, '-')).toBe('-bcd-fg');
  });

  test("replace('Hello World', 'World', function() { return 'Earth' })", () => {
    expect(replace('Hello World', 'World', function() { return 'Earth' })).toBe('Hello Earth');
  });

  test("replace('', 'Fred', 'Barney')", () => {
    expect(replace('', 'Fred', 'Barney')).toBe('');
  });

  test("replace('Hi Fred', '', 'Barney')", () => {
    expect(replace('Hi Fred', '', 'Barney')).toBe('BarneyHi Fred');
  });

  test("replace(undefined, 'Fred', 'Barney')", () => {
    expect(replace(undefined, 'Fred', 'Barney')).toBe('undefined');
  });

  test("replace(null, 'Fred', 'Barney')", () => {
    expect(replace(null, 'Fred', 'Barney')).toBe('null');
  });

  test("replace('Hi Fred', undefined, 'Barney')", () => {
    expect(replace('Hi Fred', undefined, 'Barney')).toBe('Hi Fred');
  });

  test("replace('Hi Fred', null, 'Barney')", () => {
    expect(replace('Hi Fred', null, 'Barney')).toBe('Hi Fred');
  });

  test("replace('Hi Fred', 'Fred', undefined)", () => {
    expect(replace('Hi Fred', 'Fred', undefined)).toBe('Hi undefined');
  });

  test("replace('Hi Fred', 'Fred', null)", () => {
    expect(replace('Hi Fred', 'Fred', null)).toBe('Hi null');
  });
});
