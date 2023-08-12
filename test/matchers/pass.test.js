import * as matcher from "src/matchers/pass";

expect.extend(matcher);

describe.skip(".pass", () => {
  test("passes without message", () => {
    expect().pass();
  });
  test("passes with message", () => {
    expect().pass("this should pass!");
  });
});

describe.skip(".not.pass", () => {
  test("does not pass, has no message", () => {
    expect(() => expect().not.pass()).toThrowErrorMatchingSnapshot();
  });
  test("does not.pass, has no message", () => {
    expect(() => expect().not.pass("This should not pass!")).toThrowErrorMatchingSnapshot();
  });
});
