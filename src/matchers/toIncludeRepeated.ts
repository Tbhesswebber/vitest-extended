export function toIncludeRepeated(actual: any, expected: any, occurrences: any) {
  const { printReceived, printExpected, matcherHint } = this.utils;

  const pass = (actual.match(new RegExp(expected, "g")) || []).length === occurrences;

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toIncludeRepeated") +
          "\n\n" +
          `Expected string to not include repeated ${occurrences} times:\n` +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toIncludeRepeated") +
          "\n\n" +
          `Expected string to include repeated ${occurrences} times:\n` +
          `  ${printExpected(expected)}\n` +
          "Received:\n" +
          `  ${printReceived(actual)}`,
  };
}
