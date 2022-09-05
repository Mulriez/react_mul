import {Outlet, Link, useNavigate } from "react-router-dom";

export default function Admin() {
  let navigate = useNavigate();

  return (
    <div>
      <nav className="text-red-600">
        <Link className="flex mb-3" to={"admin/dashboard"}>Dashboard</Link>
        <Link  className="flex mb-3" to={"admin/users"}>Users</Link>
        <Link to={"admin/kelas"}>kelas</Link>
      </nav>
      <section className="mt-5">
        <Outlet />
      </section>
      <button
        className="text-green-400"
        onClick={() => {
          return navigate(-1);
        }}
      >
        {""}
        Logout
      </button>
    </div>
  );
}
