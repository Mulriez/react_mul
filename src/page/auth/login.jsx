import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../komponen/button";
import Input from "../../komponen/input";
import {login} from "../../API/auth"
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/action/authAction";


export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
  });
  const [msgError, setMsgError] = React.useState("")
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
    const response = await dispatch(authLogin(payload));
   console.log('response', response);
   if (response?.status === 'Success') {
     return navigate("/artikel", {replace:true})
   }else{
    setMsgError(response?.response?.data?.message)
   }
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
        <p className="text-red-500">{msgError}</p>
        <div className="mt-5 space-x-5">
          <Button
            color="blue"
            title={loading? 'proses' : "login"}
          />
          <Button 
          title={'register'}
          onClick={()=> {
            return navigate("/register") 
          }}/>
        </div>
      </form>
    </>
  );
}
