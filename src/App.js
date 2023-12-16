import React from "react";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/Helloworld";
import Kanbas from "./Kanbas";
import Login from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";


import "bootstrap/dist/css/bootstrap.min.css";
function App() {
   return (
    <HashRouter>
      <div>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/account" element={<Account />}/>
          <Route path="/signup" element={<Account />}/>
          <Route path="/table" element={<UserTable />}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
      </div>
    </HashRouter>
   );
}
export default App;



