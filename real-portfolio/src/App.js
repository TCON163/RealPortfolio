import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import TechStack from "./page/TechStack/TechStack";
import HomePage from "./page/HomePage/HomePage";
import './App.css';
import PortCube from "./page/Cube/PortCube";
import Projects from "./page/Projects/Projects";
import Contact from "./page/Contact/Contact";


function App() {
  return (
    <Router>
    
    <Routes>
        {/* the home path route needs the exact keyword or all request will get HomePage */}



        <Route   path='/home' element={<HomePage/>} />
        <Route exact path="/" element={<PortCube/>} />
      


        <Route path="/techstack" element={<TechStack />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

    </Routes>
    </Router>

  );
}

export default App;
