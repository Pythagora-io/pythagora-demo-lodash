import clone from '../../../clone.js';
describe('clone', () => {
  test('should clone plain objects', () => {
    const object = { a: 1, b: 2 };
    const actual = clone(object);
    expect(actual).toEqual(object);
    expect(actual !== object).toBeTruthy();
  });

  test('should clone arrays', () => {
    const array = [1, 2, 3];
    const actual = clone(array);
    expect(actual).toEqual(array);
    expect(actual !== array).toBeTruthy();
  });

  test('should clone non-array-buffer typed arrays', () => {
    const object = { a: new Uint8Array(8) };
    const actual = clone(object);
    expect(actual.a).toBeInstanceOf(Uint8Array);
    expect(actual !== object).toBeTruthy();
    expect(actual.a.buffer === object.a.buffer).toBeTruthy();
  });

  test('should clone array buffers', () => {
    if (ArrayBuffer) {
      const buffer = new ArrayBuffer(8);
      const array = new Uint8Array(buffer);
      const actual = clone(buffer);
      expect(actual).toBeInstanceOf(ArrayBuffer);
      expect(actual !== buffer).toBeTruthy();
      expect(actual.byteLength).toEqual(array.byteLength);
    }
  });

  test('should clone data views', () => {
    if (DataView) {
      const buffer = new ArrayBuffer(8);
      const view = new DataView(buffer);
      const actual = clone(view);
      expect(actual).toBeInstanceOf(DataView);
      expect(actual.buffer === view.buffer).toBeTruthy();
      expect(actual.byteLength).toEqual(view.byteLength);
      expect(actual.byteOffset).toEqual(view.byteOffset);
    }
  });

  test('should clone regexes', () => {
    const object = /x/g;
    const actual = clone(object);
    expect(actual).toEqual(object);
    expect(actual !== object).toBeTruthy();
    expect(actual.source).toEqual(object.source);
    expect(actual.global).toEqual(object.global);
  });

  test('should clone strings', () => {
    const object = 'abc';
    const actual = clone(object);
    expect(actual).toEqual(object);
    expect(actual === object).toBeTruthy();
  });
});
