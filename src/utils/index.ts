import { SpyInstance } from "vitest";

export function contains<TItem>(
  equals: (item: TItem, value: unknown) => boolean,
  list: TItem[],
  value: unknown
) {
  return list.findIndex((item) => equals(item, value)) > -1;
}

export function determinePropertyMessage(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  actual: any,
  property: string | number | symbol,
  message = "Not Accessible"
) {
  return actual && Object.hasOwnProperty.call(actual, property)
    ? actual[property]
    : message;
}

export function isVitestMockOrSpy(value: unknown): value is SpyInstance {
  return !!(
    value &&
    (value as SpyInstance).mock &&
    typeof (value as SpyInstance).mock === "object"
  );
}

export function containsEntry(
  equals: (sourceValue: unknown, value: unknown) => boolean,
  obj: Record<string | number | symbol, unknown>,
  [key, value]: [string | symbol | number, unknown]
): boolean {
  return (
    obj.hasOwnProperty &&
    Object.prototype.hasOwnProperty.call(obj, key) &&
    equals(obj[key], value)
  );
}
