import React from "react";
import Input from "../komponen/input";
import Button from "../komponen/button";
import Select from "../komponen/select";
import { useNavigate, useParams } from "react-router-dom";
import { detail, update } from "../API/usr";

export default function UpdateUsers() {
  let navigate = useNavigate();
  let { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState({
    username: "",
    name: "",
    jenis_kelamin: "",
    email: "",
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

      const response = await update(id, users);

      setIsLoading(false);
      return navigate("/users");
    } catch (err) {
      console.log(err);
      alert("Terjadi error di backEnd");
    }
  };
  const getDetailUser = async (id) => {
    try {
      const response = await detail(id);
      console.log("response =>", response.data);
      const dataUser = response.data.data;
      console.log(dataUser);
      setUsers(() => {
        return {
          username: dataUser.username,
          name: dataUser.name,
          jenis_kelamin: dataUser.jenis_kelamin,
          email: dataUser.email,
        };
      });
    } catch (err) {}
  };
  React.useEffect(() => {
    getDetailUser(id);
  }, []);

  return (
    <div>
      <h1>Update Users dengan {id}</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={users.username}
          label={"username :"}
          placeholder={"userName"}
          name={"username"}
          onChange={handleChange}
        />
        <Input
          value={users.name}
          label={"name :"}
          placeholder={"name"}
          name={"name"}
          onChange={handleChange}
        />

        <Input
          value={users.email}
          label={"email :"}
          placeholder={"email"}
          name={"email"}
          onChange={handleChange}
        />

        <Select
          value={users.jenis_kelamin}
          label={"jenis Kelamin :"}
          placeholder={"Jenis Kelamin"}
          name={"jenis_kelamin"}
          onChange={handleChange}
        >
          <option>Pilih</option>
          <option value={"laki-laki"}>Laki-laki</option>
          <option value={"perempuan"}>Perempuan</option>
        </Select>
        <Button title={isLoading ? "memperbarui" : "perbarui"} />
      </form>
    </div>
  );
}
