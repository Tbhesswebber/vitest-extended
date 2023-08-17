export function fail(_: any, message: any) {
  return {
    pass: false,
    message: () => (message ? message : "fails by .fail() assertion"),
  };
}
