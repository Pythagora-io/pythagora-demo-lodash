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
    // _.size should return the size of an object which is this case should be 3
    // but it returns 9
    test(`size({ 'a': 1, 'b': 2, 'length': 9 })`, () => {
      expect(size({ 'a': 1, 'b': 2, 'length': 9 })).toBe(3); // test returns 9
    });
    ```

2. `matches` fails when a `Symbol` is used as a key
    ```javascript
    // { [symbolA]: 1, [symbolB]: 2 } should be different from { [symbolA]: 1, [symbolB]: 5 }
    // so expected result is false but lodash returns true
    test('should fail for non-matching objects with symbols', () => {
      const symbolA = Symbol('a');
      const symbolB = Symbol('b');
      const matchesFunc = matches({ [symbolA]: 1, [symbolB]: 2 });
      expect(matchesFunc({ [symbolA]: 1, [symbolB]: 5 })).toBeFalsy(); // test returns true
    });
    ```

3. `mean` doesn't work when strings are passed into it:
    ```javascript
    // Lodash docs say that _.mean "Computes the mean of the values in array."
    // it doesn't specify that you should send an array of numbers
    // and if you send strings, it doesn't throw an error either
    // rather, it returns a number but a wrong one
    test('test mean with values as strings', () => {
      expect(mean(["5", "6", "7"])).toEqual(6); // test returns 189
    });
   ```
---

### Bugs that are in the `master` branch
P.S. The following bugs are NOT in the latest version of Lodash (4.17.15) but only in the `master` branch that is 400 commits in front of the branch `4.17`. I'm not sure how Lodash team works with the `master` branch so don't want to come across negatively towards them if they have other workflows that allow master branch to be unstable. This is just to showcase bugs that Pythagora is able to detect.
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

      // `result` should be ['b', 'a'] while in the test it's [[Function iteratee], [Function iteratee]]
      expect(result).toEqual(['b', 'a']);
    });
    ```

2. `orderBy`
    ```javascript
    test('users with custom compare functions', () => {
      const output = orderBy(users, ['user', 'age'], [
        (a, b) => a.localeCompare(b, 'de', { sensitivity: 'base' }),
        (a, b) => a - b,
      ]); // error is thrown here
      expect(output).toHaveLength(users.length);
      expect(_.isEqual(output, [
        { 'user': 'barney', 'age': 34 },
        { 'user': 'barney', 'age': 36 },
        { 'user': 'fred', 'age': 40 },
        { 'user': 'fred', 'age': 48 }
      ])).toBe(true);
    });

    // docs say that iteratee should be type string[]
    // but in this test, it throws an error `TypeError: iteratee is not a function` on the first line
    // there is acually the same example in the docs
    test('users', () => {
      const output = orderBy(users, ['user', 'age'], ['asc', 'desc']); // error is thrown here
      expect(output).toHaveLength(users.length);
      expect(_.isEqual(output, [
        { 'user': 'barney', 'age': 36 },
        { 'user': 'barney', 'age': 34 },
        { 'user': 'fred', 'age': 48 },
        { 'user': 'fred', 'age': 40 }
      ])).toBe(true);
    });
    ```

3. `pick`
    ```javascript
    // Test should return `{"a": 1, "c": 3}` but it returns `{}`
    test('pick({"a": 1, "b": "2", "c": 3}, ["a", "c"])', () => {
      expect(pick({"a": 1, "b": "2", "c": 3}, ["a", "c"])).toEqual({"a": 1, "c": 3}); // test returns false
    });

    // Test should return `{"b":{"c":2}}` but it returns `{}`
    test('pick({"a": 1, "b": {"c": 2, "d": 3}}, ["b.c"])', () => {
      expect(pick({"a": 1, "b": {"c": 2, "d": 3}}, ["b.c"])).toEqual({"b": {"c": 2}}); // test returns false
    });

    // Test should return `{"a": 1, "c": 3}` but it returns `{}`
    test('pick({"a": 1, "b": "2", "c": 3}, ["a", "c", "d"])', () => {
      expect(pick({"a": 1, "b": "2", "c": 3}, ["a", "c", "d"])).toEqual({"a": 1, "c": 3}); // test returns false
    });
    ```

4. `zipWith` fails when there is no iteratee defined:
    ```javascript
    // Test should return `[[1,4],[2,5],[3,6]]` but it throws an error `Cannot read properties of undefined (reading 'apply')`
    test('3', () => {
      expect(zipWith([1, 2, 3], [4, 5, 6])).toEqual([[1, 4], [2, 5], [3, 6]]); // test returns false
    });

    // Test should return `[[1,3],[2,4]]` but it throws an error `Cannot read properties of undefined (reading 'apply')`
    test('5', () => {
      expect(zipWith([1, 2], [3, 4])).toEqual([[1, 3], [2, 4]]); // test returns false
    });

    // Test should return `[[1],[2]]` but it throws an error `Cannot read properties of undefined (reading 'apply')`
    test('6', () => {
      expect(zipWith([1, 2])).toEqual([[1], [2]]); // test returns false
    });
    ```

5. `update`
    ```javascript
    // `update` variable in this test should be `{"a":[{"b":{"c":3}}],"x":[{"y":{"z":0}}]}`
    // but instead it is `{"a":[{"b":{"c":3}}],"x":[{"y":{}}]}` - missing the `z` property
    test('3', () => {
      const object = { a: [{ b: { c: 3 } }] };
      update(object, 'x[0].y.z', n => (n ? n + 1 : 0));
      expect(object).toEqual({ a: [{ b: { c: 3 } }], x: [{ y: { z: 0 } }] }); // test returns false
    });
   ```
