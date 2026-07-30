import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 text-sm font-bold transition-[background-color,border-color,box-shadow,transform] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a17] disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
  {
    variants: {
      variant: {
        primary:
          "border border-blue-300/30 bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_10px_35px_rgba(76,91,255,0.28)] hover:from-blue-500 hover:to-violet-500 hover:shadow-[0_14px_42px_rgba(76,91,255,0.38)] active:translate-y-px motion-reduce:active:translate-y-0",
        secondary:
          "border border-white/15 bg-white/[0.055] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-white/25 hover:bg-white/[0.09]",
        ghost:
          "border border-transparent bg-transparent px-3 text-slate-300 hover:bg-white/[0.06] hover:text-white",
      },
      size: {
        default: "h-11",
        large: "h-13 px-6 text-[0.9375rem]",
        compact: "h-10 min-h-10 px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);

Button.displayName = "Button";
