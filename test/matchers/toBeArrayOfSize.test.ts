import * as matcher from "../../src/matchers/toBeArrayOfSize";

expect.extend(matcher);

describe(".toBeArrayOfSize", () => {
  {
    const size = 1;
    test(`passes when given an array of size 1, where size === ${size}`, () => {
      expect([size]).toBeArrayOfSize(size);
    });
  }
  {
    const size = 134;
    test(`passes when given an array of size 134, where size === ${size}`, () => {
      expect(Array(size)).toBeArrayOfSize(size);
    });
  }

  test("fails when given type which is not an array", () => {
    expect(() =>
      expect(false).toBeArrayOfSize(1)
    ).toThrowErrorMatchingSnapshot();
  });

  [
    [false],
    [true],
    [0],
    [{}],
    [(): void => undefined],
    [undefined],
    [null],
    [NaN],
  ].forEach(([given]) => {
    test("fails when given type of %s which is not an array", (config) => {
      config
        .expect(() => expect(given).toBeArrayOfSize(1))
        .toThrowErrorMatchingSnapshot();
    });
  });

  test("fails when not given an array", (config) => {
    config
      .expect(() => expect(undefined).toBeArrayOfSize(5))
      .toThrowErrorMatchingSnapshot();
  });

  test("fails when not given a parameter", (config) => {
    config
      // @ts-expect-error - testing outside of TS boundaries
      .expect(() => expect([1]).toBeArrayOfSize())
      .toThrowErrorMatchingSnapshot();
  });

  test("fails when given neither a parameter nor an array", (config) => {
    config
      // @ts-expect-error - testing outside of TS boundaries
      .expect(() => expect().toBeArrayOfSize())
      .toThrowErrorMatchingSnapshot();
  });
});

describe(".not.toBeArrayOfSize", () => {
  test.each([false, true, 0, {}, (): void => undefined, undefined, null, NaN])(
    "passes when not given an array: %s",
    (given) => {
      expect(given).not.toBeArrayOfSize(2);
    }
  );
  {
    const size = 0;
    test(`fails when given an array of size ${size}`, (config) => {
      config
        .expect(() => expect([]).not.toBeArrayOfSize(size))
        .toThrowErrorMatchingSnapshot();
    });
  }
});
