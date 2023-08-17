export function toContainKeys(actual: any, expected: any) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = expected.every(
    (key: any) => actual && actual.hasOwnProperty && Object.prototype.hasOwnProperty.call(actual, key),
  );

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toContainKeys") +
          "\n\n" +
          "Expected object to not contain all keys:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toContainKeys") +
          "\n\n" +
          "Expected object to contain all keys:\n" +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`,
  };
}
