import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./page/HomePage";
import './App.css';
import PortCube from "./page/Cube/PortCube";

function App() {
  return (
    <Router>
    <Routes>
        {/* the home path route needs the exact keyword or all request will get HomePage */}
        <Route  path='/home' element={<HomePage/>} />
        <Route exact path="/" element={<PortCube/>} />

        
    </Routes>
    </Router>

  );
}

export default App;
