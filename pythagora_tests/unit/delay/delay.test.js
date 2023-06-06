import delay from '../../../delay.js';
describe("delay", () => {
  jest.useFakeTimers();

  test("callback function is called with provided arguments after given milliseconds", () => {
    const callback = jest.fn();
    const args = [1, 2, 3];
    const wait = 1000;

    delay(callback, wait, ...args);

    jest.advanceTimersByTime(wait);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(...args);
  });

  test("callback function is called with default 0 wait if no wait is provided", () => {
    const callback = jest.fn();
    const args = [1, 2, 3];

    delay(callback, undefined, ...args);

    jest.advanceTimersByTime(0);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(...args);
  });

  test("throws TypeError exception if called without a function", () => {
    const notAFunction = "notAFunction";
    const wait = 1000;

    expect(() => {
      delay(notAFunction, wait);
    }).toThrow(TypeError);
  });
});

