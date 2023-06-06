import escape from '../../../escape.js';
describe('escape', () => {
  test('should escape basic HTML characters', () => {
    expect(escape('fred, barney, & pebbles')).toBe('fred, barney, &amp; pebbles');
  });

  test('should escape multiple instances of HTML characters', () => {
    expect(escape('<div>"Hello & Welcome"</div>')).toBe('&lt;div&gt;&quot;Hello &amp; Welcome&quot;&lt;/div&gt;');
  });

  test('should return an empty string for an empty input', () => {
    expect(escape('')).toBe('');
  });

  test('should not alter strings with no HTML characters', () => {
    expect(escape('This is a test.')).toBe('This is a test.');
  });

  test('should correctly escape all HTML characters', () => {
    expect(escape('&<>"\'')).toBe('&amp;&lt;&gt;&quot;&#39;');
  });

  test('should return the same string when no HTML characters are present', () => {
    expect(escape('abc123')).toBe('abc123');
  });
});
