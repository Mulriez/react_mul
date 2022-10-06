import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
import {login} from "../../API/auth"


export default function Login() {
  let navigate = useNavigate();

  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [loading,setLoading] = React.useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
try {
    const response = await login(payload);
    const data = response.data
    Cookies.set("myapps_token", data?.token);
    return navigate("/artikel", {replace:true})
} catch (err) {
    console.log(err);
}
finally{
    setLoading(false)
}
    console.log("jalan", payload);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <Input
          onChange={handleChange}
          name="email"
          label={"email"}
          placeholder="Email"
          type="email"
        />
        <Input
          onChange={handleChange}
          name="password"
          label={"password"}
          placeholder="Password"
          type="password"
        />
        <div className="text-white mt-5">
          <Button
            color="blue"
            title={loading? "Bentar bang" : "Log in"}
          />
        </div>
      </form>
    </>
  );
}
