# Lodash fork with Pythagora tests

If you want to try it out yourself, just clone the repo and run:
```bash
npm i
npx jest ./pythagora_tests/
```

## Bugs that Pythagora tests caught:

### Edge cases
1. `size` gets tricked if there is an object with a `length` property:
    ```javascript
    test(`size({ 'a': 1, 'b': 2, 'length': 9 })`, () => {
      expect(size({ 'a': 1, 'b': 2, 'length': 9 })).toBe(3); // lodash returns 9
    });
    ```

2. `matches` fails when a `Symbol` is used as a key
    ```javascript
    test('should fail for non-matching objects with symbols', () => {
      const symbolA = Symbol('a');
      const symbolB = Symbol('b');
      const matchesFunc = matches({ [symbolA]: 1, [symbolB]: 2 });
      expect(matchesFunc({ [symbolA]: 1, [symbolB]: 5 })).toBeFalsy(); // lodash returns true
    });
    ```

3. `mean` doesn't work when strings are passed into it:
    ```javascript
    test('test mean with values as strings', () => {
      expect(mean(["5", "6", "7"])).toEqual(6); // lodash returns 189
    });
   ```
---

### Bugs that are in the master but not in the live Lodash version
1. `forOwnRight` doesn't add to array as intended:
    ```javascript
    test('should call iteratee in reverse order', () => {
      const Foo = function() {
        this.a = 1;
        this.b = 2;
      };

      Foo.prototype.c = 3;

      const result = [];
      const iteratee = (value, key) => {
        result.push(key);
      }

      forOwnRight(new Foo, iteratee);

      expect(result).toEqual(['b', 'a']);
    });
    ```

2. `orderBy`
    ```javascript
    test('users with custom compare functions', () => {
      const output = orderBy(users, ['user', 'age'], [
        (a, b) => a.localeCompare(b, 'de', { sensitivity: 'base' }),
        (a, b) => a - b,
      ]);
      expect(output).toHaveLength(users.length);
      expect(_.isEqual(output, [
        { 'user': 'barney', 'age': 34 },
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred', 'age': 40 },
        { 'user': 'fred', 'age': 48 }
      ])).toBe(true); // lodash returns false
    });

    test('users', () => {
      const output = orderBy(users, ['user', 'age'], ['asc', 'desc']);
      expect(output).toHaveLength(users.length);
      expect(_.isEqual(output, [
        { 'user': 'barney', 'age': 36 },
        { 'user': 'barney', 'age': 34 },
        { 'user': 'fred', 'age': 48 },
        { 'user': 'fred', 'age': 40 }
      ])).toBe(true); // lodash returns false
    });
    ```

3. `pick`
    ```javascript
    test('pick({"a": 1, "b": "2", "c": 3}, ["a", "c"])', () => {
      expect(pick({"a": 1, "b": "2", "c": 3}, ["a", "c"])).toEqual({"a": 1, "c": 3}); // lodash returns false
    });

    test('pick({"a": 1, "b": {"c": 2, "d": 3}}, ["b.c"])', () => {
      expect(pick({"a": 1, "b": {"c": 2, "d": 3}}, ["b.c"])).toEqual({"b": {"c": 2}}); // lodash returns false
    });

    test('pick({"a": 1, "b": "2", "c": 3}, ["a", "c", "d"])', () => {
      expect(pick({"a": 1, "b": "2", "c": 3}, ["a", "c", "d"])).toEqual({"a": 1, "c": 3}); // lodash returns false
    });
    ```

4. `zipWith`
    ```javascript
    test('3', () => {
      expect(zipWith([1, 2, 3], [4, 5, 6])).toEqual([[1, 4], [2, 5], [3, 6]]); // lodash returns false
    });

    test('5', () => {
      expect(zipWith([1, 2], [3, 4])).toEqual([[1, 3], [2, 4]]); // lodash returns false
    });

    test('6', () => {
      expect(zipWith([1, 2])).toEqual([[1], [2]]); // lodash returns false
    });
    ```

5. `update`
    ```javascript
    test('3', () => {
      const object = { a: [{ b: { c: 3 } }] };
      update(object, 'x[0].y.z', n => (n ? n + 1 : 0));
      expect(object).toEqual({ a: [{ b: { c: 3 } }], x: [{ y: { z: 0 } }] }); // lodash returns false
    });
   ```
