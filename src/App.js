import React from "react";
import Button from "./component/button";
import "./style/style.css";
import Input from "./component/input";
import Card from "./component/card";
import Textarea from './component/textarea';

export default function App() {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
  });

  const [data, setData] = React.useState([]);
  const [errors, setErrors] = React.useState({});

  const handleChange = (event) => {
    setValues((values) => {
      return {
        ...values,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleBlur = (e) => {
    e.preventDefault();
    console.log("errors");
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
    } else {
      setErrors({
        ...errors,
        [e.target.name]: true,
      });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Tersubmit");

    values.id = new Date().getTime();
    setData((data) => {
      return [...data, values];
    });
    setValues((values) => {
      return {
        username: "",
        email: "",
      };
    });
  };


  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <div>
          <form 
          textError={"Form harus diisi"}
          className="op" 
          onSubmit={handleSubmit} 
          onBlur={handleBlur}
          >
            <p className="ml">Buku Catatan</p>
            <Input
              isError={errors?.username}
              textError={"Tidak Sesuai"}
              name="username"
              value={values.username}
              placeholder="judul"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Textarea
              cols="50"
              rows="10"
              isError={errors?.email}
              textError={"Tidak sesuai"}
              name="email"
              value={values.email}
              placeholder="catatan"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <Button title={"Save"} />
          </form>
        </div>
        <div
          style={{
            width: "40%",
            height: "40vh",
            marginLeft: "20%",
          }}
        >
          <Card data={data} value={values} setData={setData} />
        </div>
      </div>
    </React.Fragment>
  );
}

// function App() {
//   let [count, setCount] = React.useState(0);
//   const handleTambah = () => {
//     setCount(count + 1)
//   };
//   const handleKurang = () => {
//     setCount(count - 1)
//   };
//   return (
//     <React.Fragment>

//       <h1>count = {count}</h1>
//       <Button onClick={handleTambah} title='Tambah' color='blue' />
//       <Button disabled={count <= 0 ? true : false} onClick={handleKurang} title='Kurang' color='green' />
//       <Button disabled={count === 0 ? true : false} onClick={() => {
//         setCount(0)
//       }} title='Resets' />

//     </React.Fragment>
//   );
// }

// export default App;
