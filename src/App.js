import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./page/login";


function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
