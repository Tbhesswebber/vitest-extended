import { contains } from "../utils";

export function toContainAnyValues(actual: any, expected: any) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const objectValues = Object.keys(actual).map(k => actual[k]);
  const pass = expected.some((value: any) => contains(this.equals, objectValues, value));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toContainAnyValues") +
          "\n\n" +
          "Expected object to not contain any of the following values:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toContainAnyValues") +
          "\n\n" +
          "Expected object to contain any of the following values:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`,
  };
}
