---
sidebar_position: 3
---

# Typescript

If your editor does not recognise the custom `vitest-extended` matchers, add a `global.d.ts` file to your project with:

```ts
import "vitest-extended";
```

Also note that when adding this for the first time this affects which files are compiled by the TypeScript compiler and you might need to add the `include` property as well. See the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for more details.

If the above import syntax does not work, replace it with the following:

```ts
/// <reference types="vitest-extended" />
```

:::info
An example of project with Typescript globally setup can be found [here](https://github.com/tbhesswebber/vitest-extended/tree/main/examples/typescript/all).
:::
