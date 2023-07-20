import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { merge } from "../utils";
const buttonVariants = cva("rounded-lg border-[2px] text-primary font-bold", {
  variants: {
    variant: {
      default: "bg-primary text-white border-primary",
      white: "bg-white text-primary border-primary",
    },
    size: {
      default: "w-[130px] h-[40px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

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
