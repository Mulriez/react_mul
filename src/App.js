// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// function App(){
//   let a = 20
//   let b = 10
//   return (
//     <div>
//       <h1>Hello World ke-{a}</h1>
//       <h1>Hello World ke-{a+b}</h1>
//     </div>
//   )
// }

// export default App;

// function App() {
//   let a = 20
//   let b = 20
//   return(
//     <React.Fragment>
//       <h1>SANGAT PAHAM UNTUK YG KE {a}</h1>
//       <h1>SANGAT PAHAM UNTUK YG KE {a+b}</h1>
//     </React.Fragment>
//   );
// }

// export default App;

// import React from 'react';
// import Header from './component/Header';
// import Tes from './component/module/Tes';
// import {Button, Input} from './component/Named';

// function App() {
//   return(
//     <React.Fragment>
//       <h1>LATIHAN EXPORT IMPORT</h1>
//       <Header/>
//       <Tes/>
//       <Input/>
//       <Button/>
//     </React.Fragment>
//   );
// }

// export default App;

import React from "react";
import "./style/style.css";
import Identitas from "./component/module/Identitas";
import Nilai from "./component/module/nilai";
import DataSiswa from "./component/module/Datasiswa";

function App() {
  let [data, setData] = React.useState([10, 20, 30, 40, 50]);
  const [dataSiswa, setDataSiswa] = React.useState([
    {
      nama: "Hilmi",
      kelas: "XI RPL",
      nilai: 100,
    },
    {
      nama: "Harry",
      kelas: "XI TKJ",
      nilai: 90,
    },
    {
      nama: "Abi",
      kelas: "XI RPL",
      nilai: 80,
    },
  ]);

  return (
    <React.Fragment>
      <h1 className="header">Latihan Props</h1>
      <section>
        <Identitas nama={"Hilmi"} kelas={"XI RPL"} nilai={100} />
        <Identitas nama={"Radhy"} kelas={"XI TKJ"} nilai={90} />
        <Identitas nama={"Nabil"} kelas={"XI RPL"} nilai={100} />
        <Identitas nama={"Harry"} kelas={"XI TKJ"} nilai={80} />
        <Identitas />
      </section>

      <Nilai nama={"Mul"} data={data} />

      <DataSiswa data={dataSiswa}/>
    </React.Fragment>
  );
}

export default App;