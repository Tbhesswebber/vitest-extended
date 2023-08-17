export function pass(_: any, message: any) {
  return {
    pass: true,
    message: () => (message ? message : "passes by .pass() assertion"),
  };
}
