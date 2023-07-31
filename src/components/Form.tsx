import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { Button } from "./Button";

type Props = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
> & {};

function Form({ template }: any) {
  let { register, handleSubmit } = useForm();
  let { title, fields, button } = template;

  const renderFields = (fields: any) => {
    return fields.map((field: any) => {
      let { title, type, name } = field;
      return (
        <div>
          <label htmlFor={title}>{title}</label>
          <Input type={type} name={name} />
        </div>
      );
    });
  };

  const buttonFields = (button: any) => {
    return button.map((btn: any) => {
      let { name } = btn;
      return <Button size={"full"}>{name}</Button>;
    });
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-white px-10 py-8 rounded w-screen shadow-md max-w-sm text-sm">
        <div className="space-y-4 flex flex-col items-center">
          <h1 className="text-center text-2xl font-semibold text-gray-600">
            {title}
          </h1>
          {renderFields(fields)}
          {buttonFields(button)}
        </div>
      </div>
    </form>
  );
}

function onSubmit(values: any) {
  console.log(values);
}

export default Form;
