import { useState, FormEvent } from "react";
import useAuth from "../hooks/useAuth";
import Logo from "../imgs/logo.png";
import Input from "../components/Input";
import Form from "../components/Form";

const initState = {
  username: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initState);
  const [error, setError] = useState(false);
  const { login } = useAuth();

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const temp: any = { ...form };
    temp[e.currentTarget.name] = e.currentTarget.value;
    setForm(temp);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const temp = { ...form };
      const res = await login(temp);
      setError(res.error);
    } catch (err) {
      console.log(error);
    }
  };
  let template = {
    title: "Log In",
    fields: [
      {
        title: "Username",
        type: "text",
        name: "username",
      },
      {
        title: "Password",
        type: "password",
        name: "password",
      },
    ],
    button: [
      {
        name: "Register",
      },
    ],
  };
  return <Form template={template} />;
};

export default Login;
