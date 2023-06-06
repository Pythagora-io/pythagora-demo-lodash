import uniqueId from '../../../uniqueId.js';
describe('uniqueId', () => {
  test('uniqueId should return an ID with the provided prefix', () => {
    const prefix = 'contact_';
    const id = uniqueId(prefix);
    expect(id.startsWith(prefix)).toBe(true);
  });

  test('uniqueId should return IDs with different prefixes', () => {
    const id1 = uniqueId('contact_');
    const id2 = uniqueId('customer_');
    expect(id1.substr(0, 7)).not.toBe(id2.substr(0, 8));
  });

  test('uniqueId should return an ID without a prefix when none is provided', () => {
    const id = uniqueId();
    expect(id.startsWith('$lodash$')).toBe(false);
    expect(id.includes('_')).toBe(false);
  });

  test('uniqueId should return a new ID for each subsequent call even with the same prefix', () => {
    const id1 = uniqueId('contact_');
    const id2 = uniqueId('contact_');
    expect(id1).not.toBe(id2);
  });

  test('uniqueId should return a new ID for each subsequent call without prefixes', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    expect(id1).not.toBe(id2);
  });

});
