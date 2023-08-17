import type { MatcherState } from "@vitest/expect";

declare global {
  type MatcherUtils = MatcherState["utils"];
}
