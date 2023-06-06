import get from '../../../get.js';
import baseGet from '../../../.internal/baseGet.js';

describe('get', () => {
  test('get(object, "a[0].b.c")', () => {
    expect(get({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c')).toBe(3);
  });

  test('get(object, ["a", "0", "b", "c"])', () => {
    expect(get({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('get(object, "a.b.c", "default")', () => {
    expect(get({ 'a': [{ 'b': { 'c': 3 } }] }, 'a.b.c', 'default')).toBe('default');
  });

  test('get(null, "a[0].b.c", "default")', () => {
    expect(get(null, 'a[0].b.c', 'default')).toBe('default');
  });

  test('get(object, "", "default")', () => {
    expect(get({ 'a': [{ 'b': { 'c': 3 } }] }, '', 'default')).toBe('default');
  });

  test('get(object, "a[0].b.c", null)', () => {
    expect(get({ 'a': [{ 'b': { 'c': null } }] }, 'a[0].b.c', null)).toBe(null);
  });

  test('get(object, null, "default")', () => {
    expect(get({ 'a': [{ 'b': { 'c': 3 } }] }, null, 'default')).toBe('default');
  });

  test('baseGet(object, "a[0].b.c")', () => {
    expect(baseGet({ 'a': [{ 'b': { 'c': 3 } }] }, 'a[0].b.c')).toBe(3);
  });

  test('baseGet(object, ["a", "0", "b", "c"])', () => {
    expect(baseGet({ 'a': [{ 'b': { 'c': 3 } }] }, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('baseGet(object, "a.b.c")', () => {
    expect(baseGet({ 'a': [{ 'b': { 'c': 3 } }] }, 'a.b.c')).toBe(undefined);
  });

  test('baseGet(null, "a[0].b.c")', () => {
    expect(baseGet(null, 'a[0].b.c')).toBe(undefined);
  });

  test('baseGet(object, "")', () => {
    expect(baseGet({ 'a': [{ 'b': { 'c': 3 } }] }, '')).toBe(undefined);
  });

  test('baseGet(object, null)', () => {
    expect(baseGet({ 'a': [{ 'b': { 'c': 3 } }] }, null)).toBe(undefined);
  });
});