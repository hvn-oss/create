import type { ComponentPropsWithoutRef, ReactElement } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps): ReactElement {
  return (
    <button data-variant={variant} type={type} {...props}>
      {children}
    </button>
  );
}
