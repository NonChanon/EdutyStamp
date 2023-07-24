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
    title: "Login",
    fields: [
      {
        title: "Username",
        type: "text",
        name: "username",
      },
    ],
  };
  return (
    // <div classNameName="">
    //   <div classNameName="">
    //     <form classNameName=" w-40 flex flex-col" onSubmit={handleSubmit}>
    //       <Input
    //         title="Username"
    //         placeholder="Username"
    //         value={form.username}
    //         onChange={handleChange}
    //         required
    //       />
    //       <input
    //         required
    //         name="password"
    //         type="password"
    //         placeholder="Password"
    //         value={form.password}
    //         onChange={handleChange}
    //       />
    //       <button id="submit" type="submit">
    //         login
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <Form template={template} />
  );
};

export default Login;
