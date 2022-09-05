import { Outlet, Link, useLocation } from "react-router-dom";

export default function Comp() {
  let location = useLocation();
  let path = location.pathname.split("/")[1];
  return (
    <div>
      <div className="mb-5">Computer Model :</div>
      <div className="space-x-5 mb-5">
        <Link to={"/setting/comp/0096"}>Unicorn</Link>
        <Link to={"/setting/comp/Barbatos"}>Barbatos</Link>
        <Link to={"/setting/comp/Exia"}>Exia</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
