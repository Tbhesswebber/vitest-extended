export function toBeDateString(actual: any) {
  const { matcherHint, printReceived } = this.utils;

  const pass = !isNaN(Date.parse(actual));

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeDateString", "received", "") +
          "\n\n" +
          "Expected value to not be a date string received:\n" +
          `  ${printReceived(actual)}`
        : matcherHint(".toBeDateString", "received", "") +
          "\n\n" +
          "Expected value to be a date string received:\n" +
          `  ${printReceived(actual)}`,
  };
}
