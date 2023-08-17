export function toBeEven(actual: any) {
  const { printReceived, matcherHint } = this.utils;

  const pass = isNumber(actual) && isEven(actual);

  return {
    pass,
    message: () =>
      pass
        ? matcherHint(".not.toBeEven", "received", "") +
          "\n\n" +
          "Expected value to not be an even number received:\n" +
          ` ${printReceived(actual)}`
        : matcherHint(".toBeEven", "received", "") +
          "\n\n" +
          "Expected value to be an even number received:\n" +
          ` ${printReceived(actual)}`,
  };
}

const isNumber = (expected: any) => !isNaN(parseInt(expected));
const isEven = (expected: any) => expected % 2 === 0;
