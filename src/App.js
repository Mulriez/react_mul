import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import Home from "./page/home";
import Admin from "./page/admin";
import Not from "./page/not";
import About from "./page/about";
import Dash from "./page/dash";
import Buku from "./page/buku";
import Add from "./page/add";
import Update from "./page/update";
import Detail from "./page/detail";
import Alter from "./page/alternate";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/alter" element={<Alter />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dash />} />
          <Route path="buku" element={<Buku />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/tambah" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/404" element={<Not />} />
        <Route path="*" element={<Navigate to="/404" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

//JSX harus dibungkus dalam satu element parent

export default App;
