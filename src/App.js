import React from 'react';
import Layout from './component/layout';
import Button from './component/button';
import "./style/style.css"
import Input from './component/input'

export default function App() {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const handleChange = (e)=>{
    e.preventDefault()
    console.log('awas jatoh');
    setValues((values) => {
      return {
        ...values,
        [e.target.name]: e.target.value,
      }
    })
  }
  return (
    <React.Fragment>
      <div style={{ display: 'flex' }}>
        <form style={{ width: "50%" }}>
          <Input
            name="username"
            value={values.name}
            label={"Username"}
            placeholder='username'
            onChange={(event) => {
              event.preventDefault();
              console.log("ok jalan")
              console.log(event)
              setValues((values) => {
                return {
                  ...values,
                  username: event.target.value,
                }
              })
            }}
          />
          <Input
            name="email"
            value={values.email}
            label={"Email"}
            placeholder="email"
            onChange={handleChange}
          />
          <Input
            name="password"
            value={values.password}
            label={"Password"} 
            placeholder="password"
            onChange={handleChange}
          />
          <Input
            name="confirmPassword"
            value={values.confirmPassword}
            label={"Confirm Password"} 
            placeholder="confirmPassword"
            onChange={handleChange}
          />
          <Button title={"simpan"} />
        </form>
        <div
          style={{
            marginLeft: "50px"
          }}
        >
          <p>Username : {values?.name}</p>
          <p>Email : {values?.email}</p>
          <p>Password : {values?.password}</p>
          <p>Confirm-Password : {values?.confirmPassword}</p>
        </div>
      </div>
    </React.Fragment>

  )
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