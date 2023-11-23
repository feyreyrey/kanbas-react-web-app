import React from "react";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/Helloworld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
   return (
    <HashRouter>
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="/Labs/a3"/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
        </Routes>
      </div>
    </HashRouter>
   );
}
export default App;



