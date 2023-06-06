import throttle from '../../../throttle.js';

describe('throttle', () => {
  test('func invoked at most once per wait time', () => {
    const mockFunc = jest.fn();
    const throttledFunc = throttle(mockFunc, 500);

    throttledFunc();
    throttledFunc();
    throttledFunc();

    jest.advanceTimersByTime(500);

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test('leading option invokes function on leading edge of timeout', () => {
    const mockFunc = jest.fn();
    const throttledFunc = throttle(mockFunc, 500, { leading: true });

    throttledFunc();

    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test('wait time of 0 works properly with leading option set to true', () => {
    const mockFunc = jest.fn();
    const throttledFunc = throttle(mockFunc, 0, { leading: true });

    throttledFunc();
    throttledFunc();
    throttledFunc();

    jest.advanceTimersByTime(0);

    expect(mockFunc).toHaveBeenCalledTimes(3);
  });
});
