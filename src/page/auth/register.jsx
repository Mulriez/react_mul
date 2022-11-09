import React from 'react'
import Button from "../../komponen/button";
import { useNavigate } from "react-router-dom";
import Input from "../../komponen/input";
import {useDispatch} from 'react-redux';
import { authRegister } from '../../redux/action/authAction';

export default function Register() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [isLoading, setIsLoading] = React.useState(false)
  const [errorEmail, setErrorEmail] = React.useState("")  
  const [errorName, setErrorName] = React.useState("")  
  const [errorPassword, setErrorPassword] = React.useState("")  
  const [errorConfirmPass, setErrorConfirmPass] = React.useState("")  
  const [payload, setPayload] = React.useState({
    name : "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errorMessage, setErrorMessage] = React.useState("")
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        setIsLoading(true);
        const response = await dispatch(authRegister(payload));
        console.log('response', response);
        if (response?.status === "Success") {
          return navigate("/user", { replace: true });
        } else {
          setErrorMessage(response?.response?.data?.message);
          setErrorConfirmPass(response?.response?.data?.errors?.password_confirmation)
          setErrorEmail(response?.response?.data?.errors?.email)
          setErrorName(response?.response?.data?.errors?.name)
          setErrorPassword(response?.response?.data?.errors?.password)
        }
        
    } catch (error) {
        console.log(error);
    } finally {
        setIsLoading(false);
    }
    console.log("Masuk", payload);
  };
  return (
    <div className="">
      <h1 className="mb-5 h-10 py-auto text-2xl">User Register</h1>
      <form onSubmit={handleSubmit}>
        <p className="text-red-500 mb-5">{errorMessage}</p>
        <p>Masukan Nama</p>
        <p className="text-red-500">{errorName}</p>
        <Input 
          name="name" 
          placeholder="Name" 
          type="name" 
          onChange={handleChange} 
        />
        <p>Masukan Email</p>
        <p className="text-red-500">{errorEmail}</p>
        <Input 
          name="email" 
          placeholder="Email" 
          type="email" 
          onChange={handleChange} 
        />
        <p>Masukan Password</p>
        <p className="text-red-500">{errorPassword}</p>
        <Input 
          name="password" 
          placeholder="Password" 
          type="password" 
          onChange={handleChange} 
        />
         <p>Masukan Ulang Password</p>
        <p className="text-red-500">{errorConfirmPass}</p>
        <Input 
          name="password_confirmation" 
          placeholder="Password Confirmation" 
          type="password_confirmation" 
          onChange={handleChange} 
        />
        <div className="mt-5 flex space-x-5 mb-5">
          <Button
            color="blue"
            title={isLoading ? 'Sign Up' : 'Register'}
          />
          <Button
          title={"back to login"}
          onClick={()=>{
            return navigate("/login")
          }}
          />
        </div>
      </form>
    </div>
  );
}