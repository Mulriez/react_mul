import React from "react";
import Button from "./component/button";
import "./style/style.css";
import Input from "./component/input";
import Card from "./component/card";

export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin:"",
    password: "",
    confirmPassword: "",
  });

  const [data, setData] = React.useState([]);
  const [errors, setErrors] = React.useState({});

  const handleChange = (event) => {
    console.log("jalan");
    setValues((values) => {
      return {
        ...values,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleBlur = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      setErrors((errors) => {
        return { ...errors, [e.target.name]: true };
      });
    }
    if (e.target.value !== "") {
      setErrors({
        ...errors,
        [e.target.name]: false,
      });
    } 
    else {
      setErrors({
        ...errors,
        [e.target.name]: true,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    values.id = new Date().getTime();
    setData((data) => {
      return [...data, values];
    });
    setValues((values) => {
      return {
        username: "",
        email: "",
        tempatLahir: "",
        tanggalLahir: "",
        jenisKelamin:"",
        password: "",
        confirmPassword: "",
      };
    });
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <div> 
          <form 
          className="op"
          onSubmit={handleSubmit}>
            
            <Input
              isError={errors?.username}
              textError={"wajib diisi"}
              name="username"
              value={values.username}
              label={"Nama"}
              placeholder="Nama"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Input
              isError={errors?.email}
              textError={"wajib diisi"}
              name="email"
              value={values.email}
              label={"Email"}
              placeholder="Email"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Input
              isError={errors?.tempatLahir}
              textError={"wajib diisi"}
              name="tempatLahir"
              value={values.tempatLahir}
              label={"Tempat Lahir"}
              placeholder="Tempat Lahir"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Input
              type="date"
              isError={errors?.tanggalLahir}
              textError={"wajib diisi"}
              name="tanggalLahir"
              value={values.tanggalLahir}
              label={"Tanggal Lahir"}
              placeholder="Tanggal Lahir"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Input
              isError={errors?.jenisKelamin}
              textError={"wajib diisi"}
              name="Jenis Kelamin"
              value={values.jenisKelamin}
              label={"Jenis Kelamin"}
              placeholder="Jenis Kelamin"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Input
              isError={errors?.password}
              textError={"wajib diisi"}
              name="password"
              value={values.password}
              label={"Password"}
              placeholder="Password"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Input
              isError={errors?.confirmPassword}
              textError={"wajib diisi"}
              name="confirmPassword"
              value={values.confirmPassword}
              label={"Konfirmasi Password"}
              placeholder="Konfirmasi Password"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Button title={"Reset"} color="blue" />
            <Button type="submit" title={"Save"} />
          </form>
        </div>
        <div
          style={{
            display:"flex",
            width: "20%",
            height: "20vh",
            marginLeft: "60vh",
          }}
        >
          <Card data={data} value={values} setData={setData} />
        </div>
      </div>
    </React.Fragment>
  );
}