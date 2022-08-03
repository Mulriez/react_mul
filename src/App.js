import React from 'react';
import Layout from './component/layout';
import Button from './component/button';
import "./style/style.css"

export default function App() {
  
  let [name,setName] = React.useState('');
  let [email,setEmail] = React.useState('');
  let [password,setPassword] = React.useState('');
  let [confirmpassword,setConfirmpassword] = React.useState('');
  return(
    <React.Fragment>
      <form>Tes</form>
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