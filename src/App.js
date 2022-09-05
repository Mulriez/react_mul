import React from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import Register from "./page/register"
import Login from "./page/login";
import Admin from "./page/admin";
import Dashboard from "./page/admin/dashboard";
import User from "./page/admin/user";
import Kelas from "./page/admin/kelas";
import Detail from "./pages/detail";
import NotFound from "./pages/notFound";



function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Admin" element={<Admin/>} >
            <Route path="Dashbord" element={<Dashboard/>}/>
            <Route path="Users" element={<User/>}/>
            <Route path="Kelas" element={<Kelas/>}/>
          </Route>
        <Route  />
        <Route path="/Register" element={<Register />} />
        <Route path="/about/:id/:nm" element={<Detail />} />
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
