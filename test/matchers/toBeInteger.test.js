import * as matcher from "src/matchers/toBeInteger";

expect.extend(matcher);

describe.skip(".toBeInteger", () => {
  test("passes when given integer", () => {
    expect(1).toBeInteger();
  });

  test("fails when given fraction", () => {
    expect(() => expect(1.5).toBeInteger()).toThrowErrorMatchingSnapshot();
  });
});

describe.skip(".not.toBeInteger", () => {
  test("passes when given fraction", () => {
    expect(1.5).not.toBeInteger();
  });

  test("fails when given integer", () => {
    expect(() => expect(1).not.toBeInteger()).toThrowErrorMatchingSnapshot();
  });
});
