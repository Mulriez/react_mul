import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import Select from "../komponen/select";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { data } from "autoprefixer";

export default function CreateUser() {
  let navigate = useNavigate();
  let id = useParams();

  const [isLoading, setIsLoading] = React.useState(false);

  const [users, setUsers] = React.useState({
    username: "",
    email: "",
    name: "",
    jenis_kelamin: "",
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
      const response = await axios.put(`https://belajar-react.smkmadinatulquran.sch.id/api/users/update/${id}`, users)
      setIsLoading(false);
      return navigate("/user");
    } catch (err) {
      console.log(err);
      setIsLoading(true);
      alert("There Is An Error!!");
    }
  };

  const getUserDetail = async (id) => {
    try {
      const response = await axios.get(
        `https://belajar-react.smkmadinatulquran.sch.id/api/users/detail/${id}`
      );
      console.log("response =>", response.data);

      const dataUser = response.data.data;
      setUsers(()=>{
        return {
            username: dataUser.username,
            email: dataUser.email,
            name: dataUser.name,
            jenis_kelamin: dataUser.jenis_kelamin,
        }
      })
    } catch (err) {}
  };

  React.useEffect(() => {
    getUserDetail(id);
  }, []);

  return (
    <div>
      <h1>Update User dengan id  </h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={users.username}
          label={"username"}
          name={"username"}
          onChange={handleChange}
        />

        <Input
          label={"name"}
          value={users.name}
          name={"name"}
          onChange={handleChange}
        />

        <Input
          value={users.email}
          label={"email"}
          type="email"
          name={"email"}
          onChange={handleChange}
        />

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

        <Button title={isLoading ? "Updating" : "Update"} />
        <Link to="/user" className="px-4">
          <Button color="blue" title={"Back"} />
        </Link>
      </form>
    </div>
  );
}
