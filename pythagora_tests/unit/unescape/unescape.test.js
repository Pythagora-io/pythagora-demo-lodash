import unescape from '../../../unescape.js';

describe('unescape-tests', () => {
  test("unescape('&amp;')", () => {
    expect(unescape('&amp;')).toBe('&');
  });

  test("unescape('&lt;')", () => {
    expect(unescape('&lt;')).toBe('<');
  });

  test("unescape('&gt;')", () => {
    expect(unescape('&gt;')).toBe('>');
  });

  test("unescape('&quot;')", () => {
    expect(unescape('&quot;')).toBe('"');
  });

  test("unescape('&#39;')", () => {
    expect(unescape('&#39;')).toBe("'");
  });

  test("unescape('fred, barney, &amp; pebbles')", () => {
    expect(unescape('fred, barney, &amp; pebbles')).toBe('fred, barney, & pebbles');
  });

  test("unescape('')", () => {
    expect(unescape('')).toBe('');
  });

  test("unescape() | no parameter", () => {
    expect(unescape()).toBe('');
  });

  test("unescape('no_html_entities')", () => {
    expect(unescape('no_html_entities')).toBe('no_html_entities');
  });

  test("unescape('multiple &amp;&amp;&amp; entities')", () => {
    expect(unescape('multiple &amp;&amp;&amp; entities')).toBe('multiple &&& entities');
  });
});
