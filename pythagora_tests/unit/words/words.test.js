import words from '../../../words.js';

describe('words', () => {
  test("('fred, barney, & pebbles')", () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  test("('fred, barney, & pebbles', /[^, ]+/g)", () => {
    expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  test("('', /[^, ]+/g)", () => {
    expect(words('', /[^, ]+/g)).toEqual([]);
  });

  test("('123abc')", () => {
    expect(words('123abc')).toEqual(['123', 'abc']);
  });

  test("('SnakeCase_Variables')", () => {
    expect(words('SnakeCase_Variables')).toEqual(['Snake', 'Case', 'Variables']);
  });

  test("('🍒🍌🍇🍓')", () => {
    expect(words('🍒🍌🍇🍓')).toEqual(['🍒','🍌','🍇','🍓']);
  });
});
