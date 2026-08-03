import { Effect } from "effect";
import { describe, expect, it } from "@effect/vitest";
import { program } from "#/index.ts";

describe("sample", () => {
  // Effect test - returns Effect
  it.effect("program", () =>
    Effect.gen(function* () {
      const result = yield* program;
      expect(result).toBe("Hello, Effect!");
    }),
  );
});
