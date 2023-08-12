---
sidebar_position: 2
---

# Setup

:::caution
`vitest-extended` only supports Vitest version `0.32.0` and newer. If you're using an older version of Vitest, feel free to make a pull request.
:::

## Basic Setup

If you only need to setup `vitest-extended`, simply update your Vitest configuration to include `"vitest-extended/all"` in the `setupFiles` property

```typescript title="vite.config.ts"
export default defineConfig({
  test: {
    setupFiles: ["vitest-extended/all"],
  },
});
```

## With A Setup File

Create a setup script with the following:

```typescript title="testSetup.ts"
// add all jest-extended matchers
import "vitest-extended/all";

// or just add specific matchers
import { toBeArray, toBeSealed } from "vitest-extended";
expect.extend({ toBeArray, toBeSealed });
```

Add your setup script to your Vitest `setupFiles` configuration. [See for help](https://vitest.dev/config/#setupfiles)

```typescript title="vite.config.ts"
export default defineConfig({
  test: {
    setupFiles: ["./testSetup.js"],
  },
});
```
