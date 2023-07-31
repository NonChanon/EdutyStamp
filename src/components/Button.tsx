import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { merge } from "../utils";
const buttonVariants = cva(
  "rounded border-[1.5px] border-primary bg-primary text-white",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        white: "bg-white text-primary",
        none: "border-none",
        center: "flex justify-center items-center",
      },
      size: {
        default: "w-[110px] h-[40px]",
        full: "w-full",
        square: "w-[40px] h-[40px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, ...props }, refBtn) => {
    return (
      <button
        ref={refBtn}
        className={merge(buttonVariants({ className, size, variant }))}
        {...props}
      />
    );
  }
);

export { Button, buttonVariants };
