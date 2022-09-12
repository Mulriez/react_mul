import React  from "react";
import {Routes, Navigate, Route} from 'react-router-dom'
import User from "./page/user";



function App() {
  return(
    <React.Fragment>
      <Routes>
        <Route path="/user" element={<User/>}/>
        {/* <Route path="/user/:id/detail" element={<UserDetail/>}/> */}
        <Route path="*" element={<Navigate to="/user" replace={true}/>}/>
      </Routes>
    </React.Fragment>
    
      
  )
}

//JSX harus dibungkus dalam satu element parent

export default App;


