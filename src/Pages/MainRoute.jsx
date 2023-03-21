import React from 'react';
import {Routes , Route} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

export const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Projects/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/skill" element={<Skills/>}/>
    </Routes>
  )
}


