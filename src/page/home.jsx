import React from "react";
import { Link } from "react-router-dom";
import Button from "../komponen/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-xl">Penilaian Tengah semester 2022</h1>
      <Link to="/alter">
      <Button color="blue" title={"Home"} />
      </Link>
      <Link to="/admin">
        <Button color="red" title={"login"} />
      </Link>
    </div>
  );
}
