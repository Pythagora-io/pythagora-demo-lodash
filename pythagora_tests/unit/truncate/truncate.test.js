import truncate from '../../../truncate.js';

describe('truncate', () => {
  test("truncate('hi-diddly-ho there, neighborino')", () => {
    expect(truncate('hi-diddly-ho there, neighborino')).toEqual('hi-diddly-ho there, neighbo...');
  });
  test("truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': ' ' })", () => {
    expect(truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': ' ' })).toEqual('hi-diddly-ho there,...');
  });
  test("truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': /,? +/ })", () => {
    expect(truncate('hi-diddly-ho there, neighborino', { 'length': 24, 'separator': /,? +/ })).toEqual('hi-diddly-ho there...');
  });
  test("truncate('hi-diddly-ho there, neighborino', { 'omission': ' [...]'})", () => {
    expect(truncate('hi-diddly-ho there, neighborino', { 'omission': ' [...]'})).toEqual('hi-diddly-ho there, neig [...]');
  });
  test("truncate('', { 'length': 5 })", () => {
    expect(truncate('', { 'length': 5 })).toEqual('');
  });
  test("truncate('short text', { 'length': 5 })", () => {
    expect(truncate('short text', { 'length': 5 })).toEqual('sh...');
  });
  test("truncate('very very long text that should exceed any reasonable limit for a single identifier without causing any stack overflows or other sorts of issues', { 'length': 5 })", () => {
    expect(truncate('very very long text that should exceed any reasonable limit for a single identifier without causing any stack overflows or other sorts of issues', { 'length': 5 })).toEqual('ve...');
  });
  test("truncate('0123456789', { 'length': 5 })", () => {
    expect(truncate('0123456789', { 'length': 5 })).toEqual('01...');
  });
});
