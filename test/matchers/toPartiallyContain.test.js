import * as matcher from "src/matchers/toPartiallyContain";

expect.extend(matcher);

describe.skip(".toPartiallyContain", () => {
  const item = { foo: "bar", baz: "qux" };

  test("passes when a string has a given substring", () => {
    expect([{ foo: "bar", baz: "qux", bax: "zax" }]).toPartiallyContain(item);
  });

  test("fails when a string does not have a given substring", () => {
    expect(() => expect([{ a: 1, b: 2 }]).toPartiallyContain(item)).toThrowErrorMatchingSnapshot();
  });

  describe.skip(".not.toPartiallyContain", () => {
    test("passes when a string does not have a given substring", () => {
      expect([{ a: 1, b: 2 }]).not.toPartiallyContain(item);
    });

    test("fails when a string does have a given substring", () => {
      expect(() =>
        expect([{ foo: "bar", baz: "qux", bax: "zax" }]).not.toPartiallyContain(item),
      ).toThrowErrorMatchingSnapshot();
    });
  });
});
