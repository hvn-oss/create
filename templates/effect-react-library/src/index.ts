import { Effect } from "effect";

export const program = Effect.sync(() => "Hello, Effect!");
export { Button, type ButtonProps } from "./button.tsx";
