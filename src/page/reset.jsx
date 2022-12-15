import React from "react";
import gambar from "../komponen/img/gambar.jpg";
import Input from "../komponen/input";
import Button from "../komponen/button";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { authReset } from "../redux/action/authAction";
import { useDispatch } from "react-redux";

export default function Reset() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  let { id, token } = useParams();
  const [payload, setPayload] = React.useState({
    passwordBaru: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (payload.passwordBaru === "" || payload.confirmPassword === "") {
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

        return Toast.fire({
          icon: "error",
          title: "Password / konfirmasi password tidak boleh kosong",
        });
      }
      if (payload.confirmPassword !== payload.passwordBaru) {
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

        return Toast.fire({
          icon: "error",
          title: "Password dan konfirmasi password tidak sama",
        });
      }
      if (
        payload.passwordBaru.length < 8 ||
        payload.confirmPassword.length < 8
      ) {
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

        return Toast.fire({
          icon: "error",
          title: "Password kurang dari 8 huruf",
        });
      }
      if (
        payload.passwordBaru.length > 8 &&
        payload.confirmPassword.length > 8 &&
        payload.confirmPassword === payload.passwordBaru &&
        payload.passwordBaru !== "" &&
        payload.confirmPassword !== ""
      ) {
        const response = await dispatch(authReset(id, token, payload));
        console.log("responseResetPassword =>", response);
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
          return navigate("/login", { replace: true });
        }
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
console.log("payload", payload);
  return (
    <div>
      <div className="flex bg-slate-100">
        <form className="w-3/4 py-52" onSubmit={handleSubmit}>
          <div className="ml-40 items-center">
            <p className="text-[#446B7D] font-semibold  mt-10 text-center mr-40">
              your new password must be diffrent
            </p>
            <p className="text-[#446B7D] font-semibold text-center mr-40 mb-10">
              from previous used password
            </p>
            <Input
              name="passwordBaru"
              onChange={handleChange}
              placeholder="New Password"
            />
            <Input 
            name="confirmPassword"
            onChange={handleChange}
            placeholder="Confirm New Password" />
            <Button
              title={loading ? "proses":"Reset Password" }
              color="#446B7D"
            />
          </div>
        </form>
        <div className="h-screen  w-2/3">
          <img src={gambar} alt="" className="h-[100%] w-[200%] shadow-m" />
        </div>
      </div>
    </div>
  );
}
