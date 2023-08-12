import * as fs from "fs";
import * as path from "path";
import * as matchers from "src/matchers/index";

expect.extend(matchers);

// This does not test all matchers, just couple random ones to check
// if imports work correctly.

describe.skip("positive matcher", () => {
  test(".toBeEven", () => {
    expect(2).toBeEven();
  });
});

describe.skip("negative matcher", () => {
  test(".not.toBeWithin", () => {
    expect(1).not.toBeWithin(10, 20);
  });
});

describe.skip("asymmetric matchers", () => {
  describe.skip("positive matchers", () => {
    test(".toSatisfy", () => {
      expect(4).toEqual(expect.toSatisfy(num => num === 4));
    });

    test(".toEqual", () => {
      expect([]).toEqual(expect.toBeArray());
    });
  });

  describe.skip("negative matchers", () => {
    test("not.toInclude", () => {
      const data = "bob";
      expect(data).not.toEqual(expect.toInclude("alice"));
      expect(data).toEqual(expect.not.toInclude("alice"));
    });

    test("not.toContainKey", () => {
      const data = { hello: "world" };
      expect(data).not.toEqual(expect.toContainKey("foo"));
      expect("bob").toEqual(expect.not.toInclude("foo"));
    });
  });
});

describe.skip("all matchers", () => {
  test("must be exported", () => {
    const directories = fs.readdirSync(path.join(__dirname, "../../src/matchers")).filter(n => n !== "index.js");
    const namedMatchers = Object.keys(matchers);

    try {
      expect(namedMatchers).toHaveLength(directories.length);
    } catch (error) {
      const missing = new Set(directories.filter(dir => !namedMatchers.includes(dir)));
      console.error("Missing", missing);
      throw error;
    }
  });

  describe.skip("must be functions", () => {
    test.each(Object.entries(matchers))("%s", (_, matcher) => {
      expect(typeof matcher).toBe("function");
    });
  });
});
