import { Effect } from "effect";

export const program = Effect.gen(function* () {
  return yield* Effect.logInfo("Hello, World!");
});

Effect.runSync(program);
