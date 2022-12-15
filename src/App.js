import React from "react";
import { Routes, Route } from "react-router-dom";
import Dash from "./page/dash";
import Detail from "./page/detailprod";
import Fp from "./page/forgot";
import History from "./page/history";
import Keranjang from "./page/keranjang";
import Login from "./page/login";
import Register from "./page/register";
import Reset from "./page/reset";
import ProtectRoute from "./router/protectRoute";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Fp />} />
        <Route path="/reset-password/:id/:token" element={<Reset />} />
        <Route
          path="/dashboard"
          element={
            <ProtectRoute>
              <Dash />
            </ProtectRoute>
          }
        />
        <Route
          path="/product/detail/:uuid"
          element={
            <ProtectRoute>
              <Detail />
            </ProtectRoute>
          }
        />
        <Route
          path="/keranjang"
          element={
            <ProtectRoute>
              <Keranjang/>
            </ProtectRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectRoute>
              <History/>
            </ProtectRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
