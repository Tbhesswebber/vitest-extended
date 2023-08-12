import * as matcher from "src/matchers/toEqualCaseInsensitive";

expect.extend(matcher);

describe.skip(".toEqualCaseInsensitive", () => {
  test("passes if strings are equal despite case", () => {
    expect("a").toEqualCaseInsensitive("A");
    expect("aaAA").toEqualCaseInsensitive("aaaa");
    expect("HELLO WORLD").toEqualCaseInsensitive("hello world");
    expect("hello world").toEqualCaseInsensitive("HELLO WORLD");
    expect(() => expect("aaaa").toEqualCaseInsensitive("bbbb")).toThrowErrorMatchingSnapshot();
  });
});

describe.skip(".not.toEqualCaseInsensitive", () => {
  test("fails if strings do not match", () => {
    expect("hello world").not.toEqualCaseInsensitive("hello");
    expect(() => expect("aaaa").not.toEqualCaseInsensitive("aaaa")).toThrowErrorMatchingSnapshot();
  });
});
