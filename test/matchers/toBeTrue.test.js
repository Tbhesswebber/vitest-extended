import * as matcher from "src/matchers/toBeTrue";

expect.extend(matcher);

describe.skip(".toBeTrue", () => {
  test("passes when given true", () => {
    expect(true).toBeTrue();
  });

  test("fails when not given true", () => {
    expect(() => expect(false).toBeTrue()).toThrowErrorMatchingSnapshot();
  });
});

describe.skip(".not.toBeTrue", () => {
  test.each([[false], [""], [0], [{}], [[]], [() => {}], [undefined], [null], [NaN]])(
    "passes when not given true: %s",
    given => {
      expect(given).not.toBeTrue();
    },
  );

  test("fails when given true", () => {
    expect(() => expect(true).not.toBeTrue()).toThrowErrorMatchingSnapshot();
  });
});
