import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

type Props = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {};

function Form({ template }: any) {
  let { register, handleSubmit } = useForm();
  let { title, fields } = template;

  const renderFields = (fields: any) => {
    return fields.map((field: any) => {
      let { title, type, name } = field;
      return <Input title={title} type={type} name={name} ref={register} />;
    });
  };

  return (
    <form className="absolute" onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white px-10 py-8 rounded w-screen shadow-md max-w-sm">
        <div className="space-y-4">
          <h1 className="text-center text-2xl font-semibold text-gray-600">
            {title}
          </h1>
          {renderFields(fields)}
        </div>
      </div>
    </form>
  );
}

function onSubmit(values: any) {
  console.log(values);
}

export default Form;
