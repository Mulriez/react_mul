import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import User from "./page/user";
import CreateUser from "./page/createuser";
import UpdateUser from "./page/updateUsr";
import ProtectRoute from "./routers/protectRoute";
import Login from "./page/auth/login";
import Artikel from "./page/artikel";
import Tambah from "./page/artikel/tambah";


function App() {
  return (
    <React.Fragment>
      <h1 className="bg-red-500 text-white">Belajar API</h1>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route
          path="/upgrade/"
          element={
            <ProtectRoute>
              <Upgrade />
            </ProtectRoute>
          }
        /> */}
        <Route
          path="/artikel"
          element={
            <ProtectRoute>
              <Artikel />
            </ProtectRoute>
          }
        />
        <Route
          path="/tambahArt"
          element={
            <ProtectRoute>
              <Tambah />
            </ProtectRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectRoute>
              <User />
            </ProtectRoute>
          }
        />
        {/* <Route
          path="/user/:id/detail"
          element={
            <ProtectRoute>
              <UserDetail />
            </ProtectRoute>
          }
        /> */}
        <Route
          path="/user/create"
          element={
            <ProtectRoute>
              <CreateUser />
            </ProtectRoute>
          }
        />
        <Route
          path="/user/update/:id"
          element={
            <ProtectRoute>
              <UpdateUser />
            </ProtectRoute>
          }
        />
        <Route path="*" element={<Navigate to="/User" replace={true} />} />
      </Routes>
    </React.Fragment>
  );
}

//JSX harus dibungkus dalam satu element parent

export default App;
