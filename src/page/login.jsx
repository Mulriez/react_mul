import React from "react";
import gambar from "../komponen/img/gambar.jpg";
import Input from "../komponen/input";
import Button from "../komponen/button";
import { login } from "../API/auth";
import { useDispatch } from "react-redux";
import { authLogin } from "../redux/action/authAction";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const [payload, setPayload] = React.useState({
    email: "",
    password: "",
    name: "",
    status: "",
    jenisKelamin: "",
  });
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      payload.email === "" ||
      payload.password === "" 
    ) {
      setForm("Form masih kosong");
    }
    if (payload.email === "") {
      setEmail("Email harus diisi");
    }
    if (payload.password === "") {
      setPassword("Password harus diisi");
    }
    try {
      setLoading(true);
      const response = await dispatch(authLogin(payload));
      console.log("response", response);
      if (response?.status === "Success") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: response?.msg,
        });
        return navigate("/dashboard", { replace: true });
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: response?.response?.data?.msg,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    console.log("jalan", payload);
  };

  return (
    <div>
      <div className="flex bg-slate-100">
        <div className="w-3/4 py-28">
          <form className="ml-40 items-center" onSubmit={handleSubmit}>
            <h1 className="text-[#446B7D] font-semibold text-4xl mt-20 text-center mr-40">
              Welcome Back
            </h1>
            <div className="mt-20">
            <p className="text-red-600 ml-16 text-sm italic">{form}</p>
              <Input
                onChange={handleChange}
                name="email"
                placeholder="Email"
                type="email"
              />
              <p className="text-red-600 ml-16 text-sm italic">{email}</p>
              <Input
                onChange={handleChange}
                name="password"
                placeholder="Password"
                type="password"
              />
              <p className="text-red-600 ml-16 text-sm italic">{password}</p>
            </div>
            <p
              className="text-sm mt-4 text-center text-blue-600 italic cursor-pointer -mr-32 "
              onClick={() => {
                return navigate("/forgot");
              }}
            >
              Forgot Password
            </p>
            <Button title={loading ? "Process" : "Login"} color="#446B7D" />
            <div className="flex mx-40 text-sm">
              <p className="text-[#C4C4C4] ">Dont have an account?</p>
              <p
                className="text-red-600 ml-2 cursor-pointer "
                onClick={() => {
                  return navigate("/register");
                }}
              >
                Sign up
              </p>
            </div>
          </form>
        </div>
        <div className="h-screen  w-2/3">
          <img src={gambar} alt="" className="h-[100%] w-[200%] shadow-m" />
        </div>
      </div>
    </div>
  );
}
