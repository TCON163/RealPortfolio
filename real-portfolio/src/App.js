import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import TechStack from "./page/TechStack/TechStack";
import HomePage from "./page/HomePage/HomePage";
import './App.css';
import PortCube from "./page/Cube/PortCube";
import Projects from "./page/Projects/Projects";


function App() {
  return (
    <Router>
    
    <Routes>
        {/* the home path route needs the exact keyword or all request will get HomePage */}


        {/* I will change "/" path to homePage just for developing. */}
        <Route  exact  path='/' element={<HomePage/>} />
        <Route path="/home" element={<PortCube/>} />
        {/* I will change "/" path to homePage just for developing. */}


        <Route path="/techstack" element={<TechStack />}/>
        <Route path="/projects" element={<Projects />} />

    </Routes>
    </Router>

  );
}

export default App;
