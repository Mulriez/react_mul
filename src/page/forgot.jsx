import React from "react";
import gambar from "../komponen/img/gambar.jpg";
import lock from "../komponen/img/lock.png";
import Input from "../komponen/input";
import Button from "../komponen/button";
import { useNavigate } from "react-router-dom";
import { authForgot } from "../redux/action/authAction";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function Fp() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [payload, setPayload] = React.useState({
    email: "",
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
  const [messageError, setMessageError] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(false)
      const response = await dispatch(authForgot(payload));
      console.log("response", response);
      if (response?.status === "Success") {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: 'success',
          title: response?.msg,
        });
        return navigate("/login", { replace: true });
      } else {
        setMessageError(response?.response?.data?.msg);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(true)
    }
    console.log("goo");
  };
  return (
    <div>
      <div className="flex bg-slate-100">
        <form className="w-3/4 py-10" onSubmit={handleSubmit}>
          <div className="ml-40 items-center">
            <img src={lock} alt="" className="px-28" />
            <p className="text-[#446B7D] font-semibold  mt-10 text-center mr-40">
              Enter your email and we'll send you
            </p>
            <p className="text-[#446B7D] font-semibold text-center mr-40 mb-10">
              a link to get back into your account.
            </p>
            <Input
              required
              onChange={handleChange}
              value={payload.email}
              name={"email"}
              type={"email"}
              placeholder="Email"
            />
            <p className="text-red-600 ml-16 text-sm italic">{messageError}</p>
            <Button title={loading ? "proses" : "Send Email"} color="#446B7D" />
            <div className="flex mx-44">
              <p
                className="text-blue-600 cursor-pointer"
                onClick={() => {
                  return navigate("/register");
                }}
              >
                Create New account
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
