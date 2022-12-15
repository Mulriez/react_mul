import React from "react";
import gambar from "../komponen/img/gambar.jpg";
import Input from "../komponen/input";
import Select from "../komponen/select";
import Button from "../komponen/button";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authRegister } from "../redux/action/authAction";
import { useDispatch } from "react-redux";

export default function Register() {
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
  const [name, setName] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [jenisKelamin, setJenisKelamin] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      payload.name === "" ||
      payload.email === "" ||
      payload.password === "" ||
      payload.status === "" ||
      payload.jenisKelamin === ""
    ) {
      setForm("Form masih kosong");
    }
    if (payload.name === "") {
      setName("Username harus diisi");
    }
    if (payload.email === "") {
      setEmail("Email harus diisi");
    }
    if (payload.email === "") {
      setEmail("Email telah diunakan");
    }
    if (payload.password === "") {
      setPassword("Password harus diisi");
    }
    if (payload.password.length < 8) {
      setPassword("minimal Password 8 karakter");
    }
    if (payload.status === "") {
      setStatus("Status harus diisi");
    }
    if (payload.jenisKelamin === "") {
      setJenisKelamin("Jenis Kelamin harus diisi");
    }
    try {
      setLoading(true);
      const response = await dispatch(authRegister(payload));
      console.log("response", response);
      if (response?.data.status === "Success") {
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
          title: response?.data.msg,
        });
        return navigate("/login", { replace: true });
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
        <form className="w-3/4 py-12" onSubmit={handleSubmit}>
          <div className="ml-40 items-center">
            <h1 className="text-[#446B7D] font-semibold text-4xl mt-20 text-center mr-40">
              Create New Account
            </h1>
            <div className="mt-20 ">
              <p className="text-red-600 ml-16 text-sm italic">{form}</p>
              <Input
                onChange={handleChange}
                name="name"
                value={payload.name}
                placeholder="Name"
              />
              <p className="text-red-600 ml-16 text-sm italic">{name}</p>
              <Input
                onChange={handleChange}
                name="email"
                placeholder="Email"
                type="email"
                value={payload.email}
              />
              <p className="text-red-600 ml-16 text-sm italic">{email}</p>
              <Input
                onChange={handleChange}
                name="password"
                placeholder="Password"
                type="password"
                value={payload.password}
              />
              <p className="text-red-600 ml-16 text-sm italic">{password}</p>
              <Select
                value={payload.status}
                onChange={handleChange}
                name="status"
              >
                <option>Status</option>
                <option value="active">Active</option>
                <option value="nonactive">Non Active</option>
              </Select>
              <p className="text-red-600 ml-16 text-sm italic">{status}</p>
              <Select
                value={payload.jenisKelamin}
                onChange={handleChange}
                name="jenisKelamin"
              >
                <option>Jenis Kelamin</option>
                <option value="laki-laki">laki-laki</option>
                <option value="perempuan">perempuan</option>
              </Select>
              <p className="text-red-600 ml-16 text-sm italic">
                {jenisKelamin}
              </p>
            </div>
            <Button
              color="#446B7D"
              title={loading ? "Process" : "Register"}
            />
            <p className="text-xs text-[#C4C4C4] ml-20">
              by signing up you agree to our terms data policy and cookies
              policy
            </p>
            <div className="flex mx-36 mt-14 font-semibold text-lg">
              <p>Have an account?</p>
              <p
                className="text-blue-600 ml-2 cursor-pointer"
                onClick={() => {
                  return navigate("/login");
                }}
              >
                Sign in
              </p>
            </div>
          </div>
        </form>
        <div className="h-screen  w-2/3">
          <img src={gambar} alt="" className="h-[100%] w-[200%] shadow-m" />
        </div>
      </div>
    </div>
  );
}
