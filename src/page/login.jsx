import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();
    const handleLogin = () =>{
        return navigate('/admin/dashboard', {replace:true})
}
  return (
    <div>
      Login Page
      <NavLink
       extact to={"/Admin"}
       onClick={handleLogin}
      className="flex mb-3 mt-3 text-green-400"
      >
        Login
      </NavLink>
      <NavLink
        exact
        to={"/Register"}
        className="text-green-400"
      >
        Register
      </NavLink>
    </div>
  );
}
