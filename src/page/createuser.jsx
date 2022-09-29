import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import Select from "../komponen/select";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { createUser } from "../API/usr";

export default function CreateUser() {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  let [MsgError, setMsgError] = React.useState("");
  const [errorz, setErrorz] = React.useState({});
  const [users, setUsers] = React.useState({
    username: "",
    email: "",
    name: "",
    jenis_kelamin: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setUsers((users) => {
      return {
        ...users,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    try {
      setIsLoading(true);
      const response = await createUser(users);
      setIsLoading(false);
      return navigate("/user");
    } catch (err) {
      console.log(err);

      setErrorz(err?.response?.data?.errorz);
      setIsLoading(true);
      setMsgError("periksa inputan kembali");
    }
  };
  return (
    <div>
      <h1 className="text-xl text-purple-600">Tambah User</h1>
      <p className="text-red-700"> {MsgError}</p>
      <form onSubmit={handleSubmit}>
        <p className="text-red-700">{errorz?.username?.[0]}</p>
        <Input
          value={users.username}
          label={"username"}
          name={"username"}
          onChange={handleChange}
        />

        <p className="text-red-700">{errorz?.name?.[0]}</p>
        <Input
          label={"name"}
          value={users.name}
          name={"name"}
          onChange={handleChange}
        />

        <p className="text-red-700">{errorz?.email?.[0]}</p>
        <Input
          value={users.email}
          label={"email"}
          type="email"
          name={"email"}
          onChange={handleChange}
        />

        <p className="text-red-700">{errorz?.jenis_kelamin?.[0]}</p>
        <Select
          value={users.jenis_kelamin}
          label={"jenis Kelamin"}
          placeholder="jenis_kelamin"
          name={"jenis_kelamin"}
          onChange={handleChange}
        >
          <option>Pilih</option>
          <option value={"laki-laki"}>Lelaki</option>
          <option value={"perempuan"}>Perempuan</option>
        </Select>

        <p className="text-red-700">{errorz?.password?.[0]}</p>
        <Input
          value={users.password}
          label={"password"}
          name={"password"}
          onChange={handleChange}
        />

        <p className="text-red-700">{errorz?.password_confirmation?.[0]}</p>
        <Input
          value={users.password_confirmation}
          label={"konfirmasi password"}
          name={"password_confirmation"}
          onChange={handleChange}
        />
        <Button title={isLoading ? "saving" : "save"} />
        <Link to="/user" className="px-4 text-white">
          <Button color="blue" title={"Back"} />
        </Link>
      </form>
    </div>
  );
}
