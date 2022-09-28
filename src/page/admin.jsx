import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../komponen/button";

export default function Admin() {
  return (
    <div>
      <div className="mt-5">
        <Link to={"dashboard"}
        className="mr-3 text-white">
          <Button title={"dashboard"} color="green" />
        </Link>
        <Link to={"buku"}
        className="mr-3 text-white">
          <Button title={"buku"} color="red" />
        </Link>
        <Link to={"about"}
        className="text-white">
          <Button title={"about"} color="blue" />
        </Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}
