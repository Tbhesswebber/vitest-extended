import * as matchers from "../matchers";

if (
  "expect" in global &&
  typeof global.expect === "function" &&
  "extend" in global.expect &&
  typeof global.expect.extend === "function"
) {
  global.expect.extend(matchers);
} else {
  throw new Error(
    "Unable to find Vitest's global expect. " +
      "Please check you have added vitest-extended correctly to your vitest configuration. " +
      "See https://github.com/tbhesswebber/vitest-extended#setup for help.",
  );
}
