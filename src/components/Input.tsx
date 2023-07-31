// import React from "react";

// type Props = React.DetailedHTMLProps<
//   React.InputHTMLAttributes<HTMLInputElement>,
//   HTMLInputElement
// > & {};

// const Input = (props: any) => {
//   return (
//     <div>
//       <label className="block mb-1 text-gray-600 font-semibold">
//         {props.title}
//       </label>
//       <input {...props} className="px-4 py-2 rounded-md w-full" />
//     </div>
//   );
// };

// export default Input;

import React from "react";
import { forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { merge } from "../utils";

const inputVariants = cva("", {
  variants: {
    variant: {
      default: "rounded w-[300px] h-10 border-[#DFDFDF] border-[1px] pl-3",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, refInp) => {
    return (
      <input
        className={merge(inputVariants({ className, variant }))}
        ref={refInp}
        {...props}
      />
    );
  }
);

export default Input;
