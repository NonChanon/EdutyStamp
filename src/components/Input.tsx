import React from "react";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {};

const Input = (props: any) => {
  return (
    <div>
      <label className="block mb-1 text-gray-600 font-semibold">
        {props.title}
      </label>
      <input {...props} className="px-4 py-2 rounded-md w-full" />
    </div>
  );
};

export default Input;

// import React from "react";
// import { forwardRef } from "react";
// import { VariantProps, cva } from "class-variance-authority";
// import { merge } from "../utils";

// const inputVariants = cva("", {
//   variants: {
//     variant: {
//       default: "px-4 py-2 rounded-md w-full",
//     },
//     label: {
//       default: "block mb-1 font-semibold",
//     },
//   },
//   defaultVariants: {
//     variant: "default",
//     label: "default",
//   },
// });

// interface InputProps
//   extends React.InputHTMLAttributes<HTMLInputElement>,
//     VariantProps<typeof inputVariants> {}

// const Input = forwardRef<HTMLInputElement, InputProps>(
//   ({ className, variant, label, ...props }, refInp) => {
//     return (
//       <div>
//         <label className={inputVariants({ label })}>{props.title}</label>
//         <input
//           ref={refInp}
//           className={merge(inputVariants({ className, variant }))}
//           {...props}
//         />
//       </div>
//     );
//   }
// );

// export default Input;
