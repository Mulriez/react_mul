import React  from "react";
import {Routes, Navigate, Route} from 'react-router-dom'
import User from './page/user';
import CreateUser from "./page/createuser";
import UpdateUser from "./page/updateUsr";


function App() {
  return(
    <React.Fragment>
      <h1 className="bg-red-500 text-white">Belajar API</h1>
      <Routes>
        <Route path="/user" element={<User/>}/>
        {/* <Route path="/user/:id/detail" element={<UserDetail/>}/> */}
        <Route path="/user/create" element={<CreateUser/>}/>
        <Route path="/user/update/:id" element={<UpdateUser/>}/>
        <Route path="*" element={< Navigate to="/User" replace={true}/>}/>
      </Routes>
    </React.Fragment>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;