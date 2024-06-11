import "./App.css";
import { Route, Routes } from "react-router-dom";
import Calculator from "./Calculator";

import Home from "./Home";
import Tasks from "./Tasks";

function App() {


  return <div className="App">
    <Routes>
      <Route path="" element={<Home/>} />
      
      <Route path="calculator" element={<Calculator/>} />
     
    </Routes>
  </div>;
}

export default App;
